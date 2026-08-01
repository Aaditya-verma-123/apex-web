"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import HeroBackground from "./HeroBackground";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-40 lg:pt-44">
      <HeroBackground />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Aaditya Verma
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-xl font-medium text-zinc-300 md:text-2xl"
          >
            Developer • Cybersecurity Learner • Future AI Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl"
          >
            Building modern web applications, exploring cybersecurity, and
            creating AI-powered solutions that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <Button>
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="secondary" asChild>
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <HeroStats />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={itemVariants}>
            <ScrollIndicator />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}