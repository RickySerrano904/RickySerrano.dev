"use client";

import Link from "next/link";
import ArrowRightIcon from "@/app/components/ArrowRightIcon";
import Marquee from "@/app/components/Marquee";
import ProjectCard from "@/app/projects/ProjectCard";
import type { Project } from "./content";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
            A mix of projects and builds to showcase my work.
          </p>
        </div>
        {hasProjects ? (
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-2 text-sm font-semibold text-[color:var(--fg)] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--bg)] hover:shadow-[0_0_0_1px_var(--accent),0_0_26px_-5px_var(--accent)] focus-visible:border-[color:var(--accent)] focus-visible:bg-[color:var(--accent)] focus-visible:text-[color:var(--bg)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--bg),0_0_26px_-4px_var(--accent)]"
          >
            See all
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        ) : null}
      </header>

      {hasProjects ? (
        <Marquee
          ariaLabel="Featured projects"
          className="mt-8"
          duration="38s"
          itemWidth="min(82vw, 20rem)"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Marquee>
      ) : (
        <div className="mt-8 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 text-[color:var(--muted)]">
          Projects will be added here soon.
        </div>
      )}
    </section>
  );
}
