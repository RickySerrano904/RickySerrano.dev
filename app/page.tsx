import Link from "next/link";

// const focusAreas = [
//   "Product strategy and narrative",
//   "Design systems with a human touch",
//   "Fast, accessible front-end builds",
// ];

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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-8">
          <div className="flex flex-col gap-6">
          {/* <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
            Portfolio
          </p> */}
          <h1 className="font-display text-5xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-6xl">
            Designing calm digital products with a strong point of view.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Hello! I'm Ricardo, I am a full-stack developer focused on polished, user-friendly interfaces.
          </p>
          {/* <div className="flex flex-wrap gap-3">
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
          </div> */}
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://github.com/RickyRicardo904"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.09 2.93.84.09-.66.35-1.09.64-1.34-2.22-.25-4.56-1.1-4.56-4.9 0-1.08.39-1.97 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.67 0 3.8-2.34 4.64-4.57 4.88.36.31.69.92.69 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/rickyserrano904"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="currentColor"
              >
                <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@yourname"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
              aria-label="YouTube"
              title="YouTube"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="currentColor"
              >
                <path d="M23 12s0-3.1-.4-4.6a2.9 2.9 0 0 0-2-2C18.9 5 12 5 12 5s-6.9 0-8.6.4a2.9 2.9 0 0 0-2 2C1 8.9 1 12 1 12s0 3.1.4 4.6a2.9 2.9 0 0 0 2 2C5.1 19 12 19 12 19s6.9 0 8.6-.4a2.9 2.9 0 0 0 2-2C23 15.1 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </a>
          </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--panel-strong)] shadow-[0_24px_50px_-42px_rgba(10,12,16,0.7)]">
              <div className="post-thumb h-full w-full" />
              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                Your photo
              </div>
            </div>
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
      </section>
    </main>
  );
}
