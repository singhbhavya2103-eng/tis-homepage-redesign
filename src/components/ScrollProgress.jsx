import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollProgress.css";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // The spring smooths out jumpy wheel and trackpad scrolling.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
