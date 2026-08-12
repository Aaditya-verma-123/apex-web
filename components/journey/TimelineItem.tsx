"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import GlassCard from "@/components/ui/GlassCard";
import type { JourneyItem } from "@/data/journey";

type TimelineItemProps = {
  item: JourneyItem;
  index: number;
};

const statusStyles = {
  completed: {
    dot: "bg-emerald-500 border-emerald-400",
    icon: "text-emerald-400",
    badge:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    label: "Completed",
  },
  current: {
  dot: "bg-cyan-500 border-cyan-400",
  icon: "text-cyan-400",
  badge:
    "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  label: "Current",
},
  future: {
    dot: "bg-violet-500 border-violet-400",
    icon: "text-violet-400",
    badge:
      "border-violet-500/30 bg-violet-500/10 text-violet-300",
    label: "Future",
  },
} as const;

export default function TimelineItem({
  item,
  index,
}: TimelineItemProps) {
  const Icon = item.icon;
  const status = statusStyles[item.status];
  const isLeft = index % 2 === 0;

  const CardContent = (
    <GlassCard
      className="
        rounded-3xl
        border border-white/10
        p-6
        transition-all duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.07]
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]
      "
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-slate-400">
          {item.year}
        </span>

        <span
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium",
            status.badge
          )}
        >
          {status.label}
        </span>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <Icon
          aria-hidden="true"
          className={cn("h-6 w-6 shrink-0", status.icon)}
        />

        <h3 className="text-xl font-bold text-white">
          {item.title}
        </h3>
      </div>

      <p className="leading-7 text-slate-400">
        {item.description}
      </p>
    </GlassCard>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="relative"
    >
      {/* Desktop Timeline */}
      <div className="hidden items-stretch gap-8 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className={cn(!isLeft && "invisible")}>
          {isLeft && CardContent}
        </div>

        <div className="relative flex flex-col items-center">
          <div className="h-12 w-px bg-white/10" />

          <div
            className={cn(
              "z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-slate-950 shadow-lg",
              status.dot
            )}
          >
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>

          <div className="h-12 w-px flex-1 bg-white/10" />
        </div>

        <div className={cn(isLeft && "invisible")}>
          {!isLeft && CardContent}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="relative pl-10 md:hidden">
        <div
          className={cn(
            "absolute left-0 top-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-slate-950 shadow-lg",
            status.dot
          )}
        >
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>

        {CardContent}
      </div>
    </motion.div>
  );
}