"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectStats from "./ProjectStats";
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
    <section className="relative overflow-hidden py-24">
      <Container>
        {/* Back Button */}
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
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

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              {project.longDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild>
                <Link
                  href={project.github}
                  target="_blank"
                >
                  <FolderGit2 className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>

              {project.live && (
                <Button
                  variant="secondary"
                  asChild
                >
                  <Link
                    href={project.live}
                    target="_blank"
                  >
                    Live Demo

                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
)}
              <ProjectStats project={project} />
            </div>
          </motion.div>

          {/* Right Side */}
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
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}