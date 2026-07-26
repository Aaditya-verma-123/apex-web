import {
  GraduationCap,
  ShieldCheck,
  Brain,
  Globe,
  Code2,
  Shield,
  Database,
  GitBranch,
} from "lucide-react";

export const ABOUT_CARDS = [
  {
    title: "Education",
    description: "IIT Madras BS Degree & Future B.Tech CSE",
    icon: GraduationCap,
  },
  {
    title: "Cybersecurity",
    description: "Google Cybersecurity Professional Certificate",
    icon: ShieldCheck,
  },
  {
    title: "AI & ML",
    description: "Building AI-powered applications and automation",
    icon: Brain,
  },
];

export const PROJECTS = [
  {
    title: "APEX OS",
    description:
      "A modern personal portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    image: "/projects/apex-os.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/Aaditya-verma-123/apex-os",
    live: "",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application with authentication and modern UI.",
    image: "/projects/chat-app.png",
    technologies: [
      "React",
      "Firebase",
      "Tailwind CSS",
    ],
    github: "https://github.com/Aadi1234321/aaditya",
    live: "",
  },
  {
    title: "News Website",
    description:
      "Responsive news website with category filtering and API integration.",
    image: "/projects/news-site.png",
    technologies: [
      "Next.js",
      "News API",
      "Tailwind CSS",
    ],
    github: "https://github.com/Aadi1234321/News-project",
    live: "",
  },
];

export const SKILLS = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Networking", "Linux", "Security Fundamentals"],
  },
  {
    title: "AI",
    icon: Brain,
    skills: ["Prompt Engineering", "OpenAI APIs", "Automation"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code"],
  },
];
export const CONTACT = {
  email: "aadityanokhwal5@gmail.com",
  github: "https://github.com/Aaditya-verma-123",
  linkedin: "https://linkedin.com/in/aaditya-verma-985117317",
  instagram: "https://instagram.com/___aaditya_verma___",
  discord: "aadityaverma0373",
};