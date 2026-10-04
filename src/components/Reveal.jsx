import { motion, useReducedMotion } from "framer-motion";

/**
 * Fades and lifts its content in once, the first time it scrolls into view.
 * Only opacity and transform are animated, so it stays on the GPU.
 *
 * Staggering: pass an increasing delay, e.g.
 *   {items.map((item, i) => <Reveal key={item.id} delay={i * 0.08}>...</Reveal>)}
 *
 * `as` sets the wrapper tag (div, li, section...) and `className` lets the
 * wrapper take part in a grid or flex layout.
 */
export default function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  y = 24,
}) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
