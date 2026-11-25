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
      "Graduated magna cum laude with a 3.75/4.00 GPA.",
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
      "Provide technical support for workstation, phone, printer, and network issues, including hardware troubleshooting, software support, and device maintenance.",
      "Troubleshoot wired and wireless connectivity issues; install and maintain network cabling and connected devices.",
      "Create user accounts, configure software, and prepare workstations for new employees.",
      "Coordinate with users, vendors, and internal IT teams to resolve technical issues.",
    ],
  },
  {
    title: "IT Service Desk Technician",
    company: "Wounded Warrior Project",
    period: "Jun 2025 - Sep 2025",
    points: [
      "Provided technical support and troubleshooting for end users, documenting and resolving support tickets",
      "Managed user accounts and permissions across Active Directory and other systems.",
      "Deployed, configured, and maintained endpoints and handled equipment decommissioning and secure disposal.",
      "Diagnosed and resolved end-user issues remotely using ConnectWise.",
    ],
  },
  {
    title: "Co-Owner / Operator",
    company: "ProJax Pressure Washing, LLC",
    period: "Jan 2024 - May 2025",
    points: [
      "Managed service delivery and client relationships for over 200 residential and commercial customers.",
      "Oversaw daily operations, including budgeting, scheduling, and resource management.",
    ],
  },
  {
    title: "Parts Sales Manager",
    company: "AutoZone",
    period: "May 2023 - Dec 2023",
    points: [
      "Managed inventory, customer orders, store audits, and daily cash reconciliation.",
      "Processed sales transactions and maintained accurate customer records using internal retail systems. ",
    ],
  },
  {
    title: "Aviation Structural Mechanic",
    company: "US Navy",
    period: "Dec 2016 - Nov 2022",
    points: [
      "Led and qualified 18 sailors in maintenance inspections, aircraft movements, preflight checks, and flight deck launch and recovery operations.",
      "Maintained aircraft maintenance records and repair data for 11 forward-deployed combat aircraft using specialized software.",
      "Diagnosed mechanical and hydraulic system faults using technical manuals and maintenance publications to determine corrective actions.",
    ],
  },
];
