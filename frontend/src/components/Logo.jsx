import { Link } from "react-router-dom";

export const LogoMark = ({ size = 40, className = "" }) => (
  <img
    src="/assets/brand-mark.png"
    alt=""
    aria-hidden="true"
    className={`rounded-full object-cover shrink-0 ${className}`}
    style={{ width: size, height: size }}
  />
);

const Logo = ({ light = false }) => (
  <Link
    to="/"
    data-testid="logo-link"
    className="flex items-center gap-3 group"
    aria-label="Piece of Mind home"
  >
    <span className="transition-transform duration-500 group-hover:-translate-y-0.5">
      <LogoMark width={52} />
    </span>
    <span className={`font-serif font-semibold text-2xl tracking-tight ${light ? "text-offwhite" : "text-forest"}`}>
      Piece of Mind
    </span>
  </Link>
);

export default Logo;
