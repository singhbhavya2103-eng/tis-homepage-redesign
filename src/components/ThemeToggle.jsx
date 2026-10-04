import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";
import "./ThemeToggle.css";

const KNOB_SPRING = { type: "spring", stiffness: 500, damping: 32 };

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggleTheme}
    >
      {/* `layout` animates the knob as the track's alignment flips */}
      <motion.span className="theme-toggle-knob" layout transition={KNOB_SPRING}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            className="theme-toggle-icon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {isDark ? (
              <Moon size={16} aria-hidden="true" />
            ) : (
              <Sun size={16} aria-hidden="true" />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  );
}
