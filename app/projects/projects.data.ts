export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  thumbnailSrc?: string;
  thumbnailAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "vibecheck",
    title: "VibeCheck",
    summary: "A full-stack web application that helps friends discover upcoming music events tailored to their music preferences and vote on which to attend, making it easier to plan their next concert together.",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "APIs"],
    thumbnailSrc: "/projects/vibecheck/01 landing page.png",
    thumbnailAlt: "VibeCheck landing page introducing live music matching and group voting",
  },
  {
    slug: "senior-helper",
    title: "Senior Helper",
    summary: "A full-stack web application that helps older adults and caregivers stay organized, connected, and safer online.",
    tags: ["Java", "TypeScript", "Angular", "Postgres"],
    thumbnailSrc: "/projects/senior-helper/01 landing.png",
    thumbnailAlt: "Senior Helper landing page in light mode",
  },
  {
    slug: "enzos-world",
    title: "Enzo's World",
    summary: "A playful website dedicated to Enzo, featuring a photo gallery, blog, contact page, and a linked Fourthwall merch store.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
    thumbnailSrc: "/projects/enzos-world/01 dashboard.png",
    thumbnailAlt: "Enzo's World home page in light mode",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    summary: "A responsive portfolio website designed to present my work, experience, skills, and project case studies in a polished, maintainable format.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
    thumbnailSrc: "/projects/portfolio-project/portfolio screenshot.png",
    thumbnailAlt: "Ricky Serrano's portfolio homepage in dark mode with a profile photo and GitHub contribution graph",
  },
    {
    slug: "first-pc-build",
    title: "My First PC Build",
    summary: "The first custom desktop I built for myself back in 2020: a hands-on introduction to researching compatible parts, and assembling a system.",
    tags: ["PC Building", "Hardware", "Gaming"],
  },
  {
    slug: "editing-station-pc",
    title: "Fractal North Editing PC",
    summary: "A custom workstation built for productivity and photo editing, pairing lasting performance with a clean white aesthetic.",
    tags: ["PC Building", "Hardware Optimization"],
    thumbnailSrc: "/projects/editing-station-pc/01 fractal pc.png",
    thumbnailAlt: "Completed white Fractal North editing PC with blue interior lighting and a wood front panel",
  },
  {
    slug: "lancool-207-gaming-pc",
    title: "Lancool 207 Gaming PC",
    summary: "A white 1440p gaming PC built around a Ryzen 5 9600X, RTX 5070, fast DDR5 memory, and long-term upgrade headroom.",
    tags: ["PC Building", "Gaming", "Hardware"],
    thumbnailSrc: "/projects/Lancool-207-gaming-pc/01 lancool.jpg",
    thumbnailAlt: "White Lancool 207 gaming PC interior with blue lighting and a GeForce RTX graphics card",
  },
];

export function getProjectSummary(slug: string): string {
  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    throw new Error(`Unknown project: ${slug}`);
  }
  return project.summary;
}
