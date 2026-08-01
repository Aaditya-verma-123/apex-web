"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import Button from "@/components/ui/Button";
import { NAVIGATION } from "@/lib/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col border-l border-white/10 bg-slate-950 px-6 py-6 md:hidden"
          >
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">
                Menu
              </h2>

              <button
                onClick={onClose}
                className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Button
              asChild
              size="lg"
              className="mt-8 w-full"
            >
              <Link href="/resume">
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}