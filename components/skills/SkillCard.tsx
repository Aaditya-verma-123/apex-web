"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/data/skills";

import GlassCard from "@/components/ui/GlassCard";
import SkillChip from "./SkillChip";

type SkillCardProps = {
  category: SkillCategory;
  index: number;
};

export default function SkillCard({
  category,
  index,
}: SkillCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="h-full"
    >
      <GlassCard
        className="
          group h-full
          transition-all duration-300
          hover:border-cyan-400/30
          hover:bg-white/[0.07]
          hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]
        "
      >
        {/* Header */}
        <div className="mb-7 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
            <Icon
              aria-hidden="true"
              className="h-6 w-6 text-cyan-400"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
              {category.title}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {category.skills.length} Technologies
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillChip
              key={skill}
              skill={skill}
            />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}