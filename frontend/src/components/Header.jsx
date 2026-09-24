import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Individual Therapy", to: "/individual-therapy" },
  { label: "Corporate Well-being", to: "/corporate-wellbeing" },
  { label: "Workshops & Events", to: "/workshops-events" },
  { label: "About Us", to: "/about" },
];

const linkClass = ({ isActive }) =>
  `relative text-sm tracking-wide whitespace-nowrap transition-colors duration-300 hover:text-forest after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-forest after:transition-all after:duration-300 ${
    isActive ? "text-forest font-semibold after:w-full" : "text-forest-soft after:w-0 hover:after:w-full"
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
        scrolled ? "border-b border-line shadow-[0_4px_24px_rgb(44,62,62,0.05)]" : "border-b border-line/60"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo />
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((l) => (
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
            Book a session
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
          open ? "max-h-[28rem] border-t border-line/70" : "max-h-0"
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
          <NavLink
            to="/faq"
            onClick={() => setOpen(false)}
            className={linkClass}
            data-testid="mobile-nav-link-faq"
          >
            FAQ
          </NavLink>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            data-testid="mobile-nav-contact-cta"
            className="mt-2 inline-flex w-fit rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-offwhite"
          >
            Book a session
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
