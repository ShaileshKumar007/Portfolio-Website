export type SkillGroup = { name: string; skills: string[]; note?: string };

// Grouped by experience areas; no proficiency ratings are implied.
export const skillGroups: SkillGroup[] = [
  { name: "Languages", skills: ["Java", "JavaScript", "C++", "Python", "SQL"] },
  { name: "Frontend", skills: ["React", "HTML", "CSS"] },
  { name: "Backend", skills: ["Spring Boot", "Node.js", "Express", "REST APIs"] },
  { name: "Data & systems", skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"] },
  { name: "Infrastructure & tools", skills: ["Jenkins", "Docker", "Git", "Linux"] },
  { name: "Core concepts", skills: ["Data structures", "OOP", "System design", "Distributed systems"], note: "Currently exploring" },
  { name: "AI", skills: ["AI products", "Applied AI exploration"], note: "Interest area; hands-on experience to add" },
];
