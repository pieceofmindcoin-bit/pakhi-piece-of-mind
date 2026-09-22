import { Link } from "react-router-dom";

export const LogoMark = ({ width = 56, className = "" }) => (
  <span
    aria-hidden="true"
    className={`block overflow-hidden bg-sand ${className}`}
    style={{ width, height: Math.round(width * 0.58), borderRadius: `${width}px ${width}px 0 0` }}
  >
    <img
      src="/assets/brand-mark.png"
      alt=""
      className="w-full object-cover object-[center_30%]"
      style={{ width, height: width }}
    />
  </span>
);

const Logo = ({ light = false }) => (
  <Link
    to="/"
    data-testid="logo-link"
    className="flex items-center gap-3 group"
    aria-label="Piece of Mind — home"
  >
    <span className="transition-transform duration-500 group-hover:-translate-y-0.5">
      <LogoMark width={52} />
    </span>
    <span className="leading-tight">
      <span className={`block font-serif font-semibold text-lg tracking-tight ${light ? "text-offwhite" : "text-forest"}`}>
        Piece of Mind
      </span>
      <span className={`block text-[10px] tracking-[0.24em] uppercase ${light ? "text-offwhite/70" : "text-forest-soft"}`}>
        Mental Wellbeing
      </span>
    </span>
  </Link>
);

export default Logo;
