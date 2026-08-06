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
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Key Features
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            The most important capabilities included in this project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {project.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/40
                hover:bg-white/[0.05]
              "
            >
              <CheckCircle2 className="mb-5 h-8 w-8 text-blue-400" />

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