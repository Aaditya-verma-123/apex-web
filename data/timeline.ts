export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  status: "completed" | "current" | "future";
}

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Completed Class X",
    description:
      "Successfully completed secondary education and developed a strong interest in technology and programming.",
    status: "completed",
  },
  {
    year: "2026",
    title: "Completed Class XII (CBSE)",
    description:
      "Graduated with Computer Science while strengthening problem-solving and programming fundamentals.",
    status: "completed",
  },
  {
    year: "2026",
    title: "Started IIT Madras BS Degree",
    description:
      "Began pursuing the BS Degree program to build a strong foundation in computer science and data science.",
    status: "current",
  },
  {
    year: "2026",
    title: "Google Cybersecurity Professional Certificate",
    description:
      "Learning cybersecurity concepts including risk management, networking, Linux, Python, and security operations.",
    status: "current",
  },
  {
    year: "2026",
    title: "Building APEX WEB",
    description:
      "Developing a modern developer portfolio using Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.",
    status: "current",
  },
  {
    year: "Future",
    title: "AI & Software Engineer",
    description:
      "Working toward becoming an AI engineer, cybersecurity professional, and building impactful software products.",
    status: "future",
  },
];