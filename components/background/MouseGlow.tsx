"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    }

    window.addEventListener("mousemove", handleMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[-40] h-[400px] w-[400px] rounded-full blur-[120px]"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle, rgba(59,130,246,.18), transparent 70%)",
      }}
    />
  );
}