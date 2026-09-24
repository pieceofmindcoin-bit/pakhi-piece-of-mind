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

- 2026-09-22 (v4 restructure to "Piece of Mind"): Brand renamed everywhere (logo, nav, pages, metadata, footer). New page architecture: Home, Individual Therapy (/individual-therapy), Corporate Well-being (/corporate-wellbeing), Workshops & Events (/workshops-events), About Us (/about), FAQ, Contact; legacy /support and /corporate-workshops redirect. Semi-circular logo mark treatment. Home hero: "Every piece of you matters." full-screen with single "Book a therapy session" CTA. Therapy page: hero, "a space to feel heard" statement, concerns, 3-step circles, 4 approach principles. About: reference copy + Anshita Gaur section (square photo, real bio from brand site). Corporate: 3 ways of working (tailor-made / call-or-audit / existing workshops with 6 examples), From brief to delivery (large circular numbers), Teams (Buildup Global, Fine Equipments), photo gallery. Workshops & Events: customise-for-circles, themes, exactly two photos. No testimonials anywhere; no light-pink text; no stats/credentials sections. Contact form now sends email notification via Emergent-managed Resend (EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME="Piece of Mind", OWNER_EMAIL env; currently delivered@resend.dev test sink — needs real owner email for production). Verified: email send returns 202, all pages desktop + mobile, no overflow, no console errors.

- 2026-09-22 (v5): Real contact details live — admin@peaceofmind.co.in, +91 89999 52843, Instagram @pieceofmind.co.in (footer + contact page, LinkedIn placeholder removed). OWNER_EMAIL set to admin@peaceofmind.co.in so enquiry notifications reach the real inbox (verified 202). Wellbeing Journal added: /journal list + /journal/:slug article pages, backend GET /api/journal endpoints, 3 seeded posts (idempotent startup seed), Journal added to nav/footer.

- 2026-09-22 (v6 motion craft): Lenis momentum smooth scrolling (reduced-motion aware, integrated with ScrollToTop/hash nav). Signature on-load hero: masked line-by-line headline reveal (MaskedLines component) + 3D mouse-tilt and scroll parallax on the arch artwork (framer-motion springs). Therapy statement "a space to feel heard" uses masked line reveal on scroll. Approach principles restyled as numbered manifesto chapters. Verified: hero mid/settled states, tilt, statement reveal, no horizontal overflow, marquee intact, no console errors.

- 2026-09-22 (v7): Added "What people have to say" testimonial marquee to the HOMEPAGE ONLY (between approach section and final CTA) — seamless continuous right-to-left react-fast-marquee loop, pause on hover, alternating sand/sage-light rounded cards, real quotes from the brand's reference site (RG, SR, MK, PS). Verified desktop + mobile, no horizontal overflow.

- 2026-09-23 (v8 consolidated client pass): Removed ALL em dashes and all decorative small-caps eyebrow labels site-wide; removed "free" from consultation CTAs. Footer logo mark removed (wordmark text only; logo now only in header, single instance). Beige sections' inner cards switched to sage-light. Home hero is now full-screen forest green with italic ONLY on "piece", exact subheading, uppercase BOOK A THERAPY SESSION CTA. "Three ways to find support" -> "Services we offer". Marquee topics replaced with the 9 exact topics. "Wellbeing made practical" section removed from Home. "Hi, I'm Anshita Gaur" beige section added to Home above final CTA. Testimonials section now forest green. Therapy hero rebalanced with arch photo; concerns section rebuilt as floating typography composition (mobile fallback flex-wrap). Corporate: "Explore Workshops" button removed, hero CTA now "Get in touch", "Made for your people" and "In good company" sections removed, call/audit folded into Tailor-Made card (2 cards), benefits reworked as "What you'll take away" (Self reflection / Connections / Practical tools, staggered big circles). Workshops: "Glimpses of our workshops" rename + NEW "Upcoming workshops & events" section powered by a self-service admin CMS at /admin (JWT auth, add/edit/delete events; clean empty state). Journal pages removed; /journal redirects home. Fixed Babel parse quirk (multi-line array in non-self-closing JSX) and Reveal data-testid forwarding. Verified at 390/768/1024/1280/1440: single logo, no overflow, marquee contained, admin flow works end-to-end via UI (add -> public list -> delete).

- 2026-09-24 (v9 targeted pass): Services section now sage bg; moving topic bar moved directly above it with the 15 exact topics. Home Anshita section: added "Founder and Psychotherapist" subtitle, founder copy + Education list (About the Founder box), removed "Read my story". Logo is now a full circle (was clipped semicircle). Therapy: hero photo replaced with minimal green couch SVG illustration + exact two-line supporting copy; concerns rebuilt with the 15 exact floating topics; "Three steps to begin" now forest green; approach cards now forest green. Corporate: workshop option cards now forest green; "What you'll take away" removed (moved). Workshops: themes section ("Honest conversations / practical tools") removed; "What you'll take away" added with sage bg. About: "Therapy that meets you where you are" now shows the brand logo instead of a photo; exact startup description copy added; "What we stand for" -> "Our values" with Compassion / Curiosity / Care; Anshita section on sage-light bg. Verified 390/1280/1440: full circular logo, no overflow, contrast strong. No image gaps: couch delivered as SVG illustration; all other slots use existing assets.

- 2026-09-24 (v10): Moving topic bar now forest green (offwhite text). Real Anshita portrait (anshita.webp, uploaded by founder) placed in Home + About founder sections (square crop). Home hero artwork is now fully circular. Verified visually.
- 2026-09-24 (v11): Corporate gallery now uses 4 new real tagged photos (corp-1..4.webp, rotation fixed): Stress management workshop for BuildUp Global, Communication workshop for Fine Equipments, Mental health pop-up, Workplace therapy. Captions appear on hover.

## Backlog / Next Tasks
- P2: Event image upload (admin form has image URL field; object storage not wired).
- P2: Admin view to read contact enquiries.

## Test Credentials
No authentication in this app. See /app/memory/test_credentials.md.

## Update - 24 Sep 2026
- Workshops & Events gallery: replaced 2 old photos with user-uploaded photos (Workshop on attachment styles, Letter to 2026 - goal setting workshop), rotation fixed, 4:3 aspect.
- Homepage testimonials: marquee faster (speed 52), no pause on hover/click, removed "Therapy client" labels, all cards equal height.
- Corporate page: added "What teams have to say" moving testimonial carousel (4 corporate workshop testimonials, same style/speed/equal sizing).

## Update - 24 Sep 2026 (2)
- Basic SEO: OG/Twitter/canonical meta in index.html, robots.txt, sitemap.xml (domain peaceofmind.co.in assumed - confirm), Seo.jsx now updates OG/Twitter per page.
- Socials added (Instagram, LinkedIn, WhatsApp wa.me/918999952843, Substack PLACEHOLDER pieceofmind.substack.com - confirm, Email) to FinalCta (all pages) and footer.
- Home + About share AnshitaSection component: removed "About the Founder" box, education now plain paragraph. About Anshita section now identical to landing.
- Home CTA title: "Ready when you are." Header CTA: "Book a session" (desktop+mobile).
- Therapy hero: sage green bg, couch graphic circular.
- About: removed "A space to be human" hero; "Therapy that meets you where you are" is now first section (sage bg, circular logo); Values cards bigger, headings beside green dot.
- Workshops hero: added simple circular SVG graphic (people in a circle).
- Verified at 1366px and 375px via screenshots; robots.txt/sitemap.xml serve correctly.

## Update - 24 Sep 2026 (3)
- Home CTA secondary button: "Corporate Well-being" -> "Book a session" linking to tealfeed booking URL (FinalCta supports external href).
- Anshita education: plain line-by-line list, no box (shared component, both Home and About).
- Corporate page: testimonials carousel moved above Moments/glimpses section.
- Individual Therapy page: added "What people have to say" moving testimonials (same as landing).
- About logo: now circular, exactly like landing hero.
- Contact form: verified enquiry email sends successfully (202) to OWNER_EMAIL=admin@peaceofmind.co.in. NOTE: user wrote "pieceofmind" this time vs existing "peaceofmind" - needs confirmation.
