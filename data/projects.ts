export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: "Completed" | "In Progress" | "Ongoing";
  github: string;
}

export const projects: Project[] = [
  {
    title: "APEX WEB",
    description:
      "A premium developer portfolio built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    status: "In Progress",
    github: "https://github.com/Aaditya-verma-123/apex-web",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application with a responsive interface and modern UI.",
    tech: ["React", "JavaScript", "CSS"],
    status: "Completed",
    github: "https://github.com/Aadi1234321/chat-app",
  },
  {
    title: "News Website",
    description:
      "A categorized news platform with a clean and responsive reading experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    github: "https://github.com/Aadi1234321/News-project",
  },
];