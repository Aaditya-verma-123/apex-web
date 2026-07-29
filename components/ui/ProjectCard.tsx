"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FolderGit2, ArrowUpRight } from "lucide-react";

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
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="h-full"
    >
      <GlassCard
        className="
          group
          flex
          h-full
          flex-col
          rounded-3xl
          border
          border-white/10
          p-8
          transition-all
          duration-300
          hover:border-blue-500/40
          hover:bg-white/[0.07]
          hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
        "
      >
        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-300">
              {project.title}
            </h3>

            <Badge variant={badgeVariant}>
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Description */}
        <p className="flex-1 text-[15px] leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="
                transition-all
                duration-300
                group-hover:border-blue-500/40
                group-hover:bg-blue-500/10
                group-hover:text-blue-300
              "
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}
        <Button
          asChild
          className="w-full justify-center gap-2"
        >
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FolderGit2 className="h-4 w-4" />
            View Source
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </GlassCard>
    </motion.div>
  );
}