"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const themeChangeEvent = "portfolio-theme-change";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function subscribeTheme(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(themeChangeEvent, onStoreChange);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(themeChangeEvent, onStoreChange);
    mediaQuery.removeEventListener("change", onStoreChange);
  };
}

function subscribeMounted() {
  return () => {};
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

export function useTheme() {
  const mounted = useSyncExternalStore(subscribeMounted, () => true, () => false);
  const theme = useSyncExternalStore(
    subscribeTheme,
    getPreferredTheme,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme: Theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  }, []);

  return { mounted, theme, toggleTheme };
}
