import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronRight, CircleDot, Layers3 } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary, openGraph: { title: `${project.title} — Case Study`, description: project.summary, type: "article" } };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main id="main" className="page-main case-study-page">
    <a className="skip-link" href="#main">Skip to content</a>
    <section className="case-hero page-width"><Reveal><Link className="back-link" href="/projects"><ArrowLeft size={14} /> All projects</Link><div className="case-hero-grid"><div><span className="page-kicker"><Layers3 size={14} /> {project.categoryLabel}</span><h1 className="page-title">{project.title}</h1><p className="page-description">{project.summary}</p><div className="case-facts"><div><span>MY ROLE</span><strong>{project.role ?? "Project contributor"}</strong></div>{project.period && <div><span>PERIOD</span><strong>{project.period}</strong></div>}</div></div><ProjectArtwork project={project} /></div></Reveal></section>
    <section className="page-width case-content-layout"><aside className="case-sidebar"><span className="case-sidebar-title">IN THIS CASE FILE</span>{project.caseStudy.map((section, index) => <a key={section.heading} href={`#case-section-${index}`}>{section.heading}<ChevronRight size={12} /></a>)}<div className="case-sidebar-stack"><span>TECHNOLOGIES</span><div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div><ProjectLinks links={project.links} /></aside><article className="case-article">
      {project.caseStudy.map((section, index) => <Reveal key={section.heading} id={`case-section-${index}`} className="case-section"><span className="case-section-index">0{index + 1} / {section.status === "details-needed" ? "NEEDS YOUR INPUT" : "CASE NOTES"}</span><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</Reveal>)}
      {project.status === "details-needed" && <p className="case-honesty-note"><CircleDot size={14} /> This entry is a starting point. Add verified details before treating it as a complete project case study.</p>}
    </article></section>
    <section className="page-width case-next"><Link className="text-link" href="/projects"><ArrowLeft size={14} /> Return to project index</Link><Link className="text-link" href="/contact">Discuss a similar problem <ArrowUpRight size={14} /></Link></section>
  </main>;
}
