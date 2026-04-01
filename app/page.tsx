import Link from "next/link";
import TypewriterText from "./components/TypewriterText";

type EducationItem = {
  program: string;
  school: string;
  period: string;
  points: string[];
};

type Certification = {
  issuer: string;
  name: string;
  period: string;
  points: string[];
};

type Role = {
  title: string;
  company: string;
  period: string;
  points: string[];
};

type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

// const highlights = [
//   {
//     title: "Current focus",
//     description:
//       "Designing calm, high-signal experiences for early-stage products.",
//   },
//   {
//     title: "Recent projects",
//     description:
//       "A selection of practical builds across web, UX, and IT-focused work.",
//     href: "/#projects",
//     cta: "View projects",
//   },
// ];

const education: EducationItem[] = [
  {
    program: "B.A.S. Information Systems Technology",
    school: "Florida State College at Jacksonville",
    period: "2023 - Present",
    points: [
      "Completed coursework in application development, database management, troubleshooting, and systems analysis.",
      "Gained hands-on experience with IT infrastructure and software development principles.",
    ],
  },
];

const certifications: Certification[] = [
  {
    issuer: "CompTIA",
    name: "A+",
    period: "2024",
    points: [
      "Demonstrates foundational knowledge of computer hardware, operating systems, and networking.",
      "Validates troubleshooting skills for supporting end users and IT environments.",
    ],
  },
];

const roles: Role[] = [
  {
    title: "IT Help Desk Technician",
    company: "Natural Life",
    period: "Sep 2025 - Present",
    points: [
      "Delivered technical support for workstation, phone, printer, and network issues.",
      "Installed and maintained IT infrastructure including cabling, workstation setups, charging stations, and surveillance systems.",
      "Supported over 180 devices and collaborated with systems administrators and engineering on infrastructure improvements.",
    ],
  },
  {
    title: "IT Service Desk Technician",
    company: "Wounded Warrior Project",
    period: "Jun 2025 - Sep 2025",
    points: [
      "Resolved hardware, software, and network issues through service desk ticket workflows.",
      "Managed user accounts and permissions in Active Directory and related systems.",
      "Handled endpoint deployment, lifecycle management, and secure decommissioning.",
    ],
  },
  {
    title: "Co-Owner / Operator",
    company: "ProJax Pressure Washing, LLC",
    period: "Jan 2024 - May 2025",
    points: [
      "Managed service delivery and client relationships for 200+ residential and commercial customers.",
      "Oversaw budgeting, scheduling, and day-to-day resource management.",
      "Designed efficient workflows that reduced job time and improved consistency.",
    ],
  },
  {
    title: "Parts Sales Manager",
    company: "AutoZone",
    period: "May 2023 - Dec 2023",
    points: [
      "Managed store inventory, customer orders, and incoming product shipments.",
      "Used internal systems to process sales and maintain customer records.",
      "Executed opening and closing procedures, including daily cash reconciliation.",
    ],
  },
  {
    title: "Aviation Structural Mechanic",
    company: "US Navy",
    period: "Dec 2016 - Nov 2022",
    points: [
      "Managed aircraft records and maintenance repair data.",
      "Led and qualified a team of 25 sailors through maintenance inspections.",
      "Supported aircraft launch and recovery operations in high-tempo environments.",
    ],
  },
];

const projects: Project[] = [
  {
    slug: "senior-helper",
    title: "Senior Helper",
    summary:
      "Full-stack web app that helps older adults and caregivers coordinate daily tasks and appointments while teaching seniors to recognize and avoid online scams.",
    tags: ["Java", "TypeScript", "Angular", "Postgres"],
  },
  {
    slug: "enzos-world",
    title: "Enzo's World",
    summary:
      "A playful, interactive website based on Enzo, my younger sister's dog, featuring a custom design system and lighthearted interaction design.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
  },
];

const skills: SkillGroup[] = [
  {
    title: "Core Stack",
    summary: "Technologies I use most often when building and shipping projects.",
    items: [
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "Angular",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & Platforms",
    summary: "Day-to-day tooling for collaboration, deployment, and support.",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Windows Server",
      "Active Directory",
      "ConnectWise",
      "Jira",
      "Figma",
    ],
  },
  {
    title: "Currently Learning",
    summary: "Areas I am actively improving to broaden delivery capabilities.",
    items: [
      "AWS", 
      "CI/CD Workflows", 
      "Kubernetes",
      "Automation",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative">
      <section
        id="home"
        className="page-intro mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-24 pt-32"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-5xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-6xl">
              Hi, I'm Ricky,
              <br />
              <TypewriterText
                className="inline-flex items-center"
                words={[
                  "Fullstack Developer",
                  "Veteran",
                  "Systems Builder",
                ]}
              />
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
              Bringing ideas to life through code, with a focus on practical, user-friendly designs. 
            </p>
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

            <section className="w-full max-w-2xl rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  GitHub Contributions
                </h2>
                <a
                  href="https://github.com/RickyRicardo904"
                  className="text-xs font-semibold text-[color:var(--fg)] hover:text-[color:var(--accent)]"
                >
                  View profile -&gt;
                </a>
              </div>
              <div className="overflow-x-auto">
                <img
                  src="https://ghchart.rshah.org/db03fc/RickyRicardo904"
                  alt="GitHub contribution calendar for RickyRicardo904"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
            </section>
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

        {/* <div className="stagger grid gap-6 md:grid-cols-2">
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
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ) : null}
            </div>
          ))}
        </div> */}
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-5xl px-6 py-24"
      >
        <header className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
            About
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
            {/* Hello! I&apos;m Ricardo, an IT professional focused on building
            reliable, user-friendly applications and supporting secure, efficient
            systems and networks. This portfolio showcases some of my projects,
            technical skills, and approach to practical problem-solving in IT. */}
            I’m Ricky, a full-stack developer and IT professional focused on building reliable, user-friendly software and supporting secure, well-run systems.
            < br />
            < br />
            My background spans application development, technical support, and infrastructure work, which helps me bridge the gap between product needs and real-world operations.
            < br />
            < br />
            I like solving real problems, keeping things simple, and building tools people actually enjoy using.          </p>
        </header>
      </section>

      <section
        id="experience"
        className="mx-auto w-full max-w-5xl px-6 py-24"
      >
        <header className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
            Experience
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
            A snapshot of my education, industry certifications, and professional experience across technical and operational roles.
          </p>
        </header>

        <div className="stagger mt-12 grid gap-4">
          <h3 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
            Education
          </h3>
          {education.map((item) => (
            <article
              key={`${item.program}-${item.school}`}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-semibold text-[color:var(--fg)]">
                  {item.program} - {item.school}
                </h4>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {item.period}
                </span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-[color:var(--muted)]">
                {item.points.map((point, index) => (
                  <li key={`${item.program}-${index}`}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="stagger mt-12 grid gap-4">
          <h3 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
            Certifications
          </h3>
          {certifications.map((cert) => (
            <article
              key={`${cert.name}-${cert.issuer}`}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-semibold text-[color:var(--fg)]">
                  {cert.issuer} - {cert.name}
                </h4>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {cert.period}
                </span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-[color:var(--muted)]">
                {cert.points.map((point, index) => (
                  <li key={`${cert.name}-${index}`}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="stagger mt-12 grid gap-4">
          <h3 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
            Experience
          </h3>
          {roles.map((role) => (
            <article
              key={`${role.title}-${role.company}`}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-semibold text-[color:var(--fg)]">
                  {role.title} - {role.company}
                </h4>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {role.period}
                </span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-[color:var(--muted)]">
                {role.points.map((point, index) => (
                  <li key={`${role.title}-${index}`}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto w-full max-w-5xl px-6 py-24"
      >
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

      <section
        id="projects"
        className="mx-auto w-full max-w-5xl px-6 py-24"
      >
        <header className="max-w-3xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
            A mix of projects and builds to showcase my work.
          </p>
        </header>

        <div className="stagger mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="group rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-3 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)] backdrop-blur transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
                <div className="post-thumb h-full w-full" />
              </div>
              <article className="p-3">
                <h3 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)] transition group-hover:text-[color:var(--accent)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)]">
                  View project <span aria-hidden="true">-&gt;</span>
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-5xl px-6 pb-28 pt-24"
      >
        <header className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
            Contact
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
            Let&apos;s connect. Fill out the form below to contact me, and I
            typically respond within two business days.
          </p>
        </header>

        <section className="stagger mt-10 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 shadow-[0_30px_70px_-55px_rgba(10,12,16,0.75)] sm:p-8">
          <h3 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
            Send a message
          </h3>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Fill out the form below and I will get back to you as soon as
            possible.
          </p>

          <form className="mt-6 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[color:var(--fg)]">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="h-11 w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] focus-visible:border-[color:var(--accent)] focus-visible:outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[color:var(--fg)]">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] focus-visible:border-[color:var(--accent)] focus-visible:outline-none"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-[color:var(--fg)]">
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Enter your message"
                className="w-full resize-none rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] focus-visible:border-[color:var(--accent)] focus-visible:outline-none"
              />
            </label>

            <button
              type="submit"
              className="h-12 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--nav-active)] text-sm font-semibold text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
            >
              Send Message
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
