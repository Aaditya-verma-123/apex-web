import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Section Header */}
      <SectionTitle
  eyebrow="Featured Projects"
  title="Things I've Built"
  description="A selection of projects showcasing my skills in web development, software engineering, UI design, and continuous learning."
/>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
  <ProjectCard
    key={project.title}
    project={project}
  />
))}
      </div>
    </section>
  );
}