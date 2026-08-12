import {
  ArrowUpRight,
  Code2,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Story() {
  const drivers = [
    "Learning something new every day",
    "Building practical projects",
    "Understanding how technology works",
    "Exploring cybersecurity and AI",
    "Continuously improving my development skills",
  ];

  return (
    <section className="relative py-24">
      <Container>
        <SectionTitle
          eyebrow="MY STORY"
          title="Learning by Building"
          description="I believe the fastest way to understand technology is to build with it, break things, fix them, and keep improving."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Story */}
          <GlassCard className="p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                <Code2 className="h-5 w-5 text-cyan-400" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  My approach
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  Learn → Build → Improve
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-400">
              <p>
                I&apos;m Aaditya Verma, a developer with a growing interest
                in cybersecurity, artificial intelligence, and modern web
                development.
              </p>

              <p>
                I enjoy learning by building. Instead of limiting myself
                to tutorials, I try to turn what I learn into real
                projects, experiments, and practical systems.
              </p>

              <p>
                APEX WEB represents that approach. It is not just a
                portfolio, but an evolving project where I can experiment
                with design, architecture, animation, and modern web
                technologies.
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                Always building something new.
              </p>
            </div>
          </GlassCard>

          {/* What Drives Me */}
          <GlassCard className="p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  What drives me
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  Curiosity & Growth
                </h3>
              </div>
            </div>

            <ul className="mt-8 space-y-5">
              {drivers.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}