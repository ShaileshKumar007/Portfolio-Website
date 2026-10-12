"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, ChevronDown, MapPinned } from "lucide-react";
import Link from "next/link";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/motion/Reveal";

export function ExperienceJourney() {
  const routeRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: routeRef, offset: ["start 78%", "end 45%"] });
  const routeLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return <>
    <section className="journey-intro page-width">
      <Reveal><span className="page-kicker"><MapPinned size={14} /> PROFESSIONAL ROUTE / 2023—NOW</span><h1 className="page-title">A route through<br /><em>the work.</em></h1><p className="page-description">Three milestones at one company, moving from frontend work toward backend engineering, release reliability, and operational tooling. The route marks career steps, not physical locations.</p></Reveal>
      <a className="journey-down" href="#route-start" aria-label="Scroll to career journey"><ArrowDown size={16} /></a>
    </section>

    <section className="journey-section page-width" id="route-start" ref={routeRef} aria-label="Career journey">
      <div className="journey-map" aria-hidden="true">
        <svg viewBox="0 0 120 1200" preserveAspectRatio="none">
          <path className="journey-path-base" d="M60 0 C60 92 28 122 28 205 S94 295 94 390 S28 505 28 600 S93 690 93 785 S26 900 26 1000 S60 1090 60 1200" />
          <motion.path className="journey-path-progress" d="M60 0 C60 92 28 122 28 205 S94 295 94 390 S28 505 28 600 S93 690 93 785 S26 900 26 1000 S60 1090 60 1200" style={{ pathLength: routeLength }} />
        </svg>
      </div>
      <div className="journey-stations">
        {experience.map((stop, index) => <motion.article className={`journey-station journey-station-${index + 1}`} key={stop.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55, delay: 0.04 }}>
          <span className="station-marker"><span>{String(index + 1).padStart(2, "0")}</span></span>
          <div className="station-card">
            <div className="station-topline"><span className="station-type">{stop.category === "career" ? "CURRENT ROLE" : "INTERNSHIP"}</span><time>{stop.period}</time></div>
            <details className="station-details" open={stop.category === "career"}>
              <summary><span><strong>{stop.role}</strong><small>{stop.company}</small></span><ChevronDown className="station-chevron" size={17} /></summary>
              <div className="station-expanded"><p>{stop.summary}</p><ul>{stop.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul><div className="tag-list">{stop.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              </div>
            </details>
          </div>
        </motion.article>)}
      </div>
      <div className="journey-end"><span className="journey-end-dot" /><span>CONTINUING TO LEARN / SYSTEM DESIGN · DISTRIBUTED SYSTEMS · AI</span></div>
    </section>

    <section className="journey-notes page-width">
      <Reveal><span className="page-kicker">WHAT CONNECTS THE STOPS</span><h2>From interface details<br />to <em>system reliability.</em></h2><p>The focus has shifted over time, but the question stays similar: how can software be easier to use, understand, and operate?</p><Link className="text-link" href="/projects">See projects from the route <ArrowUpRight size={14} /></Link></Reveal>
    </section>
  </>;
}
