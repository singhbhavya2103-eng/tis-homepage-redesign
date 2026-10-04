import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Counts from 0 to `to` the first time it scrolls into view.
export default function CountUp({ to, duration = 1.4 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(prefersReducedMotion ? to : 0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return undefined;

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, to, duration]);

  return <span ref={ref}>{value}</span>;
}
