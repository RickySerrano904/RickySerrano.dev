import type { Certification, EducationItem, Role } from "./content";

type ExperienceSectionProps = {
  education: EducationItem[];
  certifications: Certification[];
  roles: Role[];
};

type ExperienceCard = {
  id: string;
  title: string;
  period: string;
  points: string[];
};

export default function ExperienceSection({
  education,
  certifications,
  roles,
}: ExperienceSectionProps) {
  const educationCards: ExperienceCard[] = education.map((item) => ({
    id: `${item.program}-${item.school}`,
    title: `${item.program} - ${item.school}`,
    period: item.period,
    points: item.points,
  }));

  const certificationCards: ExperienceCard[] = certifications.map((cert) => ({
    id: `${cert.name}-${cert.issuer}`,
    title: `${cert.issuer} - ${cert.name}`,
    period: cert.period,
    points: cert.points,
  }));

  const roleCards: ExperienceCard[] = roles.map((role) => ({
    id: `${role.title}-${role.company}`,
    title: `${role.title} - ${role.company}`,
    period: role.period,
    points: role.points,
  }));

  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="w-full">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Experience
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A snapshot of my education, industry certifications, and professional
          experience.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-2 text-sm font-semibold text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
        >
          Download resume <span aria-hidden="true">-&darr;</span>
        </a>
      </header>

      <ExperienceGroup title="Education" cards={educationCards} />
      <ExperienceGroup title="Certifications" cards={certificationCards} />
      <ExperienceGroup title="Experience" cards={roleCards} />
    </section>
  );
}

function ExperienceGroup({
  title,
  cards,
}: {
  title: string;
  cards: ExperienceCard[];
}) {
  return (
    <div className="stagger mt-12 grid gap-4">
      <h3 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
        {title}
      </h3>
      {cards.map((card) => (
        <article
          key={card.id}
          className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-lg font-semibold text-[color:var(--fg)]">
              {card.title}
            </h4>
            <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {card.period}
            </span>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-[color:var(--muted)]">
            {card.points.map((point, index) => (
              <li key={`${card.id}-${index}`}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
