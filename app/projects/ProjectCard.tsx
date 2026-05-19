import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/app/components/ArrowRightIcon";
import type { Project } from "@/app/home/content";

type ProjectCardProps = {
  project: Project;
  className?: string;
  imageSizes?: string;
};

export default function ProjectCard({
  project,
  className = "",
  imageSizes = "(min-width: 1280px) 500px, (min-width: 768px) 72vw, 88vw",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      scroll={true}
      draggable={false}
      className={`group flex h-full min-h-[31rem] w-full select-none flex-col rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-3 shadow-[0_20px_30px_-28px_rgba(33,41,24,0.34)] backdrop-blur transition hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_20px_44px_-24px_rgba(33,41,24,0.42)] ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
        {project.thumbnailSrc ? (
          <Image
            src={project.thumbnailSrc}
            alt={project.thumbnailAlt ?? `${project.title} project thumbnail`}
            fill
            draggable={false}
            sizes={imageSizes}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="post-thumb h-full w-full" />
        )}
      </div>
      <article className="flex flex-1 flex-col p-3">
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
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[color:var(--fg)] transition-colors duration-200 group-hover:text-[color:var(--accent)]">
          View project{" "}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </article>
    </Link>
  );
}
