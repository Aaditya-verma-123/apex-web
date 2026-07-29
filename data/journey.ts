import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Code2,
  FolderKanban,
  ShieldCheck,
  Globe,
  BookOpen,
  Rocket,
} from "lucide-react";

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: "completed" | "current" | "future";
}
export const journeyItems: JourneyItem[] = [
  {
    year: "2024",
    title: "Completed Secondary Education",
    description:
      "Completed Secondary (HBSE) with an overall score of 85.8%, building a strong academic foundation.",
    icon: GraduationCap,
    status: "completed",
  },
  {
    year: "2026",
    title: "Completed Senior Secondary (CBSE)",
    description:
      "Graduated from CBSE with 86.8%, specializing in Computer Science and strengthening my programming fundamentals.",
    icon: GraduationCap,
    status: "completed",
  },
  {
    year: "2026",
    title: "Started Web Development",
    description:
      "Began learning HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS, and modern frontend development through hands-on practice.",
    icon: BookOpen,
    status: "completed",
  },
  {
    year: "2026",
    title: "Built Real-World Projects",
    description:
      "Developed multiple projects including a responsive Chat Application, News Website, and my personal portfolio to improve practical development skills.",
    icon: FolderKanban,
    status: "completed",
  },
  {
    year: "2026",
    title: "Google Cybersecurity Certificate",
    description:
      "Currently completing the Google Cybersecurity Professional Certificate while learning Linux, SQL, networking, security risks, and vulnerability assessment.",
    icon: ShieldCheck,
    status: "current",
  },
  {
    year: "2026",
    title: "Building APEX WEB",
    description:
      "Designing and developing a premium portfolio using Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and reusable component architecture.",
    icon: Globe,
    status: "current",
  },
  {
    year: "2026",
    title: "IIT Madras BS Admission Process",
    description:
      "Currently in the admission process for the IIT Madras BS Degree while preparing for future engineering studies.",
    icon: GraduationCap,
    status: "current",
  },
  {
    year: "Future",
    title: "B.Tech in Computer Science Engineering",
    description:
      "Planning to pursue a B.Tech in Computer Science Engineering while continuing to build production-ready software and strengthen my technical expertise.",
    icon: Code2,
    status: "future",
  },
  {
    year: "Future",
    title: "Software Engineer • AI • Cybersecurity",
    description:
      "Aspire to build scalable software, work in artificial intelligence and cybersecurity, and contribute to impactful real-world technology.",
    icon: Rocket,
    status: "future",
  },
];