"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";
import { ProjectLinks } from "@/components/projects/ProjectLinks";

export function ProjectBrowser() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => projects.filter((project) => {
    const text = `${project.title} ${project.summary} ${project.categoryLabel} ${project.stack.join(" ")}`.toLowerCase();
    return text.includes(query.trim().toLowerCase());
  }), [query]);

  return <div className="project-browser">
    <div className="project-browser-controls">
      <label className="project-search"><Search size={15} /><span className="sr-only">Search projects</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search work or technology" /></label>
    </div>
    <p className="results-count" aria-live="polite">{results.length} {results.length === 1 ? "project" : "projects"}</p>
    {results.length ? <div className="project-browser-grid">{results.map((project) => <article className="project-browser-card" key={project.slug}>
      <Link className="project-browser-art-link" href={`/projects/${project.slug}`} aria-label={`Open case study: ${project.title}`}><ProjectArtwork project={project} /></Link>
      <div className="project-browser-copy"><div className="project-card-meta"><span>{project.number} / {project.categoryLabel}</span>{project.status === "details-needed" && <span className="content-status">ENTRY TO COMPLETE</span>}</div><h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.summary}</p><div className="project-stack">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-card-bottom"><Link className="text-link" href={`/projects/${project.slug}`}>Read case study <span aria-hidden="true">→</span></Link><ProjectLinks links={project.links} /></div></div>
    </article>)}</div> : <div className="empty-state"><span>NO MATCHES / 00</span><h2>No projects match that search.</h2><p>Try another search term.</p><button type="button" className="text-link" onClick={() => setQuery("")}>Clear search</button></div>}
  </div>;
}
