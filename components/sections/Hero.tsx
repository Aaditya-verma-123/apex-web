"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center py-24"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-400 font-semibold tracking-widest uppercase">
              Hello, I'm
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
              Aaditya
              <br />
              Verma
            </h1>

            <h2 className="mt-8 text-2xl font-semibold text-zinc-300">
              Cybersecurity Enthusiast • Full-Stack Developer • AI Explorer
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              I enjoy building modern web applications while continuously
              learning cybersecurity, AI, and software engineering.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#projects">
                <Button>
                  View Projects
                </Button>
              </Link>

              <Link
                href="/resume/resume.pdf"
                target="_blank"
              >
                <Button className="bg-white/10 hover:bg-white/20">
                  Download Resume
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-full border border-white/10 bg-white/5">

              <Image
                src="/images/profile.png"
                alt="Aaditya Verma"
                fill
                className="object-cover"
                priority
              />

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}