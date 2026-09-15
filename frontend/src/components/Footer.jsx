import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/components/Header";

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Email", href: "#", Icon: Mail },
];

const Footer = () => (
  <footer data-testid="site-footer" className="bg-forest text-offwhite">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-5">
        <Logo light />
        <p className="text-sm leading-relaxed text-offwhite/70 max-w-xs">
          A warm, safe space for mental wellbeing — helping individuals, teams and
          communities pause, understand themselves and grow.
        </p>
      </div>
      <nav aria-label="Footer" className="space-y-4">
        <h3 className="font-serif font-semibold text-sm tracking-[0.18em] uppercase text-sage">Explore</h3>
        <ul className="space-y-3">
          {NAV_LINKS.map((l) => (
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
          <li data-testid="footer-email">Email · to be added</li>
          <li data-testid="footer-phone">Phone · to be added</li>
          <li data-testid="footer-location">In person & online</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="font-serif font-semibold text-sm tracking-[0.18em] uppercase text-sage">Follow Along</h3>
        <div className="flex gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={`${label} (link to be added)`}
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
          © {new Date().getFullYear()} A Piece of Mind. All rights reserved.
        </p>
        <p className="text-xs text-offwhite/60">Made with care, for calmer minds.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
