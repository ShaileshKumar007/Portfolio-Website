export const profile = {
  name: "Shailesh Kumar",
  role: "Software Development Engineer",
  location: "India",
  email: "shailesh1429k@gmail.com",
  phone: "+91 75896 18612",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  github: "https://github.com/your-username",
  intro:
    "I build dependable software that makes complex workflows feel simple. My experience spans backend engineering, release automation, operational tooling, and thoughtful frontend systems.",
};

export const experience = [
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Development Engineer I · Backend Developer",
    period: "Jul 2024 — Present",
    location: "India",
    description: [
      "Automated production deployments for 29+ applications, reducing end-to-end deployment time from 48 hours to 6 hours through a single-click release workflow.",
      "Built a centralized ServiceNow health-check portal spanning 14 instances, 380 applications, 250+ MID servers, and 1,150+ scheduled jobs.",
      "Implemented release readiness and SDLC health gates, helping reduce change failure rate from 40% to 15%.",
    ],
    tags: ["Java", "ServiceNow", "Release Engineering", "Operations"],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Development Engineer Intern · Backend",
    period: "Jan 2024 — Jun 2024",
    location: "India",
    description: [
      "Standardized Jenkins pipeline stages and structured logging, reducing deployment failures by 10%.",
      "Introduced component-level status codes in the error logging framework, reducing debugging time by 20%.",
    ],
    tags: ["Jenkins", "Java", "Logging", "CI/CD"],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Development Engineer Summer Intern · Frontend",
    period: "Jun 2023 — Aug 2023",
    location: "India",
    description: [
      "Contributed to an internal application redesign in React, refactoring legacy code into reusable modules across 10+ components.",
      "Built responsive features to streamline workflows for internal stakeholders.",
    ],
    tags: ["React", "JavaScript", "Component Design"],
  },
];

export const projects = [
  {
    number: "01",
    name: "Learning Management Portal",
    context: "Code for Good Hackathon",
    description:
      "An end-to-end learning platform with role-based experiences for administrators, teachers, and students. Built for a 24-hour hackathon.",
    details: ["JWT authentication and role-based access", "Courses, assignments, forums, and learning resources", "Personalized dashboards and live meeting integration"],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    mark: "L",
  },
  {
    number: "02",
    name: "Employee Rewards Application",
    context: "JPMorgan Internal Hackathon",
    description:
      "A rewards platform pairing a Spring Boot API with a React interface and an automated quality and deployment pipeline.",
    details: ["REST APIs secured with JWT", "Automated deployment through Jenkins and Gaia Cloud", "SonarQube quality checks and 80%+ automated test coverage"],
    stack: ["Spring Boot", "React", "MySQL", "Jenkins"],
    mark: "R",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "C++", "Python", "SQL"] },
  { group: "Frameworks", items: ["Spring Boot", "React", "Node.js", "Express"] },
  { group: "Data & systems", items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "REST APIs"] },
  { group: "Tools", items: ["Git", "GitHub", "Jenkins", "Docker", "Linux"] },
];
