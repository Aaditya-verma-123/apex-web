export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  published: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-apex-web",
    title: "Building APEX WEB",
    excerpt:
      "How I am building my personal developer portfolio with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    content: [
      "APEX WEB started as an idea for a personal portfolio and gradually evolved into a complete project showcasing my development journey.",
      "The project uses Next.js with TypeScript and a reusable component architecture. I wanted the site to be more than a collection of static pages, so I built dedicated systems for projects, certificates, my journey, skills, resume, and dashboard.",
      "A major focus has been creating a consistent visual language across the site. Tailwind CSS handles the interface styling while Framer Motion provides animations and interactions.",
      "Building APEX WEB has also taught me the importance of maintaining a scalable project structure. Reusable components make it much easier to improve one part of the site without breaking everything else.",
      "The project is still evolving, and I am continuing to improve its performance, accessibility, content, and overall user experience.",
    ],
    category: "Development",
    published: "August 2026",
    readTime: "5 min read",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    featured: true,
  },

  {
    slug: "cybersecurity-learning-journey",
    title: "My Cybersecurity Learning Journey",
    excerpt:
      "What I am learning while building a foundation in cybersecurity through hands-on study and practical projects.",
    content: [
      "My cybersecurity journey began with the goal of understanding how modern systems are protected and how security professionals identify and respond to threats.",
      "The Google Cybersecurity Professional Certificate has helped me build foundations across security concepts, Linux, SQL, networking, risk assessment, vulnerabilities, and security operations.",
      "One of the most interesting parts of the journey has been learning how different areas connect. Networking knowledge helps explain attacks, Linux provides practical system experience, and SQL becomes useful when investigating structured security data.",
      "I am also becoming more interested in detection and response, including SIEM investigations, network packet analysis, and intrusion detection.",
      "I see cybersecurity as a long-term learning path. My goal is to keep combining security knowledge with software development and eventually explore the intersection of cybersecurity and artificial intelligence.",
    ],
    category: "Cybersecurity",
    published: "August 2026",
    readTime: "5 min read",
    tags: [
      "Cybersecurity",
      "Linux",
      "Networking",
      "SIEM",
      "Security Operations",
    ],
    featured: false,
  },

  {
    slug: "from-projects-to-production",
    title: "From Projects to Production",
    excerpt:
      "Lessons I have learned while moving from small development projects toward more structured, production-ready applications.",
    content: [
      "My earliest projects helped me understand the basics of building applications. Projects such as a chat application and a news website gave me practical experience with frontend development, APIs, backend concepts, and user interfaces.",
      "As projects became more complex, I started paying more attention to architecture instead of only making individual features work.",
      "APEX WEB has been an important step in that transition. It uses reusable components, structured data files, dynamic routes, responsive layouts, animations, and production builds.",
      "One of the biggest lessons has been that building a project is only one part of development. Testing routes, checking production builds, fixing TypeScript errors, optimizing assets, and maintaining consistent components are equally important.",
      "I want each new project to teach me something that I can apply to the next one. That mindset is helping me move from simply writing code toward building complete software systems.",
    ],
    category: "Development",
    published: "August 2026",
    readTime: "4 min read",
    tags: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Projects",
    ],
    featured: false,
  },
];