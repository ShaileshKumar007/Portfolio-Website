import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Shailesh Kumar about backend engineering, product, and collaboration." };

export default function ContactPage() {
  return <main id="main" className="page-main contact-page"><a className="skip-link" href="#main">Skip to content</a><header className="page-width contact-hero"><Reveal><span className="page-kicker">CONTACT / OPEN CHANNEL</span><h1 className="page-title">Let’s talk about <span>the problem.</span></h1><p className="page-description">For engineering conversations, project ideas, or opportunities, send a note using the form below.</p><div className="contact-facts"><span><Mail size={14}/> {siteConfig.email}</span><span><MapPin size={14}/> {siteConfig.location}</span></div><nav className="contact-socials" aria-label="Find me online">{siteConfig.socials.filter((social) => social.href).map((social) => <a href={social.href} key={social.name} target="_blank" rel="noreferrer"><SocialIcon name={social.name} size={16}/><span>{social.name}</span></a>)}</nav></Reveal></header><section className="page-width"><Reveal><ContactForm/></Reveal></section></main>;
}
