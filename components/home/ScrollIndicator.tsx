"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1,
        duration: 0.8,
      }}
      className="mt-16 flex flex-col items-center justify-center"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
        Scroll to Explore
      </p>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <ChevronDown className="h-5 w-5 text-cyan-400" />
      </motion.div>
    </motion.div>
  );
}