export type EducationItem = {
  program: string;
  school: string;
  period: string;
  points: string[];
};

export type Certification = {
  issuer: string;
  name: string;
  period: string;
  points: string[];
};

export type Role = {
  title: string;
  company: string;
  period: string;
  points: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type SocialIcon = "github" | "linkedin" | "youtube";

export type SocialLink = {
  href: string;
  label: string;
  icon: SocialIcon;
};

export const heroWords = [
  "Fullstack Developer",
  "Systems Builder",
  "Veteran",
  "Problem Solver",
  "IT Professional",
];

export const heroDescription =
  "Bringing ideas to life through code, with a focus on practical, user-friendly designs.";

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/RickyRicardo904",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://linkedin.com/in/rickyserrano904",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://youtube.com/@yourname",
    label: "YouTube",
    icon: "youtube",
  },
];

export const aboutParagraphs = [
  "I'm Ricky, a full-stack developer and IT professional focused on building reliable, user-friendly software and supporting secure, well-run systems.",
  "My background spans application development, technical support, and infrastructure work, which helps me bridge the gap between product needs and real-world operations.",
  "I like solving real problems, keeping things simple, and building tools people actually enjoy using.",
];

export const education: EducationItem[] = [
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

export const certifications: Certification[] = [
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

export const roles: Role[] = [
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

export const projects: Project[] = [
  {
    slug: "senior-helper",
    title: "Senior Helper",
    summary:
      "Full-stack web app that helps older adults and caregivers coordinate tasks and appointments while teaching seniors to recognize and avoid online scams.",
    tags: ["Java", "TypeScript", "Angular", "Postgres"],
  },
  {
    slug: "enzos-world",
    title: "Enzo's World",
    summary:
      "A playful, interactive website based on Enzo, my younger sister's Golden Retriever, featuring a custom design, mock merchandise store, blog, and gallery.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
  },
];

export const skills: SkillGroup[] = [
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
    items: ["AWS", "CI/CD Workflows", "Kubernetes", "Automation"],
  },
];
