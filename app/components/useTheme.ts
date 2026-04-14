"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
}

export function useTheme() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : prefersDark
          ? "dark"
          : "light";

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme: Theme = currentTheme === "light" ? "dark" : "light";
      applyTheme(newTheme);
      window.localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return { mounted, theme, toggleTheme };
}
