import { projects } from "@/data/projects";

import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { FadeUp, Stagger } from "@/components/animations";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <FadeUp>
        <SectionTitle
          eyebrow="Featured Projects"
          title="Things I've Built"
          description="A selection of projects showcasing my skills in web development, software engineering, UI design, and continuous learning."
        />
      </FadeUp>

      <Stagger className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </Stagger>
    </section>
  );
}