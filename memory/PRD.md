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
- 2026-09-15: Complete site in one pass — all 6 pages, header/footer, marquee (positioned after Three Ways), Glimpses gallery on Corporate page, FAQ accordion (10 Qs), contact form -> MongoDB, scroll reveals, mobile menu, SEO titles. Verified: curl /api/ + POST /api/contact OK; screenshots of home hero/marquee/cards, corporate glimpses, FAQ accordion, contact submit (toast confirmed), mobile menu.

## Backlog / Next Tasks
- P1: Replace Glimpses placeholder images + footer/contact placeholders (email, phone, location, socials) with real brand assets.
- P1: Email notification on contact form submission (e.g. Resend).
- P2: Admin view to read contact enquiries.
- P2: Blog / resources section.

## Test Credentials
No authentication in this app. See /app/memory/test_credentials.md.
