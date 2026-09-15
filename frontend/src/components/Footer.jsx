import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/components/Header";

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Facebook", href: "#", Icon: Facebook },
];

const Footer = () => (
  <footer data-testid="site-footer" className="bg-surface border-t border-line/60">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-5">
        <Logo />
        <p className="text-sm leading-relaxed text-ink-muted max-w-xs">
          A warm, safe space for mental wellbeing — helping individuals, teams and
          communities pause, understand themselves and grow.
        </p>
      </div>
      <nav aria-label="Footer" className="space-y-4">
        <h3 className="font-heading font-semibold text-sm tracking-[0.14em] uppercase text-ink">Explore</h3>
        <ul className="space-y-3">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="text-sm text-ink-muted transition-colors duration-300 hover:text-sage-deep"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="space-y-4">
        <h3 className="font-heading font-semibold text-sm tracking-[0.14em] uppercase text-ink">Contact</h3>
        <ul className="space-y-3 text-sm text-ink-muted">
          <li className="flex items-center gap-3">
            <Mail size={16} strokeWidth={1.5} className="text-sage" />
            <a href="mailto:hello@apieceofmind.in" data-testid="footer-email" className="transition-colors duration-300 hover:text-sage-deep">
              hello@apieceofmind.in
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={16} strokeWidth={1.5} className="text-sage" />
            <span data-testid="footer-phone">+91 00000 00000</span>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={16} strokeWidth={1.5} className="text-sage" />
            <span data-testid="footer-location">Your City, India</span>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="font-heading font-semibold text-sm tracking-[0.14em] uppercase text-ink">Follow Along</h3>
        <div className="flex gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              data-testid={`footer-social-${label.toLowerCase()}`}
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink-muted transition-colors duration-300 hover:bg-sage hover:text-cream hover:border-sage"
            >
              <Icon size={17} strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <p className="text-sm text-ink-muted leading-relaxed">
          Gentle notes on wellbeing, workshops and upcoming sessions.
        </p>
      </div>
    </div>
    <div className="border-t border-line/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-ink-muted" data-testid="footer-copyright">
          © {new Date().getFullYear()} A Piece of Mind. All rights reserved.
        </p>
        <p className="text-xs text-ink-muted">Made with care, for calmer minds.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
