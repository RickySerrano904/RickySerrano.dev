import AboutSection from "@/app/about/AboutSection";
import ContactSection from "@/app/contact/ContactSection";
import ExperienceSection from "@/app/experience/ExperienceSection";
import HeroSection from "@/app/hero/HeroSection";
import ProjectsSection from "@/app/projects/ProjectsSection";
import SkillsSection from "@/app/skills/SkillsSection";
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
} from "@/app/content";

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

// export default function MaintenancePage() {
//   return (
//     <main className="min-h-screen flex items-center justify-center px-6 text-center">
//       <div>
//         <h1 className="text-4xl font-bold mb-4">Down for Maintenance</h1>
//         <p className="text-lg text-gray-600">
//           This site is temporarily unavailable while updates are being made.
//           Please check back soon.
//         </p>
//       </div>
//     </main>
//   );
// }
