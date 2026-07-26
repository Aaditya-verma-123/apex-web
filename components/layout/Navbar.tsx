"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container";
import { NAVIGATION } from "@/lib/navigation";
import useActiveSection from "@/hooks/useActiveSection";
export default function Navbar() {
  const active = useActiveSection(); 
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <Container>
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-6 py-4 backdrop-blur-xl">

  {/* Left side */}
  <div className="flex items-center gap-4">
    {/* Mobile Menu Button */}
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>

    {/* Logo */}
    <Link
      href="/"
      className="text-lg font-bold tracking-wide"
    >
      APEX WEB
    </Link>
  </div>

  {/* Desktop Navigation */}
  <div className="hidden items-center gap-2 md:flex">
    {NAVIGATION.map((item) => (
      <a
        key={item.id}
        href={item.href}
        className={`relative rounded-lg px-4 py-2 text-sm font-medium transition ${
          active === item.id
            ? "text-white"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        {active === item.id && (
          <motion.span
            layoutId="active-pill"
            className="absolute inset-0 -z-10 rounded-lg bg-white/10"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        )}
        {item.label}
      </a>
    ))}
  </div>

  {/* Desktop Resume Button */}
  <a
    href="/resume/resume.pdf"
    target="_blank"
    className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 md:inline-flex"
  >
    Resume
  </a>

</nav>
        <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="mt-3 rounded-2xl border border-white/10 bg-zinc-900/90 p-6 backdrop-blur-xl md:hidden"
    >
      <div className="flex flex-col gap-4">
        {NAVIGATION.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`rounded-lg px-3 py-2 transition ${
              active === item.id
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}

        <a
          href="/resume/resume.pdf"
          target="_blank"
          onClick={() => setOpen(false)}
          className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
        >
          Resume
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </Container>
    </header>
  );
}