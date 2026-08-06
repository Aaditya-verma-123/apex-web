export interface Project {
  id: number;
  slug: string;

  title: string;
  shortDescription: string;
  longDescription: string;

  image: string;
  gallery: string[];

  technologies: string[];

  features: string[];

  challenges: string[];

  lessons: string[];

  status: "Completed" | "In Progress" | "Ongoing";

  github: string;
  live?: string;

  started: string;
  category: string;
  components: number;
  certificates: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "apex-web",

    title: "APEX WEB",

    shortDescription:
      "A premium developer portfolio built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.",

    longDescription:
      "APEX WEB is my flagship personal portfolio project built to showcase my skills, projects, certifications, and technical journey. It focuses on premium UI design, reusable architecture, responsive layouts, smooth animations, and a modern user experience while following scalable development practices.",

    image: "/images/projects/apex-web/cover.webp",

    gallery: [
      "/images/projects/apex-web/1.webp",
      "/images/projects/apex-web/2.webp",
      "/images/projects/apex-web/3.webp",
    ],

    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],

    features: [
      "Modern responsive portfolio",
      "Premium UI components",
      "Interactive certificate system",
      "Journey timeline",
      "Resume system",
      "Dashboard",
      "Contact inquiry form",
    ],

    challenges: [
      "Creating reusable UI components.",
      "Maintaining scalable project architecture.",
      "Designing responsive layouts across devices.",
      "Optimizing animations without affecting performance.",
    ],

    lessons: [
      "Improved React component architecture.",
      "Learned scalable Next.js project structure.",
      "Built reusable UI systems.",
      "Enhanced TypeScript proficiency.",
    ],

    status: "In Progress",

    github: "https://github.com/Aaditya-verma-123/apex-web",

    live: "https://apex-os-lime.vercel.app",
    started: "July 2026",
category: "Portfolio",
components: 40,
certificates: 5,
featured: true,
  },

  {
    id: 2,
    slug: "chat-app",

    title: "Chat App",

    shortDescription:
      "A responsive real-time chat application built using Flask.",

    longDescription:
      "A lightweight chat application developed using Flask with HTML and CSS. The project helped me understand server-side rendering, routing, and user communication while building responsive interfaces.",

    image: "/images/projects/chat-app/cover.webp",

    gallery: [],

    technologies: [
      "Flask",
      "HTML",
      "CSS",
    ],

    features: [
      "Responsive interface",
      "Real-time messaging",
      "Simple authentication",
    ],

    challenges: [
      "Understanding Flask routing.",
      "Managing client-server communication.",
    ],

    lessons: [
      "Learned backend fundamentals.",
      "Improved Flask development skills.",
    ],

    status: "Completed",

    github: "https://github.com/Aadi1234321/chat-app",
    started: "2025",
category: "Web Application",
components: 12,
certificates: 0,
featured: false,
  },

  {
    id: 3,
    slug: "news-website",

    title: "News Website",

    shortDescription:
      "A categorized news platform powered by News API.",

    longDescription:
      "A responsive news website that fetches the latest articles using News API. The application organizes news into multiple categories while providing a clean reading experience.",

    image: "/images/projects/news/cover.webp",

    gallery: [],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "News API",
    ],

    features: [
      "Latest news",
      "Category filtering",
      "Responsive layout",
    ],

    challenges: [
      "Working with external APIs.",
      "Handling asynchronous requests.",
    ],

    lessons: [
      "Improved API integration skills.",
      "Learned asynchronous JavaScript.",
    ],

    status: "Completed",

    github: "https://github.com/Aadi1234321/News-project",
    started: "2025",
category: "API Project",
components: 15,
certificates: 0,
featured: false,
  },
];