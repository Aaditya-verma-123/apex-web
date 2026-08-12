"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Journey", href: "/journey" },
  { name: "Certificates", href: "/certificates" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Aaditya-verma-123",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aaditya-verma-985117317",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/___aaditya_verma___",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]"
      />

      {/* Subtle Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                <Sparkles className="h-5 w-5 text-cyan-400" />
              </span>

              <span className="text-2xl font-bold tracking-tight text-white">
                APEX<span className="text-cyan-400"> WEB</span>
              </span>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              A personal digital space documenting my journey through
              software development, cybersecurity, AI, and technology.
            </p>

            {/* Current Status */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-sm text-emerald-300">
                Currently building & learning
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>

            <div className="mt-6 grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex w-fit items-center text-sm text-slate-500 transition-colors duration-200 hover:text-white"
                >
                  {item.name}

                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Connect
            </h3>

            <div className="mt-6 grid gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-fit items-center gap-3 text-sm text-slate-500 transition-colors duration-200 hover:text-white"
                  >
                    <Icon className="h-5 w-5 text-slate-500 transition-colors duration-200 group-hover:text-cyan-400" />

                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Let&apos;s Connect
            </h3>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              Have a project, collaboration, or just want to say hello?
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_10px_35px_rgba(34,211,238,0.1)]"
            >
              <Mail className="mr-2 h-4 w-4" />

              Get in Touch

              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-600">
            © {new Date().getFullYear()} Aaditya Verma. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-slate-600">
            <span>Built with Next.js</span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <span>Designed with purpose</span>
          </div>
        </div>
      </div>
    </footer>
  );
}