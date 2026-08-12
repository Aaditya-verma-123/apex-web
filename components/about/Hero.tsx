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

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-24 pt-32">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[130px]"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <FadeUp>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Sparkles className="h-4 w-4" />
              A little more about me
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              About Me
            </p>
          </FadeUp>

          <FadeUp delay={0.16}>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              Building, Learning,
              <span className="block text-cyan-400">
                and Exploring.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.24}>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg md:text-xl">
              I&apos;m Aaditya Verma, a developer exploring web development,
              cybersecurity, and artificial intelligence while building
              practical projects and continuously expanding my technical
              skills.
            </p>
          </FadeUp>

          <FadeUp delay={0.32}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="group"
              >
                <Link href="/projects">
                  Explore My Projects
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
                  View Resume
                </a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}