"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

import { NAVIGATION } from "@/lib/navigation";

const primaryNavigation = NAVIGATION.filter(
  (item) =>
    !["dashboard", "contact"].includes(item.id)
);

const moreNavigation = NAVIGATION.filter(
  (item) =>
    ["dashboard", "contact"].includes(item.id)
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container>
          <nav
            className={`flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
              scrolled
                ? "border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-5 xl:flex">
              {primaryNavigation.map((item) => (
                <NavItem
                  key={item.id}
                  name={item.name}
                  href={item.href}
                />
              ))}

              {/* More */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((open) => !open)}
                  className="flex items-center gap-1 px-1 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  More

                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        scale: 0.97,
                      }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-3 w-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl"
                    >
                      {moreNavigation.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="hidden xl:inline-flex"
              >
                <Link href="/resume">
                  Download Resume
                </Link>
              </Button>

              <button
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white xl:hidden"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}