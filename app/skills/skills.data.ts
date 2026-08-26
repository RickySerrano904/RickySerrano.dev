export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Core Stack",
    summary: "Build & ship",
    items: [
      "TypeScript", "JavaScript", "Java", "HTML", "CSS", "Python", "C#",
      "Spring Boot", "Angular", "React", "Next.js", "Node.js", "Tailwind CSS",
      "SQL", "PostgreSQL",
    ],
  },
  {
    title: "Tools & Platforms",
    summary: "Daily workflow",
    items: [
      "Git", "GitHub", "GitHub Actions", "Docker", "Cloudflare", "Linux",
      "Windows", "Active Directory", "ConnectWise", "Jira", "Figma", "Power BI",
      "Swagger / OpenAPI",
    ],
  },
  {
    title: "Currently Learning",
    summary: "What's next",
    items: ["AWS", "Kubernetes", "Playwright"],
  },
];
