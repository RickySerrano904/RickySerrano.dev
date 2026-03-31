import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Your Name",
  description: "Writing on design systems, product strategy, and front-end craft.",
};

export default function BlogPage() {
  return (
    <main className="page-intro mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
        Notes from the studio
      </h1>

      <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
        Some of my notes and thoughts on various topics in the world of IT.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-[color:var(--fg)]">
        Recent posts
      </h2>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <Link
          href="/blog/designing-for-calm"
          className="group rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-3 transition hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_24px_50px_-44px_rgba(10,12,16,0.7)]"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
            <div className="post-thumb h-full w-full" />
          </div>
          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Design</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)] transition group-hover:text-[color:var(--accent)]">
              Designing for calm
            </h2>
            <p className="mt-2 text-base leading-7 text-[color:var(--muted)]">
              How to remove friction without removing personality.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)]">
              Read post <span aria-hidden="true">-&gt;</span>
            </span>
          </div>
        </Link>

        <Link
          href="/blog/tiny-design-system"
          className="group rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-3 transition hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_24px_50px_-44px_rgba(10,12,16,0.7)]"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
            <div className="post-thumb h-full w-full" />
          </div>
          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Systems</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)] transition group-hover:text-[color:var(--accent)]">
              Shipping a tiny design system
            </h2>
            <p className="mt-2 text-base leading-7 text-[color:var(--muted)]">
              Tokens, typography, and reusable patterns.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)]">
              Read post <span aria-hidden="true">-&gt;</span>
            </span>
          </div>
        </Link>
      </section>

      <p className="mt-10 text-sm text-[color:var(--muted)]">More posts coming soon.</p>
    </main>
  );
}
