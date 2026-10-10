import { ArrowDownRight, ArrowUpRight, ArrowUpRightFromSquare, Github, Linkedin, Mail, MapPin, MoveUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { experience, profile, projects, skills } from "@/data/portfolio";

function SectionHeading({ eyebrow, title, number }: { eyebrow: string; title: string; number: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{number} / {eyebrow}</span><h2>{title}</h2></div><span className="heading-rule" aria-hidden="true" /></div>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main">
      <section className="hero section-shell" id="home">
        <div className="hero-copy reveal">
          <div className="availability"><span className="status-dot" /> SOFTWARE ENGINEER <span className="availability-divider">·</span> INDIA</div>
          <h1>Building systems<br />that <span className="serif-accent">move</span> things<br /><span className="muted-line">forward.</span></h1>
          <p className="hero-intro">I’m Shailesh — an engineer working at the intersection of backend systems, developer experience, and practical product thinking.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={16} /></a><a className="text-link" href="#contact">Let’s talk <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of connected systems" role="img">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="art-center"><span>SK</span><i /></div>
          <div className="orbit-node node-one"><span className="node-symbol">⌘</span><small>BUILD</small></div>
          <div className="orbit-node node-two"><span className="node-symbol">⌁</span><small>SCALE</small></div>
          <div className="orbit-node node-three"><span className="node-symbol">✳</span><small>SHIP</small></div>
          <div className="art-label label-top">SYSTEMS / 01</div><div className="art-label label-bottom">THOUGHTFUL BY DESIGN</div>
          <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
        </div>
        <div className="hero-bottom"><span>01 — A little about me</span><a href="#about" aria-label="Scroll to About section"><ArrowDownRight size={18} /></a><span>SCROLL TO EXPLORE</span></div>
      </section>

      <section className="section-shell about-section" id="about">
        <SectionHeading number="01" eyebrow="ABOUT" title="Curiosity, built into the work." />
        <div className="about-grid"><div className="about-lead"><p>I’m a software engineer at <span className="inline-highlight">JPMorgan Chase</span>, where I work on backend services, operational tooling, and release workflows.</p><p className="muted-copy">I enjoy understanding how systems behave under real constraints — then making them more observable, dependable, and easier to use. Outside of work, I’m exploring distributed systems, system design, and AI products while preparing for my next engineering challenge.</p><a className="arrow-link" href="#experience">A bit of my journey <MoveUpRight size={15} /></a></div><div className="about-aside"><div className="aside-index">CURRENTLY INTERESTED IN</div><div className="interest-list"><span>Backend engineering</span><span>Distributed systems</span><span>System design</span><span>AI products</span></div><div className="education-note"><span>EDUCATION</span><p>B.Tech, Computer Science & Engineering<br />Chandigarh Engineering College · 2024</p></div></div></div>
        <div className="skills-grid">{skills.map((item, i) => <div className="skill-group" key={item.group}><div className="skill-number">0{i + 1}</div><h3>{item.group}</h3><div className="skill-chips">{item.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
      </section>

      <section className="section-shell experience-section" id="experience">
        <SectionHeading number="02" eyebrow="EXPERIENCE" title="Making the machinery work better." />
        <div className="experience-list">{experience.map((item, i) => <article className="experience-item" key={item.role}><div className="experience-timeline"><span className="timeline-dot" />{i < experience.length - 1 && <span className="timeline-line" />}</div><div className="experience-main"><div className="experience-meta"><span>{item.period}</span><span>{item.location}</span></div><h3>{item.role}</h3><div className="experience-company">{item.company}</div><ul>{item.description.map((line) => <li key={line}>{line}</li>)}</ul><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="section-shell projects-section" id="projects">
        <SectionHeading number="03" eyebrow="SELECTED WORK" title="Useful things, made with care." />
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className={`project-visual visual-${project.number}`}><span className="project-number">PROJECT / {project.number}</span><div className="project-glyph">{project.mark}</div><span className="project-context">{project.context}</span></div><div className="project-content"><div className="project-title-row"><div><h3>{project.name}</h3><span className="project-subtitle">{project.context}</span></div><span className="project-arrow" aria-hidden="true"><ArrowUpRightFromSquare size={16} /></span></div><p>{project.description}</p><ul>{project.details.map((d) => <li key={d}>{d}</li>)}</ul><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="writing-section" id="writing"><div className="section-shell"><SectionHeading number="04" eyebrow="TECHNICAL WRITING" title="Notes from the learning curve." /><div className="writing-placeholder"><div className="writing-icon">✳</div><div><span className="eyebrow">IN PROGRESS</span><h3>Ideas are taking shape.</h3><p>I’m working on a few notes about backend systems, engineering practices, and what I’m learning along the way. Check back soon.</p></div><span className="writing-count">01—04</span></div></div></section>

      <section className="section-shell contact-section" id="contact"><SectionHeading number="05" eyebrow="CONTACT" title="Good work starts with a conversation." /><div className="contact-grid"><div><p className="contact-intro">Interested in building something thoughtful, or just want to talk engineering? My inbox is open.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={18} /></a><div className="contact-location"><MapPin size={15} /> Based in India · Open to SDE2 opportunities</div></div><div className="social-stack"><a href={profile.github} aria-label="GitHub profile placeholder" className="social-link"><Github size={18} /><span>GitHub</span><span className="social-hint">Replace with your profile URL</span><ArrowUpRight size={15} /></a><a href={profile.linkedin} aria-label="LinkedIn profile placeholder" className="social-link"><Linkedin size={18} /><span>LinkedIn</span><span className="social-hint">Replace with your profile URL</span><ArrowUpRight size={15} /></a><a href={`mailto:${profile.email}`} className="social-link"><Mail size={18} /><span>Email</span><span className="social-hint">Say hello</span><ArrowUpRight size={15} /></a></div></div></section>
    </main>
    <footer className="site-footer"><div className="section-shell footer-inner"><a href="#home" className="wordmark"><span className="wordmark-mark">S</span><span>shailesh<span className="wordmark-dot">.</span></span></a><span>Thoughtfully engineered. © {new Date().getFullYear()} Shailesh Kumar</span><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer>
  </>;
}
