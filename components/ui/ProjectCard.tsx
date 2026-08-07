"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";

import GlassCard from "./GlassCard";
import Badge from "./Badge";
import Button from "./Button";
import { ScaleIn } from "@/components/animations";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const badgeVariant =
    project.status === "Completed"
      ? "success"
      : project.status === "In Progress"
      ? "warning"
      : "info";

  return (
    <ScaleIn className="h-full">
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
            hover:border-cyan-500/40
            hover:bg-white/[0.07]
            hover:shadow-[0_20px_60px_rgba(6,182,212,.15)]
          "
        >
          {/* Header */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                {project.title}
              </h3>

              <Badge variant={badgeVariant}>
                {project.status}
              </Badge>
            </div>
          </div>

          {/* Description */}
          <p className="flex-1 text-[15px] leading-7 text-slate-400">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="
                  transition-all
                  duration-300
                  group-hover:border-cyan-500/40
                  group-hover:bg-cyan-500/10
                  group-hover:text-cyan-300
                "
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* CTA */}
          <Button
            asChild
            className="w-full justify-center gap-2"
          >
            <Link href={`/projects/${project.slug}`}>
              <Eye className="h-4 w-4" />

              View Case Study

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </GlassCard>
      </motion.div>
    </ScaleIn>
  );
}