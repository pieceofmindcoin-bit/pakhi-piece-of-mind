import { motion } from "framer-motion";

const MaskedLines = ({ lines, delay = 0, inView = false, className = "" }) => {
  const trigger = inView
    ? { whileInView: { y: 0 }, viewport: { once: true, margin: "-80px" } }
    : { animate: { y: 0 } };
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
          <motion.span
            className="block will-change-transform"
            initial={{ y: "112%" }}
            {...trigger}
            transition={{ duration: 1, delay: delay + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default MaskedLines;
