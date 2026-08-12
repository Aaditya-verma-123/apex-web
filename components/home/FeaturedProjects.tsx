import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";

import { projects } from "@/data/projects";

import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="SELECTED WORK"
          title="Featured Projects"
          description="A closer look at the projects I'm building while exploring modern software development and technology."
        />

        <div className="mt-16 space-y-10">
          {featuredProjects.map((project) => (
            <FadeUp key={project.id}>
              <GlassCard className="group overflow-hidden p-0">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  {/* Project Preview */}
                  <div className="relative min-h-[320px] overflow-hidden lg:min-h-[500px]">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Featured Badge */}
                    <div className="absolute left-6 top-6">
                      <Badge variant="info">
                        <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                        Featured Project
                      </Badge>
                    </div>

                    {/* Status */}
                    <div className="absolute bottom-6 left-6">
                      <Badge
                        variant={
                          project.status === "Completed"
                            ? "success"
                            : project.status === "In Progress"
                            ? "warning"
                            : "info"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 text-base leading-8 text-slate-400">
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          variant="outline"
                          className="transition-colors duration-300 group-hover:border-cyan-500/30"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-10 flex flex-wrap gap-3">
                      <Button asChild>
                        <Link href={`/projects/${project.slug}`}>
                          View Case Study
                          <ArrowUpRight className="ml-2 h-4 w-4" />
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
                          <Code2 className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>

                      {project.live && (
                        <Button
                          variant="secondary"
                          asChild
                        >
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

                    {/* Project Meta */}
                    <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-600">
                          Started
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-300">
                          {project.started}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-600">
                          Components
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-300">
                          {project.components}+
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-600">
                          Certificates
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-300">
                          {project.certificates}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        {/* All Projects */}
        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            asChild
          >
            <Link href="/projects">
              Explore All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}