import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enzo's World | Projects",
  description:
    "Case study for Enzo's World, an interactive site with playful storytelling and animations.",
};

export default function EnzosWorldProjectPage() {
  return (
    <main className="page-intro mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)]"
      >
        <span aria-hidden="true">&larr;</span>
        Back to projects
      </Link>

      <header className="mt-6">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Interactive Storytelling
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Enzo&apos;s World
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A playful website built around personality-driven visuals, small animations, and reusable design
          tokens.
        </p>
        <a
          href="https://enzosworld.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)] hover:text-[color:var(--accent)]"
        >
          Visit enzosworld.com <span aria-hidden="true">-&gt;</span>
        </a>
      </header>

      <div className="mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
        <div className="post-thumb h-full w-full" />
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">Concept</h2>
          <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
            Build a site that feels fun and personal while still staying clean, performant, and easy to
            maintain.
          </p>
        </article>
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">Execution</h2>
          <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
            Combined a lightweight component system with expressive typography and motion to keep the
            experience lively without becoming noisy.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
        <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">Project Details</h2>
        <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
          Enzo’s World is a modern, TypeScript-based web application built with Next.js (App Router), 
          centered around a playful, character-driven brand voice and narrative storytelling. 
          The project blends performance, usability, and content-driven design.
        </p>
        <br />
        <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">Key Features</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--muted)]">
          <li>Fully responsive layout spanning home, blog, gallery, merch, and contact pages</li>
          <li>MDX-powered blog with dynamic routing and consistent post navigation</li>
          <li>Tailwind CSS + PostCSS styling with a clean, mobile-first UI</li>
          <li>Serverless contact endpoint (route.ts) enabling real-time user interaction</li>
          <li>Modular, reusable component architecture (e.g., Navbar, PostNav)</li>
          <li>Optimized static asset handling for images and icons</li>
        </ul>
        <br />
        <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">Portfolio Highlights</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--muted)]">
          <li>Self-directed project with cohesive branding, illustration themes, and tone</li>
          <li>Full-stack implementation combining frontend UI with backend API functionality</li>
          <li>Emphasis on UX: intuitive navigation, accessible structure, and responsive design</li>
          <li>Scalable content system using Markdown/MDX for efficient publishing</li>
        </ul>
      </section>
    </main>
  );
}
