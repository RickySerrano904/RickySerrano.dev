export default function AboutPage() {
  return (
    <main className="page-intro mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          About
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Building minimal, durable, and human products.
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          I work across strategy, design, and front-end engineering. My goal is
          to build products that feel calm, purposeful, and ready to scale.
        </p>
      </header>
    </main>
  );
}
