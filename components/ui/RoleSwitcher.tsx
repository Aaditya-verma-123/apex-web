"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Cybersecurity Enthusiast",
  "AI Learner",
  "Full-Stack Developer",
  "IITM BS Student",
];

export default function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-semibold text-blue-400 md:text-3xl"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}