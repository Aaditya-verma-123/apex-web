"use client";

import { BookOpen, PenLine } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden py-24 pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-cyan-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Blog
            </p>
          </div>

          <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Thoughts.
            <span className="text-cyan-400">
              {" "}Lessons.
            </span>
            <br />
            Builds.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Notes from my journey through web development,
            cybersecurity, AI, and the projects I&apos;m building along
            the way.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
            <PenLine className="h-4 w-4 text-cyan-400" />
            <span>Learning in public, one build at a time.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}