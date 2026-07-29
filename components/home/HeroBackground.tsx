"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient */}
      <motion.div
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(135deg,#020617,#0f172a,#082f49,#0f172a,#020617)] bg-[length:300%_300%]"
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orb 1 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Orb 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]"
      />

      {/* Orb 3 */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute bottom-[-120px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]"
      />
    </div>
  );
}