import type { ReactNode } from "react";
import Link from "next/link";

type ProjectCaseStudyLayoutProps = {
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  children: ReactNode;
};

export default function ProjectCaseStudyLayout({
  eyebrow,
  title,
  summary,
  problem,
  solution,
  children,
}: ProjectCaseStudyLayoutProps) {
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
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          {summary}
        </p>
      </header>

      <div className="mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
        <div className="post-thumb h-full w-full" />
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
            Idea
          </h2>
          <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
            {problem}
          </p>
        </article>
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
            Implementation
          </h2>
          <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
            {solution}
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
        <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
          Project Details
        </h2>
        <div className="mt-3 text-[color:var(--muted)]">{children}</div>
      </section>
    </main>
  );
}
