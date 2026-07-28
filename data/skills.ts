export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "REST API",
      "Authentication",
      "SQL",
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      "Linux",
      "Networking",
      "Security Risks",
      "Threat Analysis",
      "SQL",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
    ],
  },
];