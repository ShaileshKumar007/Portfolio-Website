import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/layout/SocialIcon";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top page-width">
      <Link href="/" className="footer-mark" aria-label="Back to home">{siteConfig.monogram}<span>.</span></Link>
      <p>Built with curiosity.<br /><span>Designed to stay useful.</span></p>
      <a className="back-top" href="#top">Back to top <ArrowUp size={14} /></a>
    </div>
    <div className="footer-bottom page-width">
      <span>© {new Date().getFullYear()} {siteConfig.name}</span>
      <nav className="footer-socials" aria-label="Social profiles">{siteConfig.socials.filter((social) => Boolean(social.href)).map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.name} (opens in a new tab)`}><SocialIcon name={social.name}/></a>)}</nav>
    </div>
  </footer>;
}
