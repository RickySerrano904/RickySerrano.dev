"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

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
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initial);
  }, []);

  const normalizedPath = useMemo(() => normalizePath(pathname ?? "/"), [pathname]);

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

    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
  };

  return (
    <nav className="fixed left-1/2 top-6 z-50 w-[min(92vw,760px)] -translate-x-1/2">
      <div className="flex items-center justify-between gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--nav)] px-3 py-2 shadow-[0_16px_40px_-24px_rgba(10,12,16,0.7)] backdrop-blur">
        <div className="flex flex-wrap items-center gap-1">
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
                onClick={() => {
                  if (isSectionRoute) {
                    setActiveSection(item.sectionId);
                  }
                }}
                aria-current={isActive ? (isSectionRoute ? "location" : "page") : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[color:var(--nav-active)] text-[color:var(--fg)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--fg)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--nav-active)] text-[color:var(--fg)] transition hover:scale-[1.02]"
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
      <path d="M12 3a7 7 0 1 0 9 9 9 9 0 0 1-9-9z" />
    </svg>
  );
}
