"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import type { Project } from "@/data/projects";

import GlassCard from "./GlassCard";
import Badge from "./Badge";
import Button from "./Button";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const badgeVariant =
    project.status === "Completed"
      ? "success"
      : project.status === "In Progress"
      ? "warning"
      : "info";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <GlassCard className="group rounded-3xl p-7 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <Badge variant={badgeVariant}>
            {project.status}
          </Badge>
        </div>

        {/* Description */}
        <p className="leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="transition-colors duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              View on GitHub →
            </Button>
          </Link>
        </div>
      </GlassCard>
    </motion.div>
  );
}