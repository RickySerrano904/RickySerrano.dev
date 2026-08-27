export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  marqueeThumbnailSrc?: string;
  marqueeThumbnailAlt?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "first-pc-build",
    title: "First Custom PC Build",
    summary: "My first custom desktop PC build, documenting the component choices that started my hands-on experience with computer hardware.",
    tags: ["PC Building", "Hardware", "Gaming"],
  },
  {
    slug: "senior-helper",
    title: "Senior Helper",
    summary: "Full-stack web app that helps older adults and caregivers coordinate appointments, stay connected, and build online safety skills.",
    tags: ["Java", "TypeScript", "Angular", "Postgres"],
    marqueeThumbnailSrc: "/projects/senior-helper/seniorhelper-marquee.png",
    thumbnailSrc: "/projects/senior-helper/seniorhelper-light-01.png",
    thumbnailAlt: "Senior Helper landing page in light mode",
  },
  {
    slug: "enzos-world",
    title: "Enzo's World",
    summary: "A playful Next.js site for Enzo with a curated photo gallery, MDX field reports, a protected contact form, and a merch shop bridge.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
    marqueeThumbnailSrc: "/projects/enzos-world/screen-1-marquee.png",
    thumbnailSrc: "/projects/enzos-world/screen-1.png",
    thumbnailAlt: "Enzo's World home page in dark mode",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    summary: "A responsive portfolio website showcasing my projects, experience, and skills as a software developer.",
    tags: ["Next.js", "React", "TypeScript", "MDX"],
    marqueeThumbnailSrc: "/projects/portfolio-project/portfolio-marquee.png",
    thumbnailSrc: "/projects/portfolio-project/portfolio-screenshot.jpg",
    thumbnailAlt: "Screenshot of portfolio homepage",
  },
  {
    slug: "editing-station-pc",
    title: "Fractal North Editing PC",
    summary: "A custom-built PC optimized for video editing workloads, featuring a high-performance CPU, GPU, and fast storage to handle large media files and complex timelines.",
    tags: ["PC Building", "Hardware Optimization"],
    thumbnailSrc: "/projects/editing-station-pc/maddy-09.png",
    thumbnailAlt: "Photo of Editing Station PC",
  },
  {
    slug: "lancool-207-gaming-pc",
    title: "Lancool 207 Gaming PC",
    summary: "A white 1440p gaming PC built around a Ryzen 5 9600X, RTX 5070, fast DDR5 memory, and long-term upgrade headroom.",
    tags: ["PC Building", "Gaming", "Hardware"],
    thumbnailSrc: "/projects/Lancool-207-gaming-pc/lancool-05.jpg",
    thumbnailAlt: "Completed white Lancool 207 gaming PC build",
  },
];
