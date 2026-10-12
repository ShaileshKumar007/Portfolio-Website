export type ExperienceMilestone = {
  id: string;
  company: string;
  role: string;
  period: string;
  category: "career" | "internship";
  summary: string;
  responsibilities: string[];
  technologies: string[];
};

// Ordered chronologically so the Experience route can draw a forward journey.
export const experience: ExperienceMilestone[] = [
  {
    id: "jpmc-frontend-intern",
    company: "JPMorgan Chase & Co.",
    role: "Software Development Engineer Summer Intern · Frontend",
    period: "Jun 2023 — Aug 2023",
    category: "internship",
    summary: "Contributed to an internal application redesign and built responsive frontend features.",
    responsibilities: [
      "Redesigned React UI components and refactored legacy code into reusable modules across 10+ components.",
      "Built responsive features to streamline workflows for internal stakeholders.",
    ],
    technologies: ["React", "JavaScript", "Jenkins", "CI/CD"],
  },
  {
    id: "jpmc-backend-intern",
    company: "JPMorgan Chase & Co.",
    role: "Software Development Engineer Intern · Backend",
    period: "Jan 2024 — Jun 2024",
    category: "internship",
    summary: "Improved deployment pipelines and production debugging workflows.",
    responsibilities: [
      "Standardized Jenkins pipeline stages and structured logging, reducing deployment failures by 10%.",
      "Introduced component-level status codes in the error logging framework, reducing debugging time by 20%.",
    ],
    technologies: ["Java", "Jenkins", "Logging", "CI/CD"],
  },
  {
    id: "jpmc-sde1",
    company: "JPMorgan Chase & Co.",
    role: "Software Development Engineer I · Backend Developer",
    period: "Jul 2024 — Present",
    category: "career",
    summary: "Working on backend engineering, internal operational tooling, and release reliability.",
    responsibilities: [
      "Automated production deployments for 29+ applications, reducing end-to-end deployment time from 48 hours to 6 hours through a single-click release workflow.",
      "Built a centralized ServiceNow health-check portal spanning 14 instances, 380 applications, 250+ MID servers, and 1,150+ scheduled jobs.",
      "Automated checks for endpoint availability, MID health, job failures, and credential drift.",
      "Implemented release readiness and SDLC health gates, helping reduce change failure rate from 40% to 15%.",
    ],
    technologies: ["Java", "ServiceNow", "Spring Boot", "JavaScript", "React"],
  },
];
