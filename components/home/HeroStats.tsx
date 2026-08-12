"use client";

import { motion } from "framer-motion";
import { FolderGit2, Award, Code2 } from "lucide-react";

const stats = [
  {
    icon: FolderGit2,
    value: "3+",
    label: "Projects",
  },
  {
    icon: Award,
    value: "6+",
    label: "Certificates",
  },
  {
    icon: Code2,
    value: "20+",
    label: "Technologies",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              duration: 0.45,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_15px_45px_rgba(34,211,238,0.15)]"
          >
            <Icon
              aria-hidden="true"
              className="mb-4 h-8 w-8 text-cyan-400"
            />

            <h3 className="text-3xl font-bold text-white">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-wider text-zinc-400">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}