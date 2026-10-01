/**
 * Next.js route entry for /projects; this filename is required by the router.
 * Keeps browser metadata here and delegates the page design to AllProjectsView.
 */
import type { Metadata } from "next";
import AllProjectsView from "@/app/projects/AllProjectsView";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Browse all portfolio projects and builds.",
};

export default function ProjectsPage() {
  return <AllProjectsView />;
}
