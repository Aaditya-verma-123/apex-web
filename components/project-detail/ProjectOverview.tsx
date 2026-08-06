"use client";

import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Rocket,
  Trophy,
} from "lucide-react";

import type { Project } from "@/data/projects";
import Container from "@/components/ui/Container";

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  const cards = [
    {
      icon: Target,
      title: "Goal",
      description:
        "Build a modern, scalable project with a strong focus on usability, performance, and clean architecture.",
    },
    {
      icon: Lightbulb,
      title: "Problem",
      description:
        "Many portfolios only showcase projects without explaining the thought process behind them.",
    },
    {
      icon: Rocket,
      title: "Solution",
      description: project.longDescription,
    },
    {
      icon: Trophy,
      title: "Outcome",
      description:
        "A polished project that demonstrates practical development skills and continuous learning.",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Overview
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Project Story
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Every project begins with an idea, evolves through challenges,
            and ends with valuable lessons. Here's the story behind
            <span className="font-semibold text-white">
              {" "}{project.title}
            </span>.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/40
                hover:bg-white/[0.05]
              "
            >
              <card.icon className="mb-5 h-8 w-8 text-blue-400" />

              <h3 className="text-2xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}