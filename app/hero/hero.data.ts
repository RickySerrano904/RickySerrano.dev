export type SocialIcon = "github" | "linkedin" | "youtube" | "kofi";

export type SocialLink = {
  href: string;
  label: string;
  icon: SocialIcon;
};

export const heroWords = [
  "Systems Builder",
  "Software Developer",
  "IT Professional",
  "US Navy Veteran",
  "Problem Solver",
  "Technology Enthusiast",
  "Digital Creator",
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
];
