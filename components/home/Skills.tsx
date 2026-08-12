"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SkillCard from "@/components/skills/SkillCard";
import { FadeUp } from "@/components/animations";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  const totalSkills = skillCategories.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <Container>
        <SectionTitle
          eyebrow="TECHNICAL SKILLS"
          title="What I Work With"
          description="Technologies and technical areas I'm currently learning, practicing, and using to build projects."
        />

        {/* Stats */}
        <FadeUp delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            <GlassCard className="p-6 text-center">
              <p className="text-3xl font-bold text-white">
                {skillCategories.length}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Skill Categories
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {totalSkills}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Technologies
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <p className="text-3xl font-bold text-white">
                2026
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Current Focus
              </p>
            </GlassCard>
          </div>
        </FadeUp>

        {/* Skill Categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <SkillCard
                category={category}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <FadeUp delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Button variant="secondary" asChild>
              <Link href="/skills">
                View All Skills
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}