import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import { ProjectBrowser } from "@/components/projects/ProjectBrowser";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected independent and hackathon projects by Shailesh Kumar.",
};

export default function ProjectsPage() {
  return <main id="main" className="page-main projects-page">
    <a className="skip-link" href="#main">Skip to content</a>
    <section className="page-hero page-width"><Reveal><span className="page-kicker"><FolderKanban size={14} /> PROJECT ARCHIVE / SELECTED WORK</span><h1 className="page-title">Work that solves<br /><em>real problems.</em></h1><p className="page-description">A selection of projects built beyond my company work. Missing public links and details that need to be filled in are clearly called out.</p></Reveal></section>
    <section className="page-width project-index-section"><ProjectBrowser /></section>
  </main>;
}
