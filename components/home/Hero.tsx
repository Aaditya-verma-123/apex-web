"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 md:flex-row lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Welcome to APEX WEB
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Aaditya Verma
          </h1>

          <h2 className="mt-4 text-xl text-slate-300 md:text-2xl">
            Full Stack Developer • Cybersecurity Learner • AI Enthusiast
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Building secure, intelligent, and modern digital experiences while
            continuously learning new technologies and creating impactful
            solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition hover:border-white/30"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
            <Image
              src="/images/profile/profile.png"
              alt="Aaditya Verma"
              width={420}
              height={520}
              priority
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}