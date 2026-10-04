import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import useFinePointer from "../hooks/useFinePointer";
import "./CustomCursor.css";

const INTERACTIVE_SELECTOR =
  "a, button, input, select, textarea, label, summary, [role='button'], [data-cursor='hover']";

const RING_SPRING = { stiffness: 450, damping: 35, mass: 0.4 };

// A ring that trails the mouse and grows over links and buttons.
// Hidden on touch devices and for visitors who prefer reduced motion.
export default function CustomCursor() {
  const hasFinePointer = useFinePointer();
  const prefersReducedMotion = useReducedMotion();
  const isEnabled = hasFinePointer && !prefersReducedMotion;

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const hasMovedRef = useRef(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, RING_SPRING);
  const ringY = useSpring(y, RING_SPRING);

  useEffect(() => {
    if (!isEnabled) return undefined;

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);

      // On the first move, snap the ring to the pointer instead of
      // letting it fly in from the corner of the screen.
      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        ringX.jump?.(event.clientX);
        ringY.jump?.(event.clientY);
      }

      setIsVisible(true);
      setIsHovering(
        event.target instanceof Element &&
          event.target.closest(INTERACTIVE_SELECTOR) !== null,
      );
    };

    const handleLeave = () => setIsVisible(false);
    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [isEnabled, x, y, ringX, ringY]);

  if (!isEnabled) return null;

  return (
    <motion.div
      className="cursor-ring"
      aria-hidden="true"
      style={{ x: ringX, y: ringY }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isPressed ? 0.8 : isHovering ? 1.7 : 1,
        backgroundColor: isHovering
          ? "rgba(255, 255, 255, 0.35)"
          : "rgba(255, 255, 255, 0)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
}
