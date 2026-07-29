"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

import { NAVIGATION } from "@/lib/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
        animate={{
          y: 0,
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container className="pt-4">
          <nav
            className={`flex items-center justify-between rounded-2xl border transition-all duration-300 ${
              scrolled
                ? "border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl"
                : "border-transparent bg-transparent"
            } px-6 py-4`}
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {NAVIGATION.map((item) => (
                <NavItem
                  key={item.id}
                  name={item.name}
                  href={item.href}
                />
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="hidden lg:inline-flex"
              >
                <Link href="/resume">
                  Download Resume
                </Link>
              </Button>

              <button
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white lg:hidden"
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