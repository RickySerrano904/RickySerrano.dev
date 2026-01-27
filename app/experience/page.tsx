const roles = [
  {
    title: "Lead Product Designer",
    company: "Studio North",
    period: "2023 - Present",
    summary:
      "Own product vision, design systems, and front-end direction for launch-ready MVPs.",
  },
  {
    title: "Parts Sales Manager",
    company: "AutoZone",
    period: "2023 - 2025",
    summary:
      "Managed store inventory, customer orders and new product shipments. \nUtilized proprietary company software to sell products and maintain customer data. \nExecuted daily opening and closing procedures, including conducting store audits. \nHandled daily cash reconciliation, including safe counts and register balancing. \n",
  },
  {
    title: "Aviation Structural Mechanic",
    company: "US Navy",
    period: "2016 - 2022",
    summary:
      "Managed aircraft records and repair data using specialized software. \n Led and qualified a team of 25 sailors in the completion of maintenance inspections. \nSupervised aircraft launch and recovery opertations in a high-tempo environment. \nPerformed maintenance on aircraft including Sikorsky MH-60R and Boeing E-6B Mercury.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="page-intro mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Experience
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Roles and collaborations.
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)] whitespace-pre-line">
          A snapshot of recent roles and the kind of work I like to take on.
        </p>
      </header>

      <section className="stagger mt-10 grid gap-4">
        {roles.map((role) => (
          <article
            key={`${role.title}-${role.company}`}
            className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-[color:var(--fg)]">
                {role.title} - {role.company}
              </h2>
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {role.period}
              </span>
            </div>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] whitespace-pre-line">
              {role.summary}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
