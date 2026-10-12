import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectLink } from "@/data/projects";

export function ProjectLinks({ links }: { links: ProjectLink[] }) {
  const configured = links.filter((link) => link.href);
  if (!configured.length) return <p className="project-links-note"><Github size={14} /> No public repository or demo link was provided for this project.</p>;
  return <div className="project-actions">{configured.map((link) => <a key={link.label} className="text-link" href={link.href!} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={14} /></a>)}</div>;
}
