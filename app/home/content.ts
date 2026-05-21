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
  thumbnailSrc?: string;
  thumbnailAlt?: string;
};

export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type SocialIcon = "github" | "linkedin" | "youtube" | "kofi";

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

export const heroLocation = "Jacksonville, Florida";

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/RickySerrano904",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://linkedin.com/in/rickyserrano904",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://ko-fi.com/Rickyserrano904",
    label: "Ko-fi",
    icon: "kofi",
  },
  // {
  //   href: "https://youtube.com/@yourname",
  //   label: "YouTube",
  //   icon: "youtube",
  // },
];

export const aboutParagraphs = [
  "Hello! My name is Ricky, I'm a full-stack developer with a passion for creating accessible, user-friendly tools and interfaces. I’ve always loved the world of computers and code, especially the ability to create things that make people smile, solve real problems, and make life a little easier.",
];

export const education: EducationItem[] = [
  {
    program: "B.A.S. Information Systems Technology",
    school: "Florida State College at Jacksonville",
    period: "2023 - Present",
    points: [
      "Completed coursework in application development, systems design, database management, networking, and cyber security.",
      "Gained hands-on experience with IT infrastructure, configuring and maintaining servers and network devices.",
      "Worked with a team to design and build full-stack application projects, applying agile development practices and version control workflows.",
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
      "Reinforces strong practices in endpoint support, OS installation, hardware diagnostics, and technical documentation.",
    ],
  },
];

export const roles: Role[] = [
  {
    title: "IT Help Desk Technician",
    company: "Natural Life",
    period: "Sep 2025 - Present",
    points: [
      "Provided technical support for workstation, phone, printer, and network issues, including hardware troubleshooting, software support, and device maintenance.",
      "Installed and maintained IT infrastructure including network cabling, workstation deployments, charging stations, surveillance systems, and other supported devices.",
      "Coordinated with users, vendors, and internal teams to resolve technical issues and support daily operations.",
  ],
  },
  {
    title: "IT Service Desk Technician",
    company: "Wounded Warrior Project",
    period: "Jun 2025 - Sep 2025",
    points: [
      "Resolved hardware, software, and network issues through service desk ticket workflows.",
      "Managed user accounts, password resets, group permissions, and access requests through Active Directory.",
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
    title: "SeniorHelper",
    summary:
      "Full-stack web app that helps older adults and caregivers coordinate tasks and appointments while teaching seniors to recognize and avoid online scams.",
    tags: ["Java", "TypeScript", "Angular", "Postgres"],
    thumbnailSrc: "/projects/senior-helper/seniorhelperr.jpg",
    thumbnailAlt: "Screenshot of Senior Helper homepage",
  },
  {
    slug: "enzos-world",
    title: "Enzo's World",
    summary:
      "A playful, interactive website based on Enzo, my younger sister's Golden Retriever, featuring a custom design, mock merchandise store, blog, and gallery.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
    thumbnailSrc: "/projects/enzos-world/enzosworld.jpg",
    thumbnailAlt: "Screenshot of Enzo's World homepage",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    summary:
      "A responsive portfolio website showcasing my projects, experience, and skills as a software developer.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
    thumbnailSrc: "/projects/portfolio-project/portfolio-screenshot.jpg",
    thumbnailAlt: "Screenshot of portfolio homepage",
  },
  {
    slug: "editing-station-pc",
    title: "Editing Station PC",
    summary:
      "A custom-built PC optimized for video editing workloads, featuring a high-performance CPU, GPU, and fast storage to handle large media files and complex timelines.",
    tags: ["PC Building", "Hardware Optimization"],
    thumbnailSrc: "/projects/editing-station-pc/maddy-build-inside.jpg",
    thumbnailAlt: "Photo of Editing Station PC",
  },
  {
    slug: "lancool-207-gaming-pc",
    title: "Lancool 207 Gaming PC",
    summary:
      "A white 1440p gaming PC built around a Ryzen 5 9600X, RTX 5070, fast DDR5 memory, and long-term upgrade headroom.",
    tags: ["PC Building", "Gaming", "Hardware"],
    thumbnailSrc: "/projects/Lancool-207-gaming-pc/lancool-05.jpg",
    thumbnailAlt: "Completed white Lancool 207 gaming PC build",
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
      "HTML",
      "CSS",
      "Python",
      "C#",
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
      "Windows",
      "Active Directory",
      "ConnectWise",
      "Jira",
      "Figma",
      "Power BI",
    ],
  },
  {
    title: "Currently Learning",
    summary: "Areas I am actively improving to broaden delivery capabilities.",
    items: ["AWS", "CI/CD Workflows", "Kubernetes", "Automation"],
  },
];
