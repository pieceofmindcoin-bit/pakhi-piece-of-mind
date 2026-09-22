from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import ipaddress
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import Optional
import uuid
from datetime import datetime, timezone
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

logger = logging.getLogger(__name__)

app = FastAPI()
api_router = APIRouter(prefix="/api")

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
OWNER_EMAIL = os.environ.get("OWNER_EMAIL", "delivered@resend.dev")


class ContactMessageCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: str = Field(min_length=3, max_length=320)
    phone: Optional[str] = ""
    enquiry_type: str = Field(min_length=1, max_length=100)
    message: str = Field(min_length=1, max_length=5000)


_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan(); scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: str | None = None) -> str | None:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to:
        payload["contact_email"] = reply_to
    async with httpx.AsyncClient(timeout=30) as client:
        resp = await client.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": EMAIL_KEY},
            json=payload,
        )
    resp.raise_for_status()
    return resp.json().get("id")


@api_router.get("/")
async def root():
    return {"message": "Piece of Mind API"}


@api_router.post("/contact")
async def create_contact_message(input: ContactMessageCreate):
    doc = input.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.contact_messages.insert_one(doc)

    subject = f"New enquiry: {doc['enquiry_type']} — {doc['name']}"
    rows = "".join(
        f'<tr><td style="padding:6px 16px 6px 0;color:#5C6660;font-size:13px;vertical-align:top">{label}</td>'
        f'<td style="padding:6px 0;font-size:14px;color:#2C3E3E">{value}</td></tr>'
        for label, value in [
            ("Name", escape(doc["name"])),
            ("Email", escape(doc["email"])),
            ("Phone", escape(doc.get("phone") or "—")),
            ("Enquiry type", escape(doc["enquiry_type"])),
            ("Message", escape(doc["message"]).replace("\n", "<br>")),
        ]
    )
    html = (
        '<table role="presentation" width="100%"><tr><td style="padding:24px;font-family:Arial,sans-serif">'
        f'<p style="font-size:16px;color:#2C3E3E;margin:0 0 16px">New enquiry from the {escape(EMAIL_FROM_NAME)} website.</p>'
        f'<table role="presentation">{rows}</table>'
        f'<p style="font-size:12px;color:#888;margin:20px 0 0">Sent by the {escape(EMAIL_FROM_NAME)} contact form. '
        'Reply directly to the sender using their email address above.</p>'
        '</td></tr></table>'
    )
    try:
        await send_email(to=OWNER_EMAIL, subject=subject, html=html, reply_to=doc["email"])
    except Exception as e:
        logger.error(f"Enquiry notification email failed: {e}")

    return {"status": "received", "id": doc["id"]}


JOURNAL_POSTS = [
    {
        "slug": "you-dont-have-to-have-it-all-figured-out",
        "title": "You don't have to have it all figured out",
        "excerpt": "On beginning therapy before you have the words — and why uncertainty is a perfectly good place to start.",
        "date": "2026-09-01",
        "reading_time": "3 min read",
        "content": [
            "Many people wait to reach out until they can explain exactly what's wrong. As if therapy were an exam you need to prepare for, rather than a room you can simply walk into.",
            "But you don't need the right words, a clear reason, or a crisis. A quiet feeling that something's off is reason enough. So is curiosity. So is tiredness that sleep doesn't fix.",
            "Therapy isn't about arriving with answers. It's about having a space where the questions are allowed to be messy, half-formed, or entirely absent — and where someone is trained to sit with you in that.",
            "If you've been waiting until you can articulate it perfectly, consider this your permission to begin before then.",
        ],
    },
    {
        "slug": "rest-is-not-a-reward",
        "title": "Rest is not a reward",
        "excerpt": "We treat rest like something to be earned. A gentler way to think about slowing down.",
        "date": "2026-08-18",
        "reading_time": "3 min read",
        "content": [
            "Somewhere along the way, rest became a finish line — something you get to do only after everything else is done. The trouble is, everything else is never done.",
            "Rest isn't the opposite of productivity. It's part of how a nervous system stays well. When we only allow ourselves to stop once we're depleted, we're not resting — we're recovering. There's a difference.",
            "Try noticing the moment your body asks for a pause: the heaviness, the fog, the short temper. That signal deserves the same respect as a deadline.",
            "You don't have to earn your rest. You only have to allow it.",
        ],
    },
    {
        "slug": "naming-what-you-feel",
        "title": "Naming what you feel",
        "excerpt": "A small practice with outsized effects: putting feelings into words.",
        "date": "2026-08-04",
        "reading_time": "2 min read",
        "content": [
            "'I feel bad' is honest, but it's blurry. Is it anxious? Disappointed? Lonely? Embarrassed? Each of those asks for something different.",
            "Psychologists call it affect labelling — the simple act of putting a feeling into words. Naming an emotion doesn't make it disappear, but it does soften its grip. The feeling becomes something you can look at, rather than something you're inside of.",
            "A gentle practice: once a day, pause and finish this sentence as precisely as you can — 'Right now, I feel…'. No judgement, no fixing. Just naming.",
            "It's a small habit. But self-understanding is built from exactly these small habits.",
        ],
    },
]


@app.on_event("startup")
async def seed_journal():
    if await db.journal_posts.count_documents({}) == 0:
        await db.journal_posts.insert_many([{**p, "id": str(uuid.uuid4())} for p in JOURNAL_POSTS])


@api_router.get("/journal")
async def list_journal_posts():
    return await db.journal_posts.find({}, {"_id": 0, "content": 0}).sort("date", -1).to_list(100)


@api_router.get("/journal/{slug}")
async def get_journal_post(slug: str):
    post = await db.journal_posts.find_one({"slug": slug}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
