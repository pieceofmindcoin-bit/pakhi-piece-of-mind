import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const styles = {
  primary: "bg-forest text-offwhite hover:bg-forest-soft",
  ghost: "border border-forest/25 text-forest hover:border-forest hover:bg-sage-light/50",
  light: "bg-offwhite text-forest hover:bg-sand",
};

const ButtonLink = ({ to, href, children, variant = "primary", testId, withArrow = false }) => {
  const className = `group/btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]}`;
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
      )}
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" data-testid={testId} className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} data-testid={testId} className={className}>
      {inner}
    </Link>
  );
};

export default ButtonLink;
