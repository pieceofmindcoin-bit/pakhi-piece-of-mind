import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Support", to: "/support" },
  { label: "Corporate & Workshops", to: "/corporate-workshops" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const linkClass = ({ isActive }) =>
  `text-sm tracking-wide transition-colors duration-300 hover:text-sage-deep ${
    isActive ? "text-sage-deep font-semibold" : "text-ink-muted"
  }`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 bg-cream/85 backdrop-blur-xl border-b border-line/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.slice(0, 5).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={linkClass}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="nav-contact-cta"
            className="rounded-full bg-sage px-6 py-2.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-sage-dark"
          >
            Get in Touch
          </Link>
        </nav>
        <button
          type="button"
          data-testid="mobile-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-ink transition-colors duration-300 hover:text-sage-deep"
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <nav
          data-testid="mobile-menu"
          className="lg:hidden border-t border-line/60 bg-cream px-6 py-6 flex flex-col gap-5"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={linkClass}
              data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
