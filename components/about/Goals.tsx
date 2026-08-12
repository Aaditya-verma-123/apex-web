import {
  Target,
  Rocket,
  Brain,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const goals = [
  {
    icon: Target,
    title: "Build Strong Foundations",
    description:
      "Develop deep fundamentals in computer science, software engineering, cybersecurity, and AI.",
  },
  {
    icon: Rocket,
    title: "Build Real Products",
    description:
      "Turn ideas into useful applications instead of only building tutorial projects.",
  },
  {
    icon: Brain,
    title: "Keep Learning",
    description:
      "Continuously explore new technologies and understand the concepts behind them.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Grow as an Engineer",
    description:
      "Work toward becoming a strong software engineer capable of building reliable and scalable systems.",
  },
];

export default function Goals() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionTitle
          eyebrow="LONG-TERM DIRECTION"
          title="Where I'm Going"
          description="The goals guiding what I learn, what I build, and the kind of engineer I want to become."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {goals.map((goal, index) => {
            const Icon = goal.icon;

            return (
              <GlassCard
                key={goal.title}
                className="group p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-white">
                        {goal.title}
                      </h3>

                      <span className="text-xs font-semibold text-slate-600">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-slate-400">
                      {goal.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Working toward it
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}