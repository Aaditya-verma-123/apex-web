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
          group
          flex
          h-full
          flex-col
          rounded-3xl
          border
          border-white/10
          p-8
          transition-all
          duration-300
          hover:border-blue-500/40
          hover:bg-white/[0.07]
          hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
        "
      >
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-blue-500/20
              bg-blue-500/10
              text-blue-400
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:border-blue-400/40
              group-hover:bg-blue-500/15
            "
          >
            <Icon className="h-7 w-7" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
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