"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import type { Project } from "@/data/projects";
import Container from "@/components/ui/Container";

interface Props {
  project: Project;
}

export default function ProjectLessons({
  project,
}: Props) {
  return (
    <section className="relative py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Lessons
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Lessons Learned
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Every project contributes to growth. These are the most valuable
            lessons gained while building this project.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {project.lessons.map((lesson, index) => (
            <motion.div
              key={lesson}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all duration-300
                hover:border-emerald-500/40
                hover:bg-white/[0.05]
              "
            >
              <GraduationCap
                aria-hidden="true"
                className="mb-5 h-8 w-8 text-emerald-400"
              />

              <p className="leading-8 text-slate-300">
                {lesson}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}