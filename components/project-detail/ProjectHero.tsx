"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  FolderGit2,
} from "lucide-react";

import type { Project } from "@/data/projects";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({
  project,
}: ProjectHeroProps) {
  const badgeVariant =
    project.status === "Completed"
      ? "success"
      : project.status === "In Progress"
        ? "warning"
        : "info";

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <Container>
        {/* Back Navigation */}
        <Link
          href="/projects"
          className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="relative z-10 mt-12 grid items-center gap-16 lg:grid-cols-2">
          {/* Project Information */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Badge variant={badgeVariant}>
              {project.status}
            </Badge>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              {project.longDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FolderGit2 className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

              {project.live && (
                <Button variant="secondary" asChild>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}