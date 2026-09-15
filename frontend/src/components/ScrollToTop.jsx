import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scroll = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      scroll();
      const t = setTimeout(scroll, 250);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
