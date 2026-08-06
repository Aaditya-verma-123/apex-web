"use client";

import { motion } from "framer-motion";

import { projects, type Project } from "@/data/projects";

import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";

interface Props {
  currentProject: Project;
}

export default function RelatedProjects({
  currentProject,
}: Props) {
  const relatedProjects = projects.filter(
    (project) => project.id !== currentProject.id
  );

  return (
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Continue Exploring
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Related Projects
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Discover more projects built using modern technologies and
            different approaches.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {relatedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}