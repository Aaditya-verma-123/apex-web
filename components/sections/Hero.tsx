"use client";

import Image from "next/image";
import RoleSwitcher from "@/components/ui/RoleSwitcher";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative scroll-mt-32 flex min-h-screen items-center overflow-hidden py-24"
>
  <motion.div
  className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
  animate={{
    x: [0, 40, 0],
    y: [0, -30, 0],
    scale: [1, 1.15, 1],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"
  animate={{
    x: [0, -30, 0],
    y: [0, 25, 0],
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
      <Container className="relative z-10">
  <div className="grid items-center gap-16 lg:grid-cols-2">
    {/* Left Side */}
<motion.div
  className="space-y-8"
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
>
  <p className="text-blue-400 font-medium">
    👋Welcome to APEX WEB
My Digital Portfolio
  </p>

  <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
    Hi, I&apos;m{" "}
    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      Aaditya
    </span>
  </h1>

  <RoleSwitcher />

<p className="max-w-xl text-lg leading-8 text-zinc-400">
    Passionate about Cybersecurity, Artificial Intelligence,
    and building modern web applications that solve real-world
    problems.
  </p>

  <motion.div
    className="flex flex-wrap gap-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.5 }}
  >
    <a
      href="#projects"
      className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
    >
      View Projects
    </a>

    <a
      href="/resume/resume.pdf"
      target="_blank"
      className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
    >
      Download Resume
    </a>
  </motion.div>
</motion.div>

    {/* Right Side */}
    <motion.div
  className="flex justify-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <motion.div
    whileHover={{
      scale: 1.05,
      rotate: 2,
      y: -6,
    }}
    transition={{
      type: "spring",
      stiffness: 250,
      damping: 15,
    }}
    className="relative"
  >
    <motion.div
      className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"
      whileHover={{
        scale: 1.25,
        opacity: 1,
      }}
    />

    <Image
      src="/images/profile.png"
      alt="Aaditya"
      width={320}
      height={320}
      priority
      className="relative h-80 w-80 rounded-full border-4 border-white/10 object-cover shadow-2xl"
    />
  </motion.div>
</motion.div>
  </div>
</Container>
    </section>
  );
}