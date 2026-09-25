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
    summary: "Full-stack capstone app that matches nearby live music to a group's Last.fm preferences and helps friends choose an event through voting.",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "APIs"],
    thumbnailSrc: "/projects/vibecheck/01 landing page.png",
    thumbnailAlt: "VibeCheck landing page introducing live music matching and group voting",
  },
  {
    slug: "senior-helper",
    title: "Senior Helper",
    summary: "Full-stack web app that helps older adults and caregivers coordinate appointments, stay connected, and build online safety skills.",
    tags: ["Java", "TypeScript", "Angular", "Postgres"],
    thumbnailSrc: "/projects/senior-helper/01 landing.png",
    thumbnailAlt: "Senior Helper landing page in light mode",
  },
  {
    slug: "enzos-world",
    title: "Enzo's World",
    summary: "A playful Next.js site for Enzo with a curated photo gallery, MDX field reports, a protected contact form, and a merch shop bridge.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
    thumbnailSrc: "/projects/enzos-world/01 dashboard.png",
    thumbnailAlt: "Enzo's World home page in light mode",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    summary: "A responsive portfolio website showcasing my projects, experience, and skills as a software developer.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
    thumbnailSrc: "/projects/portfolio-project/portfolio screenshot.png",
    thumbnailAlt: "Ricky Serrano's portfolio homepage in dark mode with a profile photo and GitHub contribution graph",
  },
    {
    slug: "first-pc-build",
    title: "My First PC Build",
    summary: "My first custom desktop PC build, documenting the component choices that started my hands-on experience with computer hardware.",
    tags: ["PC Building", "Hardware", "Gaming"],
  },
  {
    slug: "editing-station-pc",
    title: "Fractal North Editing PC",
    summary: "A custom-built PC optimized for video editing workloads, featuring a high-performance CPU, GPU, and fast storage to handle large media files and complex timelines.",
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
