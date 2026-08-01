"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SkillChipProps = {
  skill: string;
  className?: string;
};

export default function SkillChip({
  skill,
  className,
}: SkillChipProps) {
  return (
    <motion.span
      whileHover={{
        y: -2,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      className={cn(
        "group inline-flex cursor-default select-none items-center rounded-full",
        "border border-white/10 bg-white/5 px-4 py-2",
        "text-sm font-medium text-slate-300",
        "backdrop-blur-md",
        "transition-all duration-300",
        "hover:border-blue-500/40",
        "hover:bg-blue-500/10",
        "hover:text-blue-300",
        "hover:shadow-[0_0_20px_rgba(59,130,246,0.18)]",
        className
      )}
    >
      <span className="transition-transform duration-300 group-hover:scale-105">
        {skill}
      </span>
    </motion.span>
  );
}