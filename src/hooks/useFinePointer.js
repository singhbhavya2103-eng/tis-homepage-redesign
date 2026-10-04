import { useEffect, useState } from "react";

// True for mouse or trackpad users, false for touch screens.
const QUERY = "(hover: hover) and (pointer: fine)";

export default function useFinePointer() {
  const [hasFinePointer, setHasFinePointer] = useState(
    () => window.matchMedia(QUERY).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = (event) => setHasFinePointer(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return hasFinePointer;
}
