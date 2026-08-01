"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle } from "lucide-react";

export default function CertificateHero() {
  const completed = 5;
  const total = 8;
  const progress = (completed / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
          <ShieldCheck className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-300">
            Google Career Certificate
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Google Cybersecurity
          <br />
          Professional Certificate
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          A professional learning journey focused on cybersecurity operations,
          Linux, SQL, networking, security controls, and vulnerability
          assessment.
        </p>

        {/* Progress */}
        <div className="mt-10">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-300">
              Progress
            </span>

            <span className="font-semibold text-blue-300">
              {progress.toFixed(1)}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <CheckCircle className="mb-3 h-7 w-7 text-emerald-400" />

            <h3 className="text-3xl font-bold text-white">
              {completed}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Courses Completed
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Award className="mb-3 h-7 w-7 text-yellow-400" />

            <h3 className="text-3xl font-bold text-white">
              {total}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Total Courses
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <ShieldCheck className="mb-3 h-7 w-7 text-blue-400" />

            <h3 className="text-3xl font-bold text-white">
              {total - completed}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Remaining
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}