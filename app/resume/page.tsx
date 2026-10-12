import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Résumé", description: "View or download Shailesh Kumar’s résumé." };

export default function ResumePage() {
  return <main id="main" className="page-main resume-page"><a className="skip-link" href="#main">Skip to content</a><div className="page-width"><Link className="back-link" href="/"><ArrowLeft size={14}/> Home</Link><div className="resume-heading"><div><span className="page-kicker">DOCUMENT / PDF</span><h1 className="page-title">Résumé</h1></div><a className="button-primary" href={siteConfig.resumePath} download={siteConfig.resumeFilename}><ArrowDownToLine size={15}/> Download PDF</a></div><div className="resume-frame"><iframe title="Shailesh Kumar résumé PDF" src={`${siteConfig.resumePath}#view=FitH`}><p>Your browser cannot display the PDF inline. <a href={siteConfig.resumePath}>Download the résumé</a>.</p></iframe></div></div></main>;
}
