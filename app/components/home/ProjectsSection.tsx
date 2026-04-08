import Image from "next/image";
import Link from "next/link";
import type { Project } from "./content";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="max-w-3xl">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Projects
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A mix of projects and builds to showcase my work.
        </p>
      </header>

      <div className="stagger mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            scroll={true}
            className="group rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-3 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)] backdrop-blur transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
              {project.thumbnailSrc ? (
                <Image
                  src={project.thumbnailSrc}
                  alt={project.thumbnailAlt ?? `${project.title} project thumbnail`}
                  fill
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="post-thumb h-full w-full" />
              )}
            </div>
            <article className="p-3">
              <h3 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)] transition group-hover:text-[color:var(--accent)]">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)] transition-colors duration-200 group-hover:text-[color:var(--accent)]">
                View project <span aria-hidden="true">-&gt;</span>
              </span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
