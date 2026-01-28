type EducationItem = {
  program: string;
  school: string;
  period: string;
  summary: string;
};

type Certification = {
  issuer: string;
  name: string;
  period: string;
  summary: string;
};

type Role = {
  title: string;
  company: string;
  period: string;
  summary: string;
};

const education: EducationItem[] = [
  {
    program: "B.A.S. Information Systems Technology",
    school: "Florida State College at Jacksonville",
    period: "2023 - Present",
    summary: "• Completed coursework in programming, database management, and network security. \n• Developed skills in system analysis and troubleshooting. \n• Gained hands-on experience with IT infrastructure and software development principles.",
  }
];

const certifications: Certification[] = [
  {
    issuer: "CompTIA",
    name: "A+",
    period: "2024",
    summary: "Demonstrates foundational knowledge of computer hardware, operating systems, networking, and troubleshooting techniques for supporting end users and IT environments.",
  },
];

const roles: Role[] = [
    {
    title: "IT Help Desk Technician",
    company: "Natural Life",
    period: "SEP 2025 - PRESENT",
    summary:
      "• Delivered technical support for end users by resolving issues with workstations, phones, network connectivity, and printers, minimizing downtime and maintaining reliable daily operations. \n• Installed and maintained IT infrastructure including Ethernet cabling, workstation setups, charging stations, surveillance systems, and over 180 devices across multiple departments. \n• Worked closely with systems administrators and engineering teams on infrastructure projects and system improvements, using documentation and pass-down logs to ensure continuity of support and stable environments. \n• Supported system availability and performance through proactive monitoring, preventative maintenance, standardized deployments, and rapid incident response, strengthening uptime and end-user experience.",
  },
  {
    title: "IT Service Desk Technician",
    company: "Wounded Warrior Project",
    period: "JUN 2025 - SEP 2025",
    summary:
      "• Provided technical support and troubleshooting for end-users, resolving hardware, software, and network issues through ticketing systems. \n• Managed user accounts and permissions across Active Directory and other sysytems, ensuring secure on-boarding and off-boarding processes. \n• Deployed, configured, and maintained endpoints; handled decomissioning and secure disposal of IT equipment. \n• Utilized ConnectWise remote support tools to diagnose and resolve issues remotely.",
  },
  {
    title: "Co-Owner/Operator",
    company: "ProJax Pressure Washing, LLC.",
    period: "JAN 2024 - MAY 2025",
    summary:
      "• Managed service delivery and client relationships for over 200 residential and commercial customers. \n• Oversaw daily operation, including budgeeting, scheduling, and resource management. \n• Conducted pressure washing services, including surface preparation, cleaning, and post-service inspections to ensure customer satisfaction. \n• Designed efficient service workflows to reduce job time and maximize resource usage.",
  },
  {
    title: "Parts Sales Manager",
    company: "AutoZone",
    period: "MAY 2023 - DEC 2023",
    summary:
      "•Managed store inventory, customer orders and new product shipments. \n• Utilized proprietary company software to sell products and maintain customer data. \n• Executed daily opening and closing procedures, including conducting store audits. \n• Handled daily cash reconciliation, including safe counts and register balancing. \n",
  },
  {
    title: "Aviation Structural Mechanic",
    company: "US Navy",
    period: "DEC 2016 - NOV 2022",
    summary:
      "• Managed aircraft records and repair data using specialized software. \n• Led and qualified a team of 25 sailors in the completion of maintenance inspections. \n• Supervised aircraft launch and recovery opertations in a high-tempo environment. \n• Performed maintenance on aircraft including Sikorsky MH-60R and Boeing E-6B Mercury.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="page-intro mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <header className="max-w-2xl">
        {/* <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Experience
        </p> */}
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Education, Certifications, and Experience
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)] whitespace-pre-line">
          An overview of the various roles that I've held, schooling I've completed and 
          certifications I've earned.
        </p>
      </header>

      <section className="stagger mt-12 grid gap-4">
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <div>
            {/* <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Education
            </p> */}
            <h2 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)]">
              Education
            </h2>
          </div>
        </div>
        {education.map((item) => (
          <article
            key={`${item.program}-${item.school}`}
            className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-[color:var(--fg)]">
                {item.program} - {item.school}
              </h3>
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {item.period}
              </span>
            </div>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] whitespace-pre-line">
              {item.summary}
            </p>
          </article>
        ))}
      </section>

      <section className="stagger mt-12 grid gap-4">
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <div>
            {/* <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Certifications
            </p> */}
            <h2 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)]">
              Certifications 
            </h2>
          </div>
        </div>
        {certifications.map((cert) => (
          <article
            key={`${cert.name}-${cert.issuer}`}
            className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-[color:var(--fg)]">
                {cert.issuer} - {cert.name}
              </h3>
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {cert.period}
              </span>
            </div>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] whitespace-pre-line">
              {cert.summary}
            </p>
          </article>
        ))}
      </section>

      <section className="stagger mt-12 grid gap-4">
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <div>
            {/* <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Roles
            </p> */}
            <h2 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)]">
              Experience
            </h2>
          </div>
        </div>
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
