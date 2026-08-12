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
  const relatedProjects = projects
    .filter((project) => project.id !== currentProject.id)
    .slice(0, 3);

  return (
    <section className="relative py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Continue Exploring
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Related Projects
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Discover more projects built using modern technologies and
            different approaches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
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