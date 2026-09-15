import { useEffect, useState } from "react";
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
  `text-sm tracking-wide transition-colors duration-300 hover:text-forest ${
    isActive ? "text-forest font-semibold" : "text-forest-soft"
  }`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 bg-offwhite/90 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "border-b border-line shadow-[0_4px_24px_rgb(44,62,62,0.05)]" : "border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
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
            className="rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-offwhite transition-colors duration-300 hover:bg-forest-soft"
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
          className="lg:hidden p-2 text-forest transition-colors duration-300 hover:text-forest-soft"
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>
      <div
        data-testid="mobile-menu"
        className={`lg:hidden overflow-hidden bg-offwhite transition-all duration-500 ease-out ${
          open ? "max-h-96 border-t border-line/70" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-5" aria-label="Mobile">
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
      </div>
    </header>
  );
};

export default Header;
