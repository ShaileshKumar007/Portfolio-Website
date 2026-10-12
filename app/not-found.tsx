import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return <main id="main" className="page-main not-found-page"><div className="page-width"><span className="page-kicker">404 / ROUTE NOT FOUND</span><h1 className="page-title">This page went <span>off route.</span></h1><p className="page-description">The address may have changed, or the page may not exist.</p><div className="not-found-actions"><Link className="text-link" href="/"><ArrowLeft size={14}/> Back home</Link><Link className="text-link" href="/projects">Browse projects <ArrowUpRight size={14}/></Link></div></div></main>;
}
