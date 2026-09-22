import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = window.__lenis;
    if (hash) {
      const scroll = () => {
        const el = document.getElementById(hash.slice(1));
        if (!el) return;
        if (lenis) lenis.scrollTo(el, { offset: -90 });
        else el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      scroll();
      const t = setTimeout(scroll, 250);
      return () => clearTimeout(t);
    }
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
