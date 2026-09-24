import { useEffect } from "react";

const setMeta = (selector, value) => {
  const el = document.head.querySelector(selector);
  if (el && value) el.setAttribute("content", value);
};

const Seo = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }, [title, description]);
  return null;
};

export default Seo;
