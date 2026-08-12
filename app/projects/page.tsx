import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  FolderKanban,
  Code2Icon,
  Sparkles,
} from "lucide-react";

import { projects } from "@/data/projects";

import ProjectCard from "@/components/ui/ProjectCard";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { FadeUp } from "@/components/animations";

export default function ProjectsPage() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  const completedCount = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const inProgressCount = projects.filter(
    (project) => project.status === "In Progress"
  ).length;

  return (
    <main className="relative overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <section className="relative py-24 pt-36">
        <Container>
          {/* Header */}
          <FadeUp>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <FolderKanban className="h-5 w-5 text-cyan-400" />

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Projects
                </p>
              </div>

              <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Things I&apos;ve
                <span className="text-cyan-400">
                  {" "}Built.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
                A collection of projects I&apos;ve built while learning,
                experimenting, and solving real-world problems.
              </p>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.12}>
            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              <GlassCard className="p-5">
                <p className="text-3xl font-bold text-white">
                  {projects.length}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Total Projects
                </p>
              </GlassCard>

              <GlassCard className="p-5">
                <p className="text-3xl font-bold text-emerald-400">
                  {completedCount}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Completed
                </p>
              </GlassCard>

              <GlassCard className="p-5">
                <p className="text-3xl font-bold text-amber-400">
                  {inProgressCount}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  In Progress
                </p>
              </GlassCard>
            </div>
          </FadeUp>

          {/* Featured */}
          {featuredProjects.length > 0 && (
            <section className="mt-24">
              <FadeUp>
                <div className="flex items-center gap-3">
                  <Badge variant="info">
                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                    Featured
                  </Badge>

                  <span className="text-sm text-slate-500">
                    Flagship project
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Featured Work
                </h2>
              </FadeUp>

              <div className="mt-10 space-y-8">
                {featuredProjects.map((project) => (
                  <FadeUp key={project.id}>
                    <GlassCard className="group overflow-hidden p-0">
                      <div className="grid lg:grid-cols-2">
                        {/* Image */}
                        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[440px]">
                          <Image
  src={project.image}
  alt={`${project.title} preview`}
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover transition-transform duration-700 group-hover:scale-105"
/>

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                          <div className="absolute left-6 top-6">
                            <Badge variant="warning">
                              {project.status}
                            </Badge>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center p-8 lg:p-12">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                            {project.category}
                          </p>

                          <h3 className="mt-4 text-4xl font-bold text-white">
                            {project.title}
                          </h3>

                          <p className="mt-5 leading-8 text-slate-400">
                            {project.shortDescription}
                          </p>

                          <div className="mt-7 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                              <Badge
                                key={technology}
                                variant="outline"
                              >
                                {technology}
                              </Badge>
                            ))}
                          </div>

                          <div className="mt-9 flex flex-wrap gap-3">
                            <Button asChild>
                              <Link
                                href={`/projects/${project.slug}`}
                              >
                                View Case Study
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>

                            <Button
                              variant="secondary"
                              asChild
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Code2Icon className="mr-2 h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </FadeUp>
                ))}
              </div>
            </section>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <section className="mt-24">
              <FadeUp>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  More Work
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Other Projects
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                  Earlier projects and experiments that helped me build
                  stronger development fundamentals.
                </p>
              </FadeUp>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {otherProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            </section>
          )}
        </Container>
      </section>
    </main>
  );
}