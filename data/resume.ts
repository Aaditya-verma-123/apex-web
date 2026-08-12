export interface ResumeData {
  title: string;
  description: string;
  updated: string;
  pages: number;
  projects: number;
  certifications: number;
  pdf: string;
}

export const resume: ResumeData = {
  title: "Professional Resume",
  description:
    "A concise overview of my education, projects, technical skills, certifications, and career journey.",
  updated: "August 2026",
  pages: 1,
  projects: 3,
  certifications:6,
  pdf: "/resume/Aaditya_Verma_Resume.pdf",
};