"use client";

import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";

import type { Project } from "@/data/projects";
import Container from "@/components/ui/Container";

interface Props {
  project: Project;
}

export default function ProjectChallenges({
  project,
}: Props) {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Challenges
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Challenges Faced
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Every project presents unique technical and design challenges.
            These are some of the most valuable problems solved during development.
          </p>
        </div>

        <div className="space-y-6">
          {project.challenges.map((challenge, index) => (
            <motion.div
              key={challenge}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                flex
                gap-5
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition-all
                duration-300
                hover:border-amber-500/40
                hover:bg-white/[0.05]
              "
            >
              <TriangleAlert className="mt-1 h-7 w-7 shrink-0 text-amber-400" />

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Challenge {index + 1}
                </h3>

                <p className="mt-3 leading-8 text-slate-400">
                  {challenge}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}