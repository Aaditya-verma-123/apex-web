import {
  GraduationCap,
  ShieldCheck,
  Database,
  Code2,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const education = [
  {
    title: "Senior Secondary — CBSE",
    description:
      "Completed senior secondary education with Computer Science.",
    status: "Completed",
    icon: GraduationCap,
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    description:
      "Building foundational knowledge in cybersecurity, networking, Linux, SQL, and security operations.",
    status: "In Progress",
    icon: ShieldCheck,
  },
  {
    title: "BS in Data Science and Applications — IIT Madras",
    description:
      "Exploring structured learning in data science and computing through the IIT Madras program.",
    status: "Started",
    icon: Database,
  },
  {
    title: "B.Tech — Computer Science Engineering",
    description:
      "Long-term goal to pursue computer science engineering and deepen my software engineering skills.",
    status: "Future Goal",
    icon: Code2,
  },
];

export default function Education() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionTitle
          eyebrow="EDUCATION"
          title="Learning & Education"
          description="The academic and professional learning experiences that are shaping my technical journey."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <GlassCard
                key={item.title}
                className="group p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {item.status}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {item.description}
                    </p>
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