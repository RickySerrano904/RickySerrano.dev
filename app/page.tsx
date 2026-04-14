import AboutSection from "@/app/home/AboutSection";
import ContactSection from "@/app/home/ContactSection";
import ExperienceSection from "@/app/home/ExperienceSection";
import HeroSection from "@/app/home/HeroSection";
import ProjectsSection from "@/app/home/ProjectsSection";
import SkillsSection from "@/app/home/SkillsSection";
import {
  aboutParagraphs,
  certifications,
  education,
  heroDescription,
  heroLocation,
  heroWords,
  projects,
  roles,
  skills,
  socialLinks,
} from "@/app/home/content";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection
        words={heroWords}
        description={heroDescription}
        location={heroLocation}
        socialLinks={socialLinks}
      />
      <AboutSection paragraphs={aboutParagraphs} />
      <ExperienceSection
        education={education}
        certifications={certifications}
        roles={roles}
      />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  );
}
