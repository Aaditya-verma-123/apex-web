"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        background: "var(--primary)",
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-[99999]
        h-[3px]
      "
    />
  );
}