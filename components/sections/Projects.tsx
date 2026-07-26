"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="PROJECTS"
          title="Featured Projects"
          description="A selection of projects that reflect my learning journey and technical interests."
        />

        <div className="mt-14 space-y-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
                  >
                    GitHub
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}