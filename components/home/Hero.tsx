"use client";

import Link from "next/link";
import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { FadeUp } from "@/components/animations";

import HeroBackground from "./HeroBackground";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <HeroBackground />

      <Container>
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          {/* Status */}
          <FadeUp>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />

              <span>
                Building, learning & exploring technology
              </span>
            </div>
          </FadeUp>

          {/* Greeting */}
          <FadeUp delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Hi, I&apos;m
            </p>
          </FadeUp>

          {/* Name */}
          <FadeUp delay={0.16}>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Aaditya{" "}
              <span className="inline text-cyan-400">
                Verma
              </span>
            </h1>
          </FadeUp>

          {/* Role */}
          <FadeUp delay={0.24}>
            <h2 className="mt-7 text-xl font-medium text-zinc-300 sm:text-2xl md:text-3xl">
              Developer
              <span className="mx-3 text-cyan-400">•</span>
              Cybersecurity Learner
              <span className="mx-3 text-cyan-400">•</span>
              Future AI Engineer
            </h2>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.32}>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg md:text-xl">
              Building modern web applications, exploring cybersecurity,
              and creating AI-powered solutions that solve real-world
              problems.
            </p>
          </FadeUp>

          {/* Actions */}
          <FadeUp delay={0.4}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="group"
              >
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="secondary"
                asChild
              >
                <a
                  href="/resume/Aaditya_Verma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.48}>
            <div className="mx-auto mt-20 max-w-4xl">
              <HeroStats />
            </div>
          </FadeUp>

          {/* Scroll Indicator */}
          <FadeUp delay={0.56}>
            <div className="mt-16">
              <ScrollIndicator />
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}