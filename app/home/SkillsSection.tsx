import type { SkillGroup } from "./content";

type SkillsSectionProps = {
  skills: SkillGroup[];
};

type SkillIconConfig = {
  src?: string;
  label?: string;
};

const skillIcons: Record<string, SkillIconConfig> = {
  TypeScript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  JavaScript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  Java: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  "Spring Boot": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  Angular: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  React: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  "Next.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  "Node.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  "Tailwind CSS": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  SQL: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  PostgreSQL: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  Git: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  GitHub: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  Docker: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  Linux: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  "Windows Server": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg",
  },
  "Active Directory": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  ConnectWise: {
    src: "https://cdn.simpleicons.org/connectwise",
  },
  Jira: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  Figma: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  AWS: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  "CI/CD Workflows": { label: "CI" },
  Kubernetes: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
  },
  Automation: { label: "Au" },
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
            <ul className="mt-5 grid gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex h-11 w-full items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] px-3 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]"
                >
                  <SkillIcon item={item} />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillIcon({ item }: { item: string }) {
  const icon = skillIcons[item] ?? { label: item.slice(0, 2) };

  if (icon.src) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_0_0_1px_rgba(16,35,28,0.12)]"
      >
        <img
          src={icon.src}
          alt=""
          className="max-h-full max-w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] px-1.5 text-[0.58rem] font-bold leading-none tracking-normal text-[color:var(--bg)]"
    >
      {icon.label}
    </span>
  );
}
