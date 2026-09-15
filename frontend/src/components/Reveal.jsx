import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0, className = "", as = "div", scale = false }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: scale ? 10 : 24, scale: scale ? 0.96 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
