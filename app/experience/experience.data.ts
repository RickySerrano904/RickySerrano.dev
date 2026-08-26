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

export const education: EducationItem[] = [
  {
    program: "B.A.S. Information Systems Technology",
    school: "Florida State College at Jacksonville",
    period: "2023 - 2026",
    points: [
      "Graduated magna cum laude with a 3.78/4.00 GPA.",
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
