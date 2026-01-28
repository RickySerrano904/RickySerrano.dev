import Link from "next/link";

const projects = [
  {
    title: "Caldera Studio",
    summary:
      "Visual identity and marketing site for a boutique architecture studio.",
    tags: ["Brand", "Web"],
  },
  {
    title: "Field Notes",
    summary:
      "Design system and product UI for a logistics analytics platform.",
    tags: ["Design system", "Product"],
  },
  {
    title: "Northwind Labs",
    summary:
      "Fast, accessible landing page with a light editorial feel.",
    tags: ["Next.js", "MDX"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-intro mx-auto w-full max-w-5xl px-6 pb-24 pt-32">
      <header className="max-w-3xl">
        {/* <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Projects
        </p> */}
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Selected work and ongoing experiments.
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A mix of shipped client work and internal explorations. Each project
          focuses on clarity, typography, and a calm product experience.
        </p>
      </header>

      <div className="stagger mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)] backdrop-blur"
          >
            <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
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
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 text-sm text-[color:var(--muted)]">
        Want a full case study or metrics? Reach out and I can share details.
        <Link
          href="/contact"
          className="ml-2 font-semibold text-[color:var(--fg)]"
        >
          Contact me
        </Link>
        .
      </div>
    </main>
  );
}
