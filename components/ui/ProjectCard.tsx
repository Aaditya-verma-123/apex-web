"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Eye,
} from "lucide-react";

import type { Project } from "@/data/projects";

import GlassCard from "./GlassCard";
import Badge from "./Badge";
import Button from "./Button";

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
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="group h-full"
    >
      <GlassCard className="flex h-full flex-col overflow-hidden p-0">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

          {/* Status */}
          <div className="absolute left-5 top-5">
            <Badge variant={badgeVariant}>
              {project.status}
            </Badge>
          </div>

          {/* Image Hover Glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-cyan-400/5" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-7">
          {/* Title */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
              {project.title}
            </h3>

            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
          </div>

          {/* Description */}
          <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-400">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="transition-all duration-300 group-hover:border-cyan-500/30"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Divider */}
          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              asChild
              className="flex-1 justify-center gap-2"
            >
              <Link
                href={`/projects/${project.slug}`}
              >
                <Eye className="h-4 w-4" />
                Case Study
              </Link>
            </Button>

            <Button
              variant="secondary"
              asChild
              className="px-4"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Code2 className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}