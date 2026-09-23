"use client";

import { createContext, useContext, useState, type ComponentProps } from "react";
import ProjectCaseStudyLayout from "@/app/projects/ProjectCaseStudyLayout";
import ScreenshotGallery from "@/app/projects/ScreenshotGallery";

type ScreenshotMode = "light" | "dark";

const ScreenshotModeContext = createContext<{
  mode: ScreenshotMode;
  setMode: (mode: ScreenshotMode) => void;
} | null>(null);

const screenshots = [
  { title: "Landing Page", light: "01 landing.png", dark: "01 landing-dark.png", alt: "Senior Helper landing page" },
  { title: "Sign In", light: "02 login.png", dark: "02 login-dark.png", alt: "Senior Helper sign in form" },
  { title: "Register", light: "03 register.png", dark: "03 register-dark.png", alt: "Senior Helper account registration form" },
  { title: "Dashboard", light: "04 dashboard.png", dark: "04 dashboard-dark.png", alt: "Senior Helper dashboard" },
  { title: "Calendar", light: "05 calendar.png", dark: "05 calendar-dark.png", alt: "Senior Helper appointment calendar" },
  { title: "Appointment", light: "06 appointment.png", dark: "06 appointment-dark.png", alt: "Senior Helper appointment form" },
  { title: "Connections", light: "07 connections.png", dark: "07 connections-dark.png", alt: "Senior Helper caregiver and family connections" },
  { title: "Education Modules", light: "08 education.png", dark: "08 education-dark.png", alt: "Senior Helper online safety education modules" },
  { title: "Module Overview", light: "09 module view.png", dark: "09 module-dark.png", alt: "Senior Helper education module overview" },
  { title: "Lesson", light: "10 lesson view.png", dark: "10 lesson-dark.png", alt: "Senior Helper online safety lesson" },
  { title: "Settings", light: "11 settings.png", dark: "11 settings-dark.png", alt: "Senior Helper account settings" },
];

function useScreenshotMode() {
  const context = useContext(ScreenshotModeContext);
  if (!context) {
    throw new Error("Senior Helper screenshot controls require SeniorHelperCaseStudy.");
  }
  return context;
}

function ScreenshotModeControls() {
  const { mode, setMode } = useScreenshotMode();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-[color:var(--fg)]">Screenshot appearance</span>
      <div role="group" aria-label="Screenshot appearance" className="inline-flex gap-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--panel)] p-1">
        {(["light", "dark"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            onClick={() => setMode(value)}
            className="min-h-11 rounded-lg px-4 py-2 text-sm font-semibold text-[color:var(--fg)] transition-colors hover:bg-[color:var(--panel-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] aria-pressed:bg-[color:var(--accent)] aria-pressed:text-[color:var(--bg)]"
          >
            {value === "light" ? "Light" : "Dark"}
          </button>
        ))}
      </div>
    </div>
  );
}

type SeniorHelperCaseStudyProps = Omit<
  ComponentProps<typeof ProjectCaseStudyLayout>,
  "imageSrc" | "imageAlt"
>;

export default function SeniorHelperCaseStudy(props: SeniorHelperCaseStudyProps) {
  const [mode, setMode] = useState<ScreenshotMode>("light");
  const landing = screenshots[0];

  return (
    <ScreenshotModeContext.Provider value={{ mode, setMode }}>
      <ProjectCaseStudyLayout
        {...props}
        imageSrc={`/projects/senior-helper/${landing.light}`}
        imageAlt={`${landing.alt} in light mode`}
      />
    </ScreenshotModeContext.Provider>
  );
}

export function SeniorHelperScreenshots() {
  const { mode } = useScreenshotMode();

  return (
    <div>
      <ScreenshotModeControls />
      <ScreenshotGallery
        items={screenshots.map((screenshot) => ({
          title: `${screenshot.title}: ${mode === "light" ? "Light" : "Dark"} Mode`,
          src: `/projects/senior-helper/${screenshot[mode]}`,
          alt: `${screenshot.alt} in ${mode} mode`,
        }))}
      />
    </div>
  );
}
