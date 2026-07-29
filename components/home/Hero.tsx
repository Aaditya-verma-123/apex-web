"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import HeroBackground from "./HeroBackground";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <HeroBackground />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Greeting */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
            Aaditya Verma
          </h1>

          {/* Subtitle */}
          <h2 className="mt-6 text-xl font-medium text-zinc-300 md:text-2xl">
            Developer • Cybersecurity Learner • Future AI Engineer
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Building modern web applications, exploring cybersecurity, and
            creating AI-powered solutions that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
          </div>

          {/* Stats */}
          <HeroStats />

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </motion.div>
      </Container>
    </section>
  );
}