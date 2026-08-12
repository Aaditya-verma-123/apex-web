"use client";

import { Bot } from "lucide-react";
import { motion } from "framer-motion";

import { useAI } from "@/context/AIContext";

export default function AIButton() {
  const { setOpen } = useAI();

  return (
    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => setOpen(true)}
      className="
        fixed
        bottom-24
        right-6
        z-[999]

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-2xl

        border
        border-white/10

        bg-zinc-900/90

        backdrop-blur-xl

        shadow-xl

        transition-all
        duration-300

        hover:border-[var(--border)]
        hover:shadow-[0_20px_60px_var(--glow)]
      "
    >
      <Bot
        className="h-6 w-6"
        style={{
          color: "var(--primary)",
        }}
      />
    </motion.button>
  );
}