"use client";

import {
  CheckCircle2,
  Clock3,
  Map,
  Rocket,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Timeline from "@/components/journey/Timeline";
import { FadeUp } from "@/components/animations";

import { journeyItems } from "@/data/journey";

export default function Journey() {
  const completed = journeyItems.filter(
    (item) => item.status === "completed"
  ).length;

  const current = journeyItems.filter(
    (item) => item.status === "current"
  ).length;

  const future = journeyItems.filter(
    (item) => item.status === "future"
  ).length;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <Container>
        {/* Hero */}
        <FadeUp>
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3">
              <Map className="h-5 w-5 text-cyan-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                My Journey
              </p>
            </div>

            <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Learning.
              <span className="text-cyan-400">
                {" "}Building.
              </span>
              <br />
              Growing.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              Every milestone, project, and learning experience has
              shaped my path as a developer. Here&apos;s how the journey
              is evolving.
            </p>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={0.12}>
          <div className="relative z-10 mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            <GlassCard className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">
                    {completed}
                  </p>

                  <p className="text-sm text-slate-500">
                    Completed
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <Clock3 className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">
                    {current}
                  </p>

                  <p className="text-sm text-slate-500">
                    Current
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
                  <Rocket className="h-5 w-5 text-violet-400" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">
                    {future}
                  </p>

                  <p className="text-sm text-slate-500">
                    Future
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </FadeUp>

        {/* Timeline */}
        <div className="relative z-10 mt-24">
          <FadeUp>
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Timeline
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                The Road So Far
              </h2>

              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
                From education and early development projects to
                cybersecurity and future engineering goals.
              </p>
            </div>
          </FadeUp>

          <Timeline />
        </div>
      </Container>
    </section>
  );
}