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
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Technology
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Technology Stack
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Modern technologies used while building this project.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >
          <Code2 className="mb-6 h-8 w-8 text-blue-400" />

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <Badge
                key={technology}
                variant="outline"
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