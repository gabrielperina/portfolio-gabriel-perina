import { useEffect, useRef, useState } from "react";

export type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const themeRef = useRef<Theme>("dark");
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    const savedTheme = getInitialTheme();
    themeRef.current = savedTheme;
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    document.documentElement.style.colorScheme = savedTheme;
    return () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
      document.documentElement.classList.remove("theme-transitioning");
    };
  }, []);

  return {
    theme,
    toggleTheme: () => {
      const nextTheme = themeRef.current === "light" ? "dark" : "light";
      themeRef.current = nextTheme;
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
      document.documentElement.classList.add("theme-transitioning");
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      document.documentElement.style.colorScheme = nextTheme;
      window.localStorage.setItem("theme", nextTheme);
      setTheme(nextTheme);
      transitionTimer.current = window.setTimeout(() => {
        document.documentElement.classList.remove("theme-transitioning");
        transitionTimer.current = null;
      }, 800);
    },
  };
}