import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/app/projects/ProjectCard";
import { projects } from "@/app/home/content";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Browse all portfolio projects and builds.",
};

export default function ProjectsPage() {
  const hasProjects = projects.length > 0;

  return (
    <main className="page-intro mx-auto w-full max-w-6xl px-6 pb-24 pt-32">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)] transition-[transform,color,text-shadow] duration-200 hover:-translate-y-0.5 hover:text-[color:var(--accent)] hover:[text-shadow:0_0_8px_var(--accent),0_0_18px_var(--accent)] focus-visible:text-[color:var(--accent)] focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none focus-visible:[text-shadow:0_0_8px_var(--accent),0_0_18px_var(--accent)]"
      >
        <span aria-hidden="true">&larr;</span>
        Back to home
      </Link>

      <header className="mt-6 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Selected Work
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          All Projects
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          Browse the full set of projects, builds, and case studies currently
          featured in my portfolio.
        </p>
      </header>

      {hasProjects ? (
        <section
          aria-label="All projects"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              imageSizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </section>
      ) : (
        <div className="mt-10 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 text-[color:var(--muted)]">
          Projects will be added here soon.
        </div>
      )}
    </main>
  );
}
