import { Link } from "react-router-dom";

export const LogoMark = ({ size = 40 }) => (
  <span
    aria-hidden="true"
    className="relative inline-flex items-center justify-center rounded-full bg-sage shrink-0"
    style={{ width: size, height: size }}
  >
    <span
      className="absolute rounded-full bg-cream"
      style={{ width: size * 0.52, height: size * 0.52, top: size * 0.14, left: size * 0.14 }}
    />
    <span
      className="absolute rounded-full bg-sage-deep"
      style={{ width: size * 0.3, height: size * 0.3, bottom: size * 0.14, right: size * 0.14 }}
    />
  </span>
);

const Logo = ({ light = false }) => (
  <Link
    to="/"
    data-testid="logo-link"
    className="flex items-center gap-3 group"
    aria-label="A Piece of Mind — home"
  >
    <span className="transition-transform duration-500 group-hover:rotate-12">
      <LogoMark size={38} />
    </span>
    <span className="leading-tight">
      <span className={`block font-heading font-bold text-lg tracking-tight ${light ? "text-cream" : "text-ink"}`}>
        A Piece of Mind
      </span>
      <span className={`block text-[11px] tracking-[0.18em] uppercase ${light ? "text-cream/70" : "text-ink-muted"}`}>
        Mental Wellbeing
      </span>
    </span>
  </Link>
);

export default Logo;
