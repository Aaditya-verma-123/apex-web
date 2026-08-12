"use client";

import { motion } from "framer-motion";

import TimelineItem from "./TimelineItem";
import { journeyItems } from "@/data/journey";

export default function Timeline() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      {/* Main Timeline Line */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block"
      />

      {/* Mobile Timeline Line */}
      <div
        aria-hidden="true"
        className="absolute left-3 top-0 h-full w-px bg-white/10 md:hidden"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="relative space-y-4"
      >
        {journeyItems.map((item, index) => (
          <TimelineItem
            key={`${item.year}-${item.title}`}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}