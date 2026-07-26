"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";
import { NAVIGATION } from "@/lib/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <Container>
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-6 py-4 backdrop-blur-xl">

          <Link
            href="/"
            className="text-lg font-bold tracking-wide"
          >
            Aaditya
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAVIGATION.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="/resume/resume.pdf"
            target="_blank"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Resume
          </a>

        </nav>
      </Container>
    </header>
  );
}