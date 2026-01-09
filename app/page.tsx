import Link from "next/link";

const focusAreas = [
  "Product strategy and narrative",
  "Design systems with a human touch",
  "Fast, accessible front-end builds",
];

const highlights = [
  {
    title: "Current focus",
    description:
      "Designing calm, high-signal experiences for early-stage products.",
  },
  {
    title: "Recent writing",
    description:
      "Notes on building smaller, smarter interfaces and brand systems.",
    href: "/blog",
    cta: "Read the blog",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <section className="page-intro mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-24 pt-32">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
            Portfolio
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-6xl">
            Designing calm digital products with a strong point of view.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            I am a designer and front-end developer focused on minimal
            interfaces, readable typography, and fast shipping. I help teams
            turn raw ideas into polished products.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-[color:var(--fg)] px-5 py-2.5 text-sm font-semibold text-[color:var(--bg)] transition hover:-translate-y-0.5"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[color:var(--border)] px-5 py-2.5 text-sm font-semibold text-[color:var(--fg)] transition hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="stagger grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)] backdrop-blur"
            >
              <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                {item.description}
              </p>
              {item.href ? (
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)]"
                >
                  {item.cta}
                  <span aria-hidden="true">?</span>
                </Link>
              ) : null}
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 shadow-[0_32px_70px_-50px_rgba(10,12,16,0.6)] backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                Focus
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)]">
                What I do
              </h2>
            </div>
            <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
              Available for 2026
            </span>
          </div>
          <ul className="stagger mt-6 grid gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-3">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
