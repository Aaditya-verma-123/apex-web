"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    size: "h-[34rem] w-[34rem]",
    color:
      "bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)]",
    initial: { x: -250, y: -120 },
    animate: {
      x: [-250, -180, -260, -250],
      y: [-120, -170, -80, -120],
    },
    duration: 28,
  },
  {
    size: "h-[30rem] w-[30rem]",
    color:
      "bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18),transparent_70%)]",
    initial: { x: 280, y: 180 },
    animate: {
      x: [280, 220, 320, 280],
      y: [180, 120, 220, 180],
    },
    duration: 32,
  },
  {
    size: "h-[28rem] w-[28rem]",
    color:
      "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_70%)]",
    initial: { x: 80, y: -260 },
    animate: {
      x: [80, 140, 30, 80],
      y: [-260, -180, -310, -260],
    },
    duration: 36,
  },
];

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${orb.size} ${orb.color}`}
          initial={orb.initial}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}