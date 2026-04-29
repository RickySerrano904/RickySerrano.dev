import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

type ProjectCaseStudyLayoutProps = {
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  imageSrc?: string;
  imageAlt?: string;
  projectUrl?: string;
  projectUrlLabel?: string;
  children: ReactNode;
};

export default function ProjectCaseStudyLayout({
  eyebrow,
  title,
  summary,
  problem,
  solution,
  imageSrc,
  imageAlt,
  projectUrl,
  projectUrlLabel,
  children,
}: ProjectCaseStudyLayoutProps) {
  const hasProjectCta = Boolean(projectUrl && projectUrlLabel);

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

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? `${title} project preview`}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            loading="eager"
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="post-thumb h-full w-full" />
        )}
      </div>

      {hasProjectCta ? (
        <div className="mt-5">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-2 text-sm font-semibold text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
          >
            {projectUrlLabel}
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      ) : null}

      <section className={`${hasProjectCta ? "mt-8" : "mt-10"} grid gap-6 md:grid-cols-2`}>
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
