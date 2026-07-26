"use client";

import Image from "next/image";
import RoleSwitcher from "@/components/ui/RoleSwitcher";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  const tech = [
  "Next.js",
  "Cybersecurity",
  "Artificial Intelligence",
  "IITM BS",
  "Open Source",
];
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
  <motion.div
  initial={{ opacity: 0, y: -15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-xl"
>
  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
  Available for Opportunities
</motion.div>
  <p className="text-blue-400 font-medium">
    👋Welcome to APEX WEB
My Digital Portfolio
  </p>

  <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
    Hi, I&apos;m{" "}
    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      <motion.span
  animate={{
    backgroundPosition: [
      "0% 50%",
      "100% 50%",
      "0% 50%",
    ],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent"
>
  Aaditya
</motion.span>
    </span>
  </h1>

  <RoleSwitcher />

<p className="max-w-xl text-lg leading-8 text-zinc-400">
    Passionate about Cybersecurity, Artificial Intelligence,
    and building modern web applications that solve real-world
    problems.
    
  </p>
  <div className="mt-8 flex flex-wrap gap-3">
  {tech.map((item) => (
    <motion.div
      key={item}
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl"
    >
      {item}
    </motion.div>
  ))}
</div>
  

  <motion.div
  className="mt-10 flex flex-wrap gap-5"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.5 }}
>
  <motion.a
    href="#projects"
    whileHover={{
      scale: 1.05,
      y: -3,
      boxShadow: "0 15px 40px rgba(59,130,246,0.35)",
    }}
    whileTap={{ scale: 0.97 }}
    className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold text-white transition"
  >
    🚀 View Projects
  </motion.a>

  <motion.a
    href="/resume/resume.pdf"
    target="_blank"
    whileHover={{
      scale: 1.05,
      y: -3,
      backgroundColor: "rgba(255,255,255,0.08)",
    }}
    whileTap={{ scale: 0.97 }}
    className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-semibold backdrop-blur-xl"
  >
    📄 Download Resume
  </motion.a>
</motion.div>
</motion.div>

    {/* Right Side */}
    <motion.div
  className="flex justify-center"
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
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
    <div className="absolute inset-0 rounded-full bg-blue-500/25 blur-[110px]" />

<div className="absolute inset-0 rounded-full border border-blue-400/20" />
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