export type ProjectCategory = "professional" | "hackathon" | "personal";
export type ProjectLink = { label: string; href: string | null };
export type CaseStudySection = { heading: string; paragraphs?: string[]; bullets?: string[]; status?: "verified" | "details-needed" };

export type PortfolioProject = {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  role?: string;
  period?: string;
  featured: boolean;
  status: "verified" | "details-needed";
  stack: string[];
  previewTheme: "cyan" | "violet" | "green" | "blue";
  links: ProjectLink[];
  caseStudy: CaseStudySection[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "employee-rewards-application",
    number: "01",
    title: "Employee Rewards Application",
    category: "hackathon",
    categoryLabel: "Internal hackathon · JPMorgan Chase",
    summary: "A rewards platform with a Spring Boot backend, React frontend, and automated deployment and quality checks.",
    role: "Hackathon project contributor",
    featured: true,
    status: "verified",
    stack: ["Spring Boot", "React", "MySQL", "Jenkins"],
    previewTheme: "violet",
    links: [{ label: "Source code", href: null }, { label: "Live demo", href: null }],
    caseStudy: [
      { heading: "Overview", status: "verified", paragraphs: ["Developed an employee rewards platform using Spring Boot, React, and MySQL. The project used JWT-secured REST APIs and an automated quality and deployment pipeline."] },
      { heading: "Engineering details", status: "verified", bullets: ["JWT authentication for API access.", "Automated deployment through Jenkins and Gaia Cloud.", "SonarQube quality checks and 80%+ automated test coverage."] },
      { heading: "Architecture & contribution", status: "details-needed", paragraphs: ["Add your specific service boundaries, data model, individual contribution, and any lessons you want to share."] },
    ],
  },
  {
    slug: "learning-management-portal",
    number: "02",
    title: "Learning Management Portal",
    category: "hackathon",
    categoryLabel: "Code for Good · Hackathon",
    summary: "A MERN learning platform with role-based experiences for administrators, teachers, and students.",
    role: "Hackathon project contributor",
    period: "24-hour hackathon",
    featured: true,
    status: "verified",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    previewTheme: "green",
    links: [{ label: "Source code", href: null }, { label: "Live demo", href: null }],
    caseStudy: [
      { heading: "Overview", status: "verified", paragraphs: ["Built a centralized Learning Management System in a 24-hour hackathon, with JWT authentication, role-based access, personalized dashboards, and secure course enrollment."] },
      { heading: "Included workflows", status: "verified", bullets: ["Course enrollment and curriculum resources.", "Discussion forums and assignment management.", "Live meeting integration for learning sessions."] },
      { heading: "Problem & outcomes", status: "details-needed", paragraphs: ["Add the partner problem statement, your specific contribution, and verified outcomes when you are ready to share them."] },
    ],
  },
  {
    slug: "face-recognition-attendance-system",
    number: "03",
    title: "Face Recognition Attendance System",
    category: "personal",
    categoryLabel: "Personal project · Details to complete",
    summary: "A Python project entry. Add the problem statement and implementation details before presenting it as a completed case study.",
    featured: false,
    status: "details-needed",
    stack: ["Python"],
    previewTheme: "blue",
    links: [{ label: "Source code", href: null }, { label: "Live demo", href: null }],
    caseStudy: [
      { heading: "Project details needed", status: "details-needed", paragraphs: ["Add the project context, libraries and techniques used, your role, privacy considerations, and any verified results. No implementation claims are made here until you provide those details."] },
    ],
  },
];

