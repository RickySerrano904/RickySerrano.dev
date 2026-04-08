import AboutSection from "@/app/components/home/AboutSection";
import ContactSection from "@/app/components/home/ContactSection";
import ExperienceSection from "@/app/components/home/ExperienceSection";
import HeroSection from "@/app/components/home/HeroSection";
import ProjectsSection from "@/app/components/home/ProjectsSection";
import SkillsSection from "@/app/components/home/SkillsSection";
import {
  aboutParagraphs,
  certifications,
  education,
  heroDescription,
  heroWords,
  projects,
  roles,
  skills,
  socialLinks,
} from "@/app/components/home/content";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection
        words={heroWords}
        description={heroDescription}
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
