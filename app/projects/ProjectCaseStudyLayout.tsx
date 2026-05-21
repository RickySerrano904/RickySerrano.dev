import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowRightIcon from "@/app/components/ArrowRightIcon";

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
    <main className="page-intro mx-auto w-full max-w-4xl px-5 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-32">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)] transition-[transform,color,text-shadow] duration-200 hover:-translate-y-0.5 hover:text-[color:var(--accent)] hover:[text-shadow:0_0_8px_var(--accent),0_0_18px_var(--accent)] focus-visible:text-[color:var(--accent)] focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none focus-visible:[text-shadow:0_0_8px_var(--accent),0_0_18px_var(--accent)]"
      >
        <span aria-hidden="true">&larr;</span>
        Back to projects
      </Link>

      <header className="mt-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)] sm:tracking-[0.35em]">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          {summary}
        </p>
      </header>

      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] sm:mt-8 sm:rounded-3xl">
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
            className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-2 text-sm font-semibold text-[color:var(--fg)] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--bg)] hover:shadow-[0_0_0_1px_var(--accent),0_0_26px_-5px_var(--accent)] focus-visible:border-[color:var(--accent)] focus-visible:bg-[color:var(--accent)] focus-visible:text-[color:var(--bg)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--bg),0_0_26px_-4px_var(--accent)]"
          >
            {projectUrlLabel}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      ) : null}

      <section className={`${hasProjectCta ? "mt-8" : "mt-10"} grid gap-4 sm:gap-6 md:grid-cols-2`}>
        <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 sm:rounded-3xl sm:p-6">
          <h2 className="font-display text-xl font-semibold text-[color:var(--fg)] sm:text-2xl">
            Idea
          </h2>
          <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
            {problem}
          </p>
        </article>
        <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 sm:rounded-3xl sm:p-6">
          <h2 className="font-display text-xl font-semibold text-[color:var(--fg)] sm:text-2xl">
            Implementation
          </h2>
          <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
            {solution}
          </p>
        </article>
      </section>

      <section className="mt-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 sm:mt-10 sm:rounded-3xl sm:p-6">
        <h2 className="font-display text-xl font-semibold text-[color:var(--fg)] sm:text-2xl">
          Project Details
        </h2>
        <div className="mt-3 text-[color:var(--muted)]">{children}</div>
      </section>
    </main>
  );
}
