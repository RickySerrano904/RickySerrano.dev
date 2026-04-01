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
          Expand this page with a full write-up: design goals, interaction decisions, implementation details,
          and what you would improve next.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--muted)]">
          <li>Design direction and inspiration</li>
          <li>Component and token strategy</li>
          <li>Animation and performance decisions</li>
          <li>Outcomes and future enhancements</li>
        </ul>
      </section>
    </main>
  );
}
