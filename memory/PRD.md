# A Piece of Mind — PRD

## Original Problem Statement
Build a complete production-ready multi-page mental wellness website "A Piece of Mind" (React). Calm, warm, premium, emotionally safe. Cream/sage palette, refined sans-serif typography, generous whitespace, subtle animations. Pages: Home (hero with brand/logo treatment, intro, "Three Ways to Find Support" as three cards without photos, green marquee bar AFTER that section, approach split layout, CTA, footer), About, Support, Corporate & Workshops (offerings, workshop topics, audiences, benefits, Glimpses gallery moved from homepage, CTA), FAQ (own page with accordion), Contact (form with name/email/phone/message/enquiry type). Corrections from previous version: no opening woman photo, no "A place to feel whole" text, no giant faded background words, FAQ not hidden in homepage, Glimpses on Corporate page, working navigation, responsive, SEO titles, accessibility.

## Architecture
- Frontend: React 19 + react-router-dom v7, Tailwind CSS, framer-motion (scroll reveals), react-fast-marquee (green bar), lucide-react icons, sonner toasts.
- Backend: FastAPI, MongoDB (motor). Endpoint: POST /api/contact (stores enquiries in `contact_messages`), GET /api/ health.
- Design system: /app/design_guidelines.json (cream #F9F8F6, surface #F0EFEA, sage #8C9A8E, ink #2D332F; Manrope headings, DM Sans body).
- Reusable components: Header, Footer, Logo, Reveal, SectionIntro, ButtonLink, MarqueeBar, Seo, ScrollToTop.

## User Personas
- Individual seeking mental wellbeing support (one-to-one sessions).
- Person interested in workshops/learning.
- School/organisation/workplace decision-maker exploring corporate wellbeing.

## Core Requirements (static)
- 6 pages with working nav + mobile hamburger; hash deep-links (/support#individual etc.).
- Contact form persisted to MongoDB with toast feedback.
- Responsive desktop/tablet/mobile; data-testids on interactive elements; per-page SEO titles/meta.

## Implemented
- 2026-09-15: Complete site in one pass — all 6 pages, header/footer, marquee (positioned after Three Ways), Glimpses gallery on Corporate page, FAQ accordion, contact form -> MongoDB, scroll reveals, mobile menu, SEO titles.
- 2026-09-15 (v2 rebrand): Applied official brand system — Playfair Display throughout, exact palette (Forest #2C3E3E, Sage #B7C9B3, Sand #F2E9DC, Clay #DDBEBE, Off-White #FBFAF7), editorial serif style with italic accent words (reference: apieceofmind.netlify.app). Integrated real brand assets: blob artwork as logo/hero/favicon, 4 real workshop photos (EXIF/rotation corrected) in Glimpses editorial grid + section imagery. Expanded About (pillars: safe spaces, emotional awareness, self-understanding, human connection), Corporate (8 wellbeing areas, 7 workshop themes, 6 audiences, 6 benefits), FAQ (11 client-specified questions), Contact ("Let's Connect", enquiry types per spec, no invented contact details). Header scroll state, reduced-motion support, focus states. Verified: no console errors, all routes, marquee position, mobile form submit.

- 2026-09-15 (v3 polish): Body/nav/buttons switched to DM Sans (Playfair Display kept for headings/editorial). Staggered hero entrance (heading → copy → CTA → image fade/scale). Nav links gained elegant underline hover. Corporate page extended: hero CTA now "Enquire About a Workshop", new Tailor-Made Workshops section (7 adaptation factors + "Create a Workshop With Us" CTA), new How We Work process (01 Understand / 02 Design / 03 Deliver / 04 Reflect, staggered). Verified desktop/tablet/mobile, no horizontal overflow, no console errors.

## Backlog / Next Tasks- P1: Real contact details (email, phone, social URLs) — currently placeholders per client request.
- P1: Email notification on contact form submission (e.g. Resend).
- P2: Admin view to read contact enquiries.
- P2: Blog / resources section.

## Test Credentials
No authentication in this app. See /app/memory/test_credentials.md.
