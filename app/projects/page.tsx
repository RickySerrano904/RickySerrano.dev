import Link from "next/link";

const projects = [
  {
    title: "Senior Helper",
    summary:
      "Full-stack web app that helps older adults and caregivers coordinate daily tasks and appointments while teaching seniors to recognize and avoid online scams so they can stay safe and independent.",
    tags: ["Java", "Typescript", "Angular", "Postgres" ],
  },
  {
    title: "Enzo's World",
    summary:
      "A playful, interactive website based on Enzo, my younger sister's adorable dog. It features a custom design system, fun animations, and a lighthearted tone to showcase Enzo's personality and adventures.",
    tags: ["Next.js", "React", "Typescript", "MDX"],
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

      {/* <div className="mt-12 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 text-sm text-[color:var(--muted)]">
        Want a full case study or metrics? Reach out and I can share details.
        <Link
          href="/contact"
          className="ml-2 font-semibold text-[color:var(--fg)]"
        >
          Contact me
        </Link>
        .
      </div> */}
    </main>
  );
}
