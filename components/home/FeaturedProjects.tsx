import Link from "next/link";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Section Header */}
      <SectionTitle
  eyebrow="Featured Projects"
  title="Things I've Built"
  description="A selection of projects showcasing my skills in web development, software engineering, UI design, and continuous learning."
/>

      {/* Projects Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="leading-7 text-slate-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500"
              >
                View on GitHub →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}