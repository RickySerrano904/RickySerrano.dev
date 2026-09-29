"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { useTheme } from "./useTheme";

type NavItem = {
  label: string;
  href: string;
  sectionId: string;
  routePrefixes: string[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/#home", sectionId: "home", routePrefixes: ["/"] },
  {
    label: "About",
    href: "/#about",
    sectionId: "about",
    routePrefixes: [],
  },
  {
    label: "Experience",
    href: "/#experience",
    sectionId: "experience",
    routePrefixes: [],
  },
  {
    label: "Skills",
    href: "/#skills",
    sectionId: "skills",
    routePrefixes: [],
  },
  {
    label: "Projects",
    href: "/#projects",
    sectionId: "projects",
    routePrefixes: ["/projects"],
  },
  {
    label: "Contact",
    href: "/#contact",
    sectionId: "contact",
    routePrefixes: [],
  },
];

function normalizePath(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/$/, "");
}

export default function FloatingNav() {
  const pathname = usePathname();
  const { mounted, theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const normalizedPath = useMemo(() => normalizePath(pathname ?? "/"), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const dismissOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const dismissWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const dismissOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissWithEscape);
    desktopQuery.addEventListener("change", dismissOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissWithEscape);
      desktopQuery.removeEventListener("change", dismissOnDesktop);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!mounted || normalizedPath !== "/") {
      return;
    }

    const sectionIds = navItems.map((item) => item.sectionId);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const syncActiveSection = () => {
      const marker = Math.max(140, window.innerHeight * 0.35);
      let nextSection = sectionIds[0];

      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top <= marker) {
          nextSection = section.id;
          continue;
        }

        break;
      }

      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        nextSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection((prev) => (prev === nextSection ? prev : nextSection));
    };

    const updateFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash && sectionIds.includes(hash)) {
        setActiveSection((prev) => (prev === hash ? prev : hash));
        return;
      }

      syncActiveSection();
    };

    updateFromHash();

    let ticking = false;
    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        syncActiveSection();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncActiveSection);
    window.addEventListener("hashchange", updateFromHash);
    window.addEventListener("load", syncActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncActiveSection);
      window.removeEventListener("hashchange", updateFromHash);
      window.removeEventListener("load", syncActiveSection);
    };
  }, [mounted, normalizedPath]);

  const handleToggle = () => {
    if (!mounted) {
      return;
    }

    toggleTheme();
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: NavItem,
    isSectionRoute: boolean,
  ) => {
    if (menuOpen) {
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
    if (!isSectionRoute) {
      return;
    }

    setActiveSection(item.sectionId);

    const target = document.getElementById(item.sectionId);
    if (!target) {
      return;
    }

    event.preventDefault();

    const rootStyles = window.getComputedStyle(document.documentElement);
    const scrollPaddingTop = Number.parseFloat(rootStyles.scrollPaddingTop) || 0;
    const top = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - scrollPaddingTop,
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    const nextHash = `#${item.sectionId}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash);
    }
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
      className="fixed inset-x-3 top-3 z-50 md:left-1/2 md:right-auto md:top-6 md:w-[min(92vw,760px)] md:-translate-x-1/2"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--nav)] px-2 py-2 shadow-[0_16px_40px_-24px_rgba(10,12,16,0.7)] backdrop-blur md:flex-nowrap md:gap-3 md:rounded-full md:px-3">
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="navigation-links"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-[color:var(--fg)] hover:bg-[color:var(--nav-active)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] md:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d={menuOpen ? "M6 6l12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
          {menuOpen ? "Close menu" : "Menu"}
        </button>
        <div
          id="navigation-links"
          className={`${menuOpen ? "block" : "hidden"} order-last max-h-[calc(100dvh-6rem)] min-w-0 basis-full overflow-y-auto border-t border-[color:var(--border)] pt-2 md:order-none md:block md:max-h-none md:flex-1 md:basis-auto md:overflow-visible md:border-0 md:pt-0`}
        >
          <div className="flex flex-col gap-1 md:flex-row md:flex-wrap md:items-center">
          {navItems.map((item) => {
            const isSectionRoute = normalizedPath === "/";
            const isRouteMatch = item.routePrefixes.some(
              (routePrefix) =>
                normalizedPath === routePrefix ||
                (routePrefix !== "/" && normalizedPath.startsWith(routePrefix)),
            );
            const isActive = isSectionRoute
              ? activeSection === item.sectionId
              : isRouteMatch;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item, isSectionRoute)}
                aria-current={isActive ? (isSectionRoute ? "location" : "page") : undefined}
                className={`flex min-h-11 items-center rounded-xl px-3 py-3 text-sm font-medium transition-[color,background-color,box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[color:var(--accent)] md:min-h-0 md:rounded-full md:py-2 ${
                  isActive
                    ? "bg-[color:var(--nav-active)] text-[color:var(--fg)] shadow-[0_0_0_1px_var(--border),0_0_16px_-10px_var(--accent)]"
                    : "text-[color:var(--muted)] hover:bg-[color:var(--nav-active)] hover:text-[color:var(--fg)] hover:shadow-[0_0_0_1px_var(--border),0_0_18px_-10px_var(--accent)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          </div>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--nav-active)] text-[color:var(--fg)] shadow-[0_0_0_1px_var(--border),0_0_14px_-10px_var(--accent)] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--bg)] hover:shadow-[0_0_0_1px_var(--accent),0_0_26px_-5px_var(--accent)] focus-visible:border-[color:var(--accent)] focus-visible:bg-[color:var(--accent)] focus-visible:text-[color:var(--bg)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--bg),0_0_26px_-4px_var(--accent)]"
          aria-label="Toggle dark mode"
          aria-pressed={theme === "dark"}
          title="Toggle dark mode"
        >
          {mounted && theme === "dark" ? (
            <SunIcon />
          ) : (
            <MoonIcon />
          )}
        </button>
      </div>
    </nav>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 15.5A6.5 6.5 0 0 1 8.5 7a7 7 0 1 0 8.5 8.5z" />
      <path d="M17.5 3.5v3" />
      <path d="M16 5h3" />
    </svg>
  );
}
