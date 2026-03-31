import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Senior Helper | Projects",
  description:
    "Case study for Senior Helper, a full-stack web app for seniors and caregivers.",
};

export default function SeniorHelperProjectPage() {
  return (
    <main className="page-intro mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)]"
      >
        <span aria-hidden="true">&larr;</span>
        Back to projects
      </Link>

      <header className="mt-6">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Accessibility + Safety
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Senior Helper
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A full-stack app that helps older adults and caregivers coordinate appointments and daily tasks,
          with built-in scam awareness education.
        </p>
      </header>

      <div className="mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
        <div className="post-thumb h-full w-full" />
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">Problem</h2>
          <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
            Seniors need a simpler way to manage tasks and appointments, while caregivers need a clear way
            to support schedules without removing independence.
          </p>
        </article>
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">Solution</h2>
          <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
            Senior Helper combines scheduling, caregiver collaboration, and bite-sized online safety lessons
            in one accessible interface.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
        <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">Project Details</h2>
        <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
          Use this section to add your deeper case-study content: goals, architecture, design decisions,
          implementation notes, and outcomes.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--muted)]">
          <li>Role and responsibilities</li>
          <li>Technical architecture and stack choices</li>
          <li>Key UX and accessibility decisions</li>
          <li>Challenges, tradeoffs, and lessons learned</li>
        </ul>
      </section>
    </main>
  );
}
