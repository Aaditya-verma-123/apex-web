"use client";

import { motion } from "framer-motion";

import TimelineItem from "./TimelineItem";
import { journeyItems } from "@/data/journey";

export default function Timeline() {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent blur-sm" />
      </div>

      {/* Main Timeline Line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

      {/* Mobile Timeline Line */}
      <div className="absolute left-3 top-0 h-full w-px bg-white/10 md:hidden" />

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
        className="space-y-4"
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