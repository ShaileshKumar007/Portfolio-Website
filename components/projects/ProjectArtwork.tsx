import type { PortfolioProject } from "@/data/projects";

export function ProjectArtwork({ project, compact = false }: { project: PortfolioProject; compact?: boolean }) {
  return <div className={`project-artwork project-art-${project.previewTheme}${compact ? " is-compact" : ""}`} aria-hidden="true">
    <span className="project-art-label">{project.categoryLabel}</span>
    <div className="project-art-orbit orbit-one"><i /></div><div className="project-art-orbit orbit-two"><i /></div>
    <div className="project-art-core"><span>{project.number}</span></div>
    <span className="project-art-caption">SYSTEM STUDY / {project.number}</span>
  </div>;
}
