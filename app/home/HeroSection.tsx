import TypewriterText from "@/app/home/TypewriterText";
import Image from "next/image";
import ArrowRightIcon from "@/app/components/ArrowRightIcon";
import type { SocialIcon, SocialLink } from "./content";

type HeroSectionProps = {
  words: string[];
  description: string;
  location: string;
  socialLinks: SocialLink[];
};

export default function HeroSection({
  words,
  description,
  location,
  socialLinks,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="page-intro mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-16 pt-32"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-5xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-6xl">
            Hi, I&apos;m Ricky,
            <br />
            <TypewriterText className="inline-flex items-center" words={words} />
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            {description}
          </p>
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[color:var(--muted)]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-[color:var(--accent)]"
              fill="currentColor"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span>{location}</span>
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-transparent text-[color:var(--fg)] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--bg)] hover:shadow-[0_0_0_1px_var(--accent),0_0_26px_-5px_var(--accent)] focus-visible:border-[color:var(--accent)] focus-visible:bg-[color:var(--accent)] focus-visible:text-[color:var(--bg)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--bg),0_0_26px_-4px_var(--accent)]"
                aria-label={link.label}
                title={link.label}
              >
                <SocialIconSvg icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--panel-strong)] shadow-[0_24px_50px_-42px_rgba(10,12,16,0.7)]">
            <Image
              src="/me/headshot.jpg"
              alt="Headshot of Ricky Serrano"
              fill
              priority
              sizes="200px"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <a
          href="https://github.com/RickyRicardo904"
          className="github-calendar-card group block w-full max-w-2xl rounded-3xl border border-white/10 bg-[#151922] p-4 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.75)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#ff9c6f] hover:shadow-[0_24px_70px_-38px_rgba(10,12,16,0.85),0_0_34px_-18px_#ff9c6f] focus-visible:-translate-y-0.5 focus-visible:border-[#ff9c6f] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--bg),0_24px_70px_-38px_rgba(10,12,16,0.85),0_0_34px_-18px_#ff9c6f] md:col-span-2"
          aria-label="View RickyRicardo904 on GitHub"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="github-calendar-title text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300">
              GitHub Contributions
            </h2>
            <span className="github-calendar-link inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-300">
              View profile{" "}
              <ArrowRightIcon className="github-calendar-arrow h-3.5 w-3.5 transition-transform duration-300" />
            </span>
          </div>
          <div className="overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/db03fc/RickyRicardo904"
              alt="GitHub contribution calendar for RickyRicardo904"
              className="h-auto w-full transition-[filter,opacity] duration-300 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-125"
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

function SocialIconSvg({ icon }: { icon: SocialIcon }) {
  if (icon === "github") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.09 2.93.84.09-.66.35-1.09.64-1.34-2.22-.25-4.56-1.1-4.56-4.9 0-1.08.39-1.97 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.67 0 3.8-2.34 4.64-4.57 4.88.36.31.69.92.69 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="currentColor"
    >
      <path d="M23 12s0-3.1-.4-4.6a2.9 2.9 0 0 0-2-2C18.9 5 12 5 12 5s-6.9 0-8.6.4a2.9 2.9 0 0 0-2 2C1 8.9 1 12 1 12s0 3.1.4 4.6a2.9 2.9 0 0 0 2 2C5.1 19 12 19 12 19s6.9 0 8.6-.4a2.9 2.9 0 0 0 2-2C23 15.1 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}
