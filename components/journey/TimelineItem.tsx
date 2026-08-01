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
    dot: "bg-blue-500 border-blue-400",
    icon: "text-blue-400",
    badge:
      "border-blue-500/30 bg-blue-500/10 text-blue-300",
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
  console.log(item.title, Icon);
  const status = statusStyles[item.status];
  const isLeft = index % 2 === 0;

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
      <div className="grid grid-cols-1 items-center md:grid-cols-[1fr_auto_1fr]">
        {/* Left Card */}
        <div
          className={cn(
            "hidden md:block",
            isLeft ? "" : "invisible"
          )}
        >
          {isLeft && (
            <GlassCard className="rounded-3xl border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]">
              <div className="mb-4 flex items-center justify-between">
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
                  className={cn(
                    "h-6 w-6",
                    status.icon
                  )}
                />

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="leading-7 text-slate-400">
                {item.description}
              </p>
            </GlassCard>
          )}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto flex flex-col items-center">
          <div className="h-12 w-px bg-white/10" />

          <div
            className={cn(
              "z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-slate-950 shadow-lg",
              status.dot
            )}
          >
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>

          <div className="h-12 w-px bg-white/10" />
        </div>

        {/* Right Card */}
        <div
          className={cn(
            "hidden md:block",
            !isLeft ? "" : "invisible"
          )}
        >
          {!isLeft && (
            <GlassCard className="rounded-3xl border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]">
              <div className="mb-4 flex items-center justify-between">
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
                  className={cn(
                    "h-6 w-6",
                    status.icon
                  )}
                />

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="leading-7 text-slate-400">
                {item.description}
              </p>
            </GlassCard>
          )}
        </div>

        {/* Mobile Card */}
        <div className="mt-6 md:hidden">
          <GlassCard className="rounded-3xl border border-white/10 p-6">
            <div className="mb-4 flex items-center justify-between">
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
                className={cn(
                  "h-6 w-6",
                  status.icon
                )}
              />

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>
            </div>

            <p className="leading-7 text-slate-400">
              {item.description}
            </p>
          </GlassCard>
        </div>
      </div>
    </motion.div>
  );
}