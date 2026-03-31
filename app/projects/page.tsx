import Link from "next/link";

const projects = [
  {
    slug: "senior-helper",
    title: "Senior Helper",
    summary:
      "Full-stack web app that helps older adults and caregivers coordinate daily tasks and appointments while teaching seniors to recognize and avoid online scams so they can stay safe and independent.",
    tags: ["Java", "Typescript", "Angular", "Postgres"],
    // eyebrow: "Accessibility + Safety",
  },
  {
    slug: "enzos-world",
    title: "Enzo's World",
    summary:
      "A playful, interactive website based on Enzo, my younger sister's adorable dog. It features a custom design system, fun animations, and a lighthearted tone to showcase Enzo's personality and adventures.",
    tags: ["Next.js", "React", "Typescript", "MDX"],
    // eyebrow: "Interactive Storytelling",
  },
  // {
  //   title: "JaxTCG",
  //   summary:
  //     "Blah blah blah.",
  //   tags: ["Next.js", "MDX"],
  // },
];

export default function ProjectsPage() {
  return (
    <main className="page-intro mx-auto w-full max-w-5xl px-6 pb-24 pt-32">
      <header className="max-w-3xl">
        {/* <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Projects
        </p> */}
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Projects Showcase
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A mix of various projects and builds to showcase some of my work.
        </p>
      </header>

      <div className="stagger mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            className="group rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-3 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)] backdrop-blur transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
              <div className="post-thumb h-full w-full" />
            </div>
            <article className="p-3">
              {/* <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {project.eyebrow}
              </p> */}
              <h2 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)] transition group-hover:text-[color:var(--accent)]">
                {project.title}
              </h2>
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
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)]">
                View project <span aria-hidden="true">-&gt;</span>
              </span>
            </article>
          </Link>
        ))}
      </div>

      {/* <div className="mt-12 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 text-sm text-[color:var(--muted)]">
        Each project now has a dedicated detail page so you can write a full case study.
        <Link href="/contact" className="ml-2 font-semibold text-[color:var(--fg)]">
          Contact me
        </Link>
        .
      </div> */}
    </main>
  );
}
