"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

import type { Project } from "@/data/projects";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

interface Props {
  project: Project;
}

export default function ProjectTechStack({
  project,
}: Props) {
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
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Technology Stack
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Modern technologies used while building this project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            mt-12
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-xl
            transition-all duration-300
            hover:border-cyan-400/20
          "
        >
          <Code2
            aria-hidden="true"
            className="mb-6 h-8 w-8 text-cyan-400"
          />

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <Badge
                key={technology}
                variant="outline"
                className="px-4 py-2"
              >
                {technology}
              </Badge>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}