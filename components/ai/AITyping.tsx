"use client";

import { motion } from "framer-motion";

export default function AITyping() {
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          animate={{
            y: [0, -5, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: dot * 0.15,
          }}
          className="h-2 w-2 rounded-full"
          style={{
            background: "var(--primary)",
          }}
        />
      ))}
    </div>
  );
}