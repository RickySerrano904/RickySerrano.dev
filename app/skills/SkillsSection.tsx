import type { SkillGroup } from "@/app/content";

type SkillsSectionProps = {
  skills: SkillGroup[];
};

type SkillIconConfig = {
  src?: string;
  srcs?: string[];
  custom?: "connectwise" | "powerbi";
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
  HTML: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  CSS: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  "HTML & CSS": {
    srcs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    ],
  },
  Python: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  "C#": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
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
  Windows: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg",
  },
  "Active Directory": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  ConnectWise: {
    custom: "connectwise",
  },
  Jira: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  Figma: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  "Power BI": {
    custom: "powerbi",
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
    <section id="skills" className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Skills
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A quick breakdown of the technologies and platforms I use to build,
          support, and ship reliable systems.
        </p>
      </header>

      <div className="stagger mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)] sm:rounded-3xl sm:p-6"
          >
            <h3 className="font-display text-xl font-semibold text-[color:var(--fg)] sm:text-2xl">
              {group.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              {group.summary}
            </p>
            <ul className="mt-5 grid gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex min-h-11 w-full items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--muted)] sm:h-11 sm:py-0 sm:tracking-[0.14em]"
                >
                  <SkillIcon item={item} />
                  <span className="min-w-0 break-words">{item}</span>
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
  const iconSources = icon.srcs ?? (icon.src ? [icon.src] : []);

  if (icon.custom) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_0_0_1px_rgba(16,35,28,0.12)]"
      >
        <CustomSkillIcon icon={icon.custom} />
      </span>
    );
  }

  if (iconSources.length > 0) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_0_0_1px_rgba(16,35,28,0.12)]"
      >
        {iconSources.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className={
              iconSources.length > 1
                ? "h-full min-w-0 flex-1 object-contain"
                : "max-h-full max-w-full object-contain"
            }
          />
        ))}
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

function CustomSkillIcon({ icon }: { icon: "connectwise" | "powerbi" }) {
  if (icon === "connectwise") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        role="img"
        aria-label=""
      >
        <rect width="24" height="24" rx="6" fill="#0E60AA" />
        <path
          d="M6.75 13.5a3.75 3.75 0 1 1 3.38-5.38l-1.8.95A1.72 1.72 0 1 0 8.3 11.9l1.83.91a3.74 3.74 0 0 1-3.38.69Zm7.35.13h-2.04L9.8 6.6h2.15l1.22 4.22 1.38-4.22h1.72l1.38 4.22 1.22-4.22H21l-2.25 7.03H16.7l-1.3-3.87-1.3 3.87Z"
          fill="#FFFFFF"
        />
        <path
          d="M7 17.2h10"
          stroke="#8DD7F7"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full"
      role="img"
      aria-label=""
    >
      <rect width="24" height="24" rx="6" fill="#F2C811" />
      <rect x="5" y="11" width="3.8" height="7" rx="1.4" fill="#6B4E00" />
      <rect x="10.1" y="7" width="3.8" height="11" rx="1.4" fill="#9B7200" />
      <rect x="15.2" y="4" width="3.8" height="14" rx="1.4" fill="#2F2400" />
    </svg>
  );
}
