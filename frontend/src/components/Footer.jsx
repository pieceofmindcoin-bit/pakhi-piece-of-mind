import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { NAV_LINKS } from "@/components/Header";

const FOOTER_LINKS = [...NAV_LINKS, { label: "FAQ", to: "/faq" }, { label: "Contact", to: "/contact" }];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/pieceofmind.co.in", Icon: Instagram },
  { label: "Email", href: "mailto:admin@peaceofmind.co.in", Icon: Mail },
];

const Footer = () => (
  <footer data-testid="site-footer" className="bg-forest text-offwhite">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-5">
        <div data-testid="footer-wordmark">
          <p className="font-serif font-semibold text-lg tracking-tight text-offwhite">Piece of Mind</p>
          <p className="text-[10px] tracking-[0.24em] uppercase text-offwhite/70 mt-1">Mental Wellbeing</p>
        </div>
        <p className="text-sm leading-relaxed text-offwhite/70 max-w-xs">
          A non-judgmental mental health practice: individual therapy, corporate
          well-being and community workshops. Online worldwide, in-person in Pune.
        </p>
      </div>
      <nav aria-label="Footer" className="space-y-4">
        <h3 className="font-serif font-semibold text-sm tracking-[0.18em] uppercase text-sage">Explore</h3>
        <ul className="space-y-3">
          {FOOTER_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="text-sm text-offwhite/70 transition-colors duration-300 hover:text-offwhite"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="space-y-4">
        <h3 className="font-serif font-semibold text-sm tracking-[0.18em] uppercase text-sage">Contact</h3>
        <ul className="space-y-3 text-sm text-offwhite/70">
          <li>
            <a href="mailto:admin@peaceofmind.co.in" data-testid="footer-email" className="transition-colors duration-300 hover:text-offwhite">
              admin@peaceofmind.co.in
            </a>
          </li>
          <li>
            <a href="tel:+918999952843" data-testid="footer-phone" className="transition-colors duration-300 hover:text-offwhite">
              +91 89999 52843
            </a>
          </li>
          <li data-testid="footer-location">Online worldwide · In-person in Pune</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="font-serif font-semibold text-sm tracking-[0.18em] uppercase text-sage">Follow Along</h3>
        <div className="flex gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              data-testid={`footer-social-${label.toLowerCase()}`}
              className="w-10 h-10 rounded-full border border-offwhite/25 flex items-center justify-center text-offwhite/70 transition-colors duration-300 hover:bg-sage hover:text-forest hover:border-sage"
            >
              <Icon size={17} strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <p className="text-sm text-offwhite/70 leading-relaxed">
          Gentle notes on wellbeing, workshops and upcoming sessions.
        </p>
      </div>
    </div>
    <div className="border-t border-offwhite/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-offwhite/60" data-testid="footer-copyright">
          © {new Date().getFullYear()} Piece of Mind. All rights reserved.
        </p>
        <p className="text-xs text-offwhite/60">Made with care, for calmer minds.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
