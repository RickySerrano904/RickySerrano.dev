"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return;
    }

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;

    // Temporarily disable CSS smooth scroll for route transitions.
    root.style.scrollBehavior = "auto";

    const resetToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    resetToTop();
    const rafA = window.requestAnimationFrame(resetToTop);
    let rafNested: number | null = null;
    const rafB = window.requestAnimationFrame(() => {
      rafNested = window.requestAnimationFrame(resetToTop);
    });
    const timeoutId = window.setTimeout(() => {
      resetToTop();
      root.style.scrollBehavior = previousBehavior;
    }, 140);

    return () => {
      window.cancelAnimationFrame(rafA);
      window.cancelAnimationFrame(rafB);
      if (rafNested !== null) {
        window.cancelAnimationFrame(rafNested);
      }
      window.clearTimeout(timeoutId);
      root.style.scrollBehavior = previousBehavior;
    };
  }, [pathname]);

  return null;
}
