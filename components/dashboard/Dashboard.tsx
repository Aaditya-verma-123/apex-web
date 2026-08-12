"use client";

import Link from "next/link";
import {
  Award,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { journeyItems } from "@/data/journey";
import { skillCategories } from "@/data/skills";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const totalTechnologies = new Set(
  skillCategories.flatMap((category) => category.skills)
).size;

const currentJourney = journeyItems.filter(
  (item) => item.status === "current"
);

const featuredProjects = projects.filter(
  (project) => project.featured
);

export default function Dashboard() {
  return (
    <main className="relative overflow-hidden py-20 pt-36">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <Container>
        {/* Header */}
        <div className="relative z-10 max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <Sparkles className="h-4 w-4" />
            Dashboard
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            My Developer Dashboard
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A snapshot of my projects, certifications, technical skills,
            and current learning journey.
          </p>
        </div>

        {/* Stats */}
        <div className="relative z-10 mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={BriefcaseBusiness}
            label="Projects"
            value={projects.length}
          />

          <StatCard
            icon={Award}
            label="Certificates"
            value={certificates.length}
          />

          <StatCard
            icon={Code2}
            label="Technologies"
            value={totalTechnologies}
          />

          <StatCard
            icon={GraduationCap}
            label="Journey Milestones"
            value={journeyItems.length}
          />
        </div>

        {/* Current Focus */}
        <section className="relative z-10 mt-20">
          <SectionHeading
            eyebrow="CURRENT FOCUS"
            title="What I'm Working On"
            description="The areas currently shaping my technical journey."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {currentJourney.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard
                  key={item.title}
                  className="group p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <Icon className="h-8 w-8 text-cyan-400" />

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <Badge variant="info">
                      Current
                    </Badge>
                  </div>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="relative z-10 mt-20">
          <SectionHeading
            eyebrow="PROJECTS"
            title="Featured Work"
            description="Projects that represent my practical development experience."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <GlassCard
                key={project.id}
                className="group p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <Code2 className="h-8 w-8 text-cyan-400" />

                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "success"
                        : "warning"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.shortDescription}
                </p>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-6 w-fit px-0"
                >
                  <Link href={`/projects/${project.slug}`}>
                    View Case Study
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="relative z-10 mt-20">
          <SectionHeading
            eyebrow="SKILLS"
            title="Technical Stack"
            description="Technologies currently represented in my skill set."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => {
              const Icon = category.icon;

              return (
                <GlassCard
                  key={category.title}
                  className="p-7"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="h-7 w-7 text-cyan-400" />

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {category.title}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Journey */}
        <section className="relative z-10 mt-20">
          <SectionHeading
            eyebrow="JOURNEY"
            title="Learning Timeline"
            description="The milestones that have shaped my development journey."
          />

          <div className="mt-10 space-y-4">
            {journeyItems.slice(0, 5).map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard
                className=" group p-6
    transition-all duration-300
    hover:-translate-y-1
    hover:border-cyan-400/30
    hover:bg-white/[0.07]
    hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]"
                  key={`${item.year}-${item.title}`}
                >
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>

                        <span className="text-sm text-slate-500">
                          {item.year}
                        </span>
                      </div>

                      <p className="mt-2 leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Quick Access */}
        <section className="relative z-10 mt-20">
          <SectionHeading
            eyebrow="QUICK ACCESS"
            title="Explore APEX WEB"
            description="Jump directly to the sections you want to explore."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <QuickLink
              href="/projects"
              icon={BriefcaseBusiness}
              title="Projects"
            />

            <QuickLink
              href="/certificates"
              icon={ShieldCheck}
              title="Certificates"
            />

            <QuickLink
              href="/resume"
              icon={FileText}
              title="Resume"
            />

            <QuickLink
              href="/journey"
              icon={GraduationCap}
              title="Journey"
            />
          </div>
        </section>
      </Container>
    </main>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Code2;
  label: string;
  value: number;
}) {
  return (
    <GlassCard className="p-6">
      <Icon className="h-7 w-7 text-cyan-400" />

      <p className="mt-5 text-3xl font-bold text-white">
        {value}
      </p>

      <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
        {label}
      </p>
    </GlassCard>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}

function QuickLink({
  href,
  icon: Icon,
  title,
}: {
  href: string;
  icon: typeof Code2;
  title: string;
}) {
  return (
    <Link href={href}>
      <GlassCard className="group flex items-center justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
        <div className="flex items-center gap-4">
          <Icon className="h-6 w-6 text-cyan-400" />

          <span className="font-semibold text-white">
            {title}
          </span>
        </div>

        <ArrowUpRight className="h-5 w-5 text-slate-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </GlassCard>
    </Link>
  );
}