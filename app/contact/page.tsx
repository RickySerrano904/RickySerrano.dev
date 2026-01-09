const contactItems = [
  {
    label: "Email",
    value: "hello@yourname.com",
    href: "mailto:hello@yourname.com",
  },
  {
    label: "Location",
    value: "Milan, Italy",
  },
  {
    label: "Schedule",
    value: "Open for projects starting March 2026",
  },
];

export default function ContactPage() {
  return (
    <main className="page-intro mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Contact
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Let's build something clear and memorable.
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          Tell me about your product, launch, or design system. I typically
          respond within two business days.
        </p>
      </header>

      <div className="stagger mt-10 grid gap-4">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {item.label}
            </p>
            {item.href ? (
              <a
                className="mt-2 block text-lg font-semibold text-[color:var(--fg)]"
                href={item.href}
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-lg font-semibold text-[color:var(--fg)]">
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
