"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

import { PROJECTS } from "@/lib/data";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 py-28">
      <Container>
        <SectionTitle
          eyebrow="PROJECTS"
          title="Featured Projects"
          description="A selection of projects that reflect my learning journey and technical interests."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
  {projects.map((project) => (
  <ProjectCard
    key={project.id}
    project={project}
  />
))}
</div>
      </Container>
    </section>
  );
}