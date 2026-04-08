import type { SkillGroup } from "./content";

type SkillsSectionProps = {
  skills: SkillGroup[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="max-w-2xl">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Skills
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A quick breakdown of the technologies and platforms I use to build,
          support, and ship reliable systems.
        </p>
      </header>

      <div className="stagger mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)]"
          >
            <h3 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
              {group.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              {group.summary}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
