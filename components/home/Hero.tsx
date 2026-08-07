"use client";

import { ArrowRight, Download } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { FadeUp } from "@/components/animations";

import HeroBackground from "./HeroBackground";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-40 lg:pt-44">
      <HeroBackground />

      <Container>
        <div className="mx-auto max-w-5xl text-center">

          <FadeUp>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Hi, I'm
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Aaditya Verma
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <h2 className="mt-6 text-xl font-medium text-zinc-300 md:text-2xl">
              Developer • Cybersecurity Learner • Future AI Engineer
            </h2>
          </FadeUp>

          <FadeUp delay={0.24}>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
              Building modern web applications, exploring cybersecurity, and
              creating AI-powered solutions that solve real-world problems.
            </p>
          </FadeUp>

          <FadeUp delay={0.32}>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button>
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="secondary" asChild>
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

          <FadeUp delay={0.40}>
            <div className="mt-20">
              <HeroStats />
            </div>
          </FadeUp>

          <FadeUp delay={0.48}>
            <ScrollIndicator />
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}