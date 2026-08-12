"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function move(e: MouseEvent) {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <motion.div
      animate={{
        x: pos.x - 150,
        y: pos.y - 150,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
      className="
        pointer-events-none
        fixed
        z-0
        h-[300px]
        w-[300px]
        rounded-full
        blur-3xl
        opacity-20
      "
      style={{
        background:
          "radial-gradient(circle,var(--primary),transparent 70%)",
      }}
    />
  );
}