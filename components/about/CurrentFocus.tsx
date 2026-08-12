import {
  Code2,
  ShieldCheck,
  BrainCircuit,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const focusAreas = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive and modern applications with React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Developing a strong foundation in security operations, networking, Linux, threats, and vulnerabilities.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Exploring AI systems, LLMs, automation, and ways to build useful intelligent applications.",
  },
  {
    icon: Globe2,
    title: "APEX WEB",
    description:
      "Continuously improving this portfolio as a real-world project for experimenting with modern web architecture.",
  },
];

export default function CurrentFocus() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionTitle
          eyebrow="CURRENT FOCUS"
          title="What I'm Exploring"
          description="The areas I'm actively learning, building, and experimenting with right now."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <GlassCard
                key={area.title}
                className="group relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {area.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}