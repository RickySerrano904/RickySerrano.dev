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
        href="/#projects"
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

        <div className="mt-3 space-y-6 text-base leading-7 text-[color:var(--muted)]">
          <p>
            Senior Helper is a full-stack web application designed for older adults and caregivers to stay
            organized, connected, and safer online. It combines practical care coordination features (shared
            appointments and caregiver links) with cybersecurity education (guided lessons, quizzes, and
            progress tracking) in a simple, high-legibility interface.
          </p>

          <div>
            <h3 className="font-semibold text-[color:var(--fg)]">
              Technical Architecture and Stack Choices
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-[color:var(--fg)]">Architecture:</span> Monolithic
                full-stack deployment where a Spring Boot API serves both REST endpoints and the built
                Angular SPA.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--fg)]">Backend:</span> Java 17, Spring
                Boot 3, Spring MVC, Spring Data JPA, Spring Security, JWT auth (custom token filter +
                role/permission checks), PostgreSQL runtime DB, H2 for tests, Springdoc OpenAPI for docs.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--fg)]">Frontend:</span> Angular 21 with
                standalone components, route guards, HTTP interceptor for bearer tokens, template/reactive
                forms, Cypress E2E, and Angular unit test tooling.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--fg)]">Build/Delivery:</span>
                Maven-driven pipeline builds Angular in `frontend/`, then copies `dist` assets into Spring
                Boot static resources for unified deployment.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[color:var(--fg)]">
              Key UX and Accessibility Decisions
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                Large base typography and plain-language content to reduce cognitive and visual friction.
              </li>
              <li>Role-aware workflows for seniors, caregivers, and admins.</li>
              <li>
                Progress-first learning UX: module completion status, quiz scoring, and clear "continue"
                actions.
              </li>
              <li>
                Persistent light/dark theme, mobile-responsive layouts, and consistent navigation patterns.
              </li>
              <li>
                Form-first interaction with inline validation/error states and explicit labels/autocomplete
                hints.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[color:var(--fg)]">Challenges and Tradeoffs</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-[color:var(--fg)]">Custom JWT revocation in memory:</span>
                Simple and effective for a course-scale app, but not ideal for multi-instance production
                without shared token state.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--fg)]">Eager-loading entity relationships:</span>
                Reduced frontend complexity, but can over-fetch and impact scalability.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--fg)]">Hardcoded local API/CORS settings:</span>
                Fast dev setup, but needs environment-based config for production.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--fg)]">Heuristic scam detector:</span>
                Transparent and explainable for education use, but less accurate than model-based
                detection.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
