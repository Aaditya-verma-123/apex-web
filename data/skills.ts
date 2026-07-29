import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
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
    icon: Server,
    skills: [
      "Node.js",
      "REST APIs",
      "Authentication",
      "SQL",
      "JSON",
    ],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: [
      "Linux",
      "Networking",
      "Security Risks",
      "Threat Detection",
      "Risk Assessment",
      "SQL",
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
    ],
  },
];