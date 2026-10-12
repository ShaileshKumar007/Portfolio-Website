import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Code2, GitBranch, Layers3, Server } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = { title: "About", description: "About Shailesh Kumar, Software Development Engineer I at JPMorgan Chase India." };

const icons = [<Server key="server"/>, <Code2 key="code"/>, <Layers3 key="layers"/>];

export default function AboutPage() {
  return <main id="main" className="page-main about-page"><a className="skip-link" href="#main">Skip to content</a>
    <header className="page-width about-hero"><Reveal><span className="page-kicker">ABOUT / ENGINEERING NOTES</span><h1 className="page-title">I build software that makes <span>complex work clearer.</span></h1><p className="page-description">I’m Shailesh, a Software Development Engineer I at JPMorgan Chase India. My current work spans backend services, release reliability, and operational tooling.</p><div className="about-actions"><Link className="button-primary" href={siteConfig.resumePath} download={siteConfig.resumeFilename}><ArrowDownToLine size={15}/> Download résumé</Link><Link className="text-link" href="/contact">Get in touch <ArrowUpRight size={14}/></Link></div></Reveal></header>
    <section className="page-width about-grid"><Reveal className="about-note"><span className="about-label">01 / HOW I WORK</span><h2>Build the useful path from problem to operation.</h2><p>I enjoy understanding how a system behaves after it ships: what it depends on, how a failure appears, and what information helps someone respond. That interest draws me toward backend engineering, distributed systems, and system design.</p><p>I’m also exploring AI products and building personal projects while preparing for SDE2 opportunities.</p></Reveal><Reveal className="about-principles"><span className="about-label">02 / WORKING PRINCIPLES</span>{["Make the system’s state visible.", "Keep the next action understandable.", "Prefer sound foundations over cleverness.", "Learn from the operational edge cases."].map((item, i) => <div key={item}><span>0{i+1}</span><p>{item}</p></div>)}</Reveal></section>
    <section className="about-focus"><div className="page-width"><div className="section-heading"><div><span className="section-kicker">CURRENT TOOLKIT</span><h2>Tools I work with</h2></div><p>A snapshot of technologies from my experience and current learning.</p></div><div className="about-skill-grid">{skillGroups.map((group, index) => <Reveal key={group.name} className="about-skill"><span className="about-skill-icon">{icons[index % icons.length]}</span><h3>{group.name}</h3><p>{group.skills.join(" · ")}</p>{group.note && <small>{group.note}</small>}</Reveal>)}</div></div></section>
    <section className="page-width about-next"><span className="page-kicker"><GitBranch size={14}/> CURRENT DIRECTION</span><p>Going deeper on backend design, distributed systems, and the foundations behind reliable products.</p><Link className="text-link" href="/experience">Explore my experience <ArrowUpRight size={14}/></Link></section>
  </main>;
}
