"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import type { Project } from "@/data/projects";
import Container from "@/components/ui/Container";

interface Props {
  project: Project;
}

export default function ProjectFeatures({
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
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Key Features
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            The most important capabilities included in this project.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {project.features.map((feature, index) => (
            <motion.div
              key={feature}
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
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-white/[0.05]
              "
            >
              <CheckCircle2
                aria-hidden="true"
                className="mb-5 h-8 w-8 text-cyan-400"
              />

              <h3 className="text-xl font-semibold text-white">
                {feature}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}