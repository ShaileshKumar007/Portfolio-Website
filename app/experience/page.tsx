import type { Metadata } from "next";
import { ExperienceJourney } from "@/components/experience/ExperienceJourney";

export const metadata: Metadata = {
  title: "Experience",
  description: "Shailesh Kumar's career journey at JPMorgan Chase, from frontend internship work to backend engineering and release reliability.",
};

export default function ExperiencePage() {
  return <main id="main" className="page-main experience-page"><a className="skip-link" href="#main">Skip to content</a><ExperienceJourney /></main>;
}
