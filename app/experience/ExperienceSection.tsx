import type { Certification, EducationItem, Role } from "@/app/content";

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
    id: `${cert.issuer}-${cert.name}`,
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
    <section id="experience" className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="w-full">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Experience
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A snapshot of my education, industry certifications, and professional
          experience.
        </p>
        {/* <a
          href="/resume.pdf"
          download
          className="group mt-5 inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-2 text-sm font-semibold text-[color:var(--fg)] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--bg)] hover:shadow-[0_0_0_1px_var(--accent),0_0_26px_-5px_var(--accent)] focus-visible:border-[color:var(--accent)] focus-visible:bg-[color:var(--accent)] focus-visible:text-[color:var(--bg)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--bg),0_0_26px_-4px_var(--accent)]"
        >
          <span className="transition-colors group-hover:text-[color:var(--bg)] group-focus-visible:text-[color:var(--bg)]">
            Download resume
          </span>
          <span
            aria-hidden="true"
            className="transition-colors group-hover:text-[color:var(--bg)] group-focus-visible:text-[color:var(--bg)]"
          >
            &darr;
          </span>
        </a> */}
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
    <div className="stagger mt-10 grid gap-4 sm:mt-12">
      <h3 className="font-display text-xl font-semibold text-[color:var(--fg)] sm:text-2xl">
        {title}
      </h3>
      {cards.map((card) => (
        <article
          key={card.id}
          className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)] sm:rounded-3xl sm:p-6"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <h4 className="text-base font-semibold leading-6 text-[color:var(--fg)] sm:text-lg">
              {card.title}
            </h4>
            <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)] sm:tracking-[0.3em]">
              {card.period}
            </span>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[color:var(--muted)] sm:text-base sm:leading-7">
            {card.points.map((point, index) => (
              <li key={`${card.id}-${index}`}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
