import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const styles = {
  primary:
    "bg-sage text-cream hover:bg-sage-dark",
  ghost:
    "border border-ink/20 text-ink hover:border-sage hover:text-sage-deep",
};

const ButtonLink = ({ to, children, variant = "primary", testId, withArrow = false }) => (
  <Link
    to={to}
    data-testid={testId}
    className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 ${styles[variant]}`}
  >
    {children}
    {withArrow && <ArrowRight size={16} strokeWidth={1.5} />}
  </Link>
);

export default ButtonLink;
