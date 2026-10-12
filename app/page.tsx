import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, ArrowUpRightFromSquare, Braces, Code2, MoveUpRight, Sparkles } from "lucide-react";
import { HeroArtwork } from "@/components/3d/HeroArtwork";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { getBlogPosts } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog-format";

function SectionLabel({ index, eyebrow, title, href, linkText, id }: { index: string; eyebrow: string; title: string; href?: string; linkText?: string; id?: string }) {
  return <div className="section-heading"><div><span className="section-overline">{index} / {eyebrow}</span><h2 id={id}>{title}</h2></div>{href && <Link className="text-link" href={href}>{linkText ?? "View all"}<ArrowUpRight size={14} /></Link>}</div>;
}

function ProjectArt({ project }: { project: (typeof projects)[number] }) {
  return <div className={`preview-art preview-${project.previewTheme}`} aria-hidden="true"><span className="preview-label">CASE FILE / {project.number}</span><div className="preview-geometry"><i /><i /><i /></div><span className="preview-symbol">{project.number}</span></div>;
}

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const posts = getBlogPosts().slice(0, 3);
  const milestones = experience;
  return <main id="main" className="home-page">
    <a className="skip-link" href="#main">Skip to content</a>
    <section className="home-hero page-width" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="hero-label"><span className="live-dot" /> SOFTWARE ENGINEER <span className="hero-label-slash">/</span> BACKEND & SYSTEMS</p>
        <h1 className="hero-title" id="home-title">Good software<br />depends on what<br /><span className="line-accent">you don’t see.</span></h1>
        <p className="hero-description">I’m {siteConfig.name}, an SDE I at JPMorgan Chase. I work on backend tooling, release workflows, and operational health—making the systems around software easier to trust.</p>
        <div className="hero-actions"><Link className="button-primary" href="/projects">Explore my work <ArrowRight size={15} /></Link><a className="button-secondary" href={siteConfig.resumePath} download={siteConfig.resumeFilename}>Download résumé <ArrowUpRight size={15} /></a></div>
        <p className="hero-current"><span className="live-dot" /> CURRENTLY EXPLORING <span>system design · distributed systems · AI products</span></p>
      </div>
      <div className="hero-art-wrap"><HeroArtwork /></div>
      <div className="hero-foot"><a href="#introduction">SCROLL TO EXPLORE <ArrowDown size={13} /></a></div>
    </section>

    <section className="intro-band" id="introduction"><div className="page-width intro-band-inner"><Reveal><span className="intro-band-label">A NOTE ON HOW I WORK</span></Reveal><Reveal delay={0.08}><h2>Curiosity frames the question.<br /><span>Engineering makes the answer useful.</span></h2><p>I’m drawn to the hidden work that makes products dependable: good signals, repeatable processes, and thoughtful systems.</p></Reveal></div></section>

    <section className="page-width section-block home-projects" aria-labelledby="featured-title">
      <SectionLabel index="01" eyebrow="SELECTED WORK" title="Built for real workflows." href="/projects" linkText="All projects" />
      <div className="project-preview-grid">{featuredProjects.map((project, index) => <Reveal key={project.slug} delay={index * 0.07} className={`project-preview project-preview-${index + 1}`}>
        <Link href={`/projects/${project.slug}`} className="project-preview-link" aria-label={`Read case study: ${project.title}`}>
          <ProjectArt project={project} />
          <span className="preview-type">{project.categoryLabel}</span>
          <div className="preview-title-row"><h3 className="preview-title">{project.title}</h3><ArrowUpRightFromSquare size={16} /></div>
          <p className="preview-description">{project.summary}</p>
          <div className="preview-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </Link>
      </Reveal>)}</div>
    </section>

    <section className="home-experience" aria-labelledby="experience-preview-title"><div className="page-width">
      <SectionLabel index="02" eyebrow="PROFESSIONAL JOURNEY" title="A few milestones so far." id="experience-preview-title" href="/experience" linkText="Follow the route" />
      <div className="journey-preview">{milestones.map((item, index) => <Reveal className="journey-stop" key={item.id} delay={index * 0.08}><span className="journey-node">0{index + 1}</span><time>{item.period}</time><h3>{item.role.split(" · ")[0]}</h3><p>{item.company}</p></Reveal>)}</div>
      <p className="journey-caption"><span>ONE COMPANY / THREE DISTINCT MILESTONES</span><Link href="/experience">Explore the full journey <ArrowRight size={13} /></Link></p>
    </div></section>

    <section className="page-width section-block home-skills" aria-labelledby="skills-title">
      <SectionLabel index="03" eyebrow="TOOLKIT & CURIOSITY" title="What I use, what I’m learning." id="skills-title" />
      <div className="skills-constellation">{skillGroups.map((group, index) => <Reveal key={group.name} delay={(index % 3) * 0.04} className="skill-cluster"><div className="skill-cluster-head"><span className="skill-cluster-index">0{index + 1}</span>{index === 0 ? <Code2 size={15} /> : index === 1 ? <Braces size={15} /> : <Sparkles size={15} />}</div><h3>{group.name}</h3><p>{group.skills.join(" · ")}</p>{group.note && <small>{group.note}</small>}</Reveal>)}</div>
      <p className="skills-note">Skills are grouped by area, not ranked by proficiency. AI and distributed systems are current learning interests.</p>
    </section>

    <section className="home-writing" aria-labelledby="writing-title"><div className="page-width">
      <SectionLabel index="04" eyebrow="LATEST WRITING" title="Notes from the work and the learning." id="writing-title" href="/blogs" linkText="Visit the blog" />
      <div className="writing-preview-list">{posts.map((post, index) => <Reveal className="writing-preview" key={post.slug} delay={index * 0.05}><span className="writing-preview-index">0{index + 1} / {post.category}</span><Link href={`/blogs/${post.slug}`}><h3>{post.title}</h3><p>{formatPostDate(post.date)} <span>·</span> {post.readingMinutes} min read</p></Link><span className="demo-tag">{post.demo ? "Demo article" : "Article"}</span></Reveal>)}</div>
    </div></section>

    <section className="page-width home-contact"><Reveal><span className="section-overline">05 / CONTACT</span><h2>Have an interesting problem<br />to solve? <em>Let’s talk.</em></h2><a className="button-primary" href={`mailto:${siteConfig.email}`}>Contact me <MoveUpRight size={15} /></a><p>{siteConfig.email}</p></Reveal></section>
  </main>;
}
