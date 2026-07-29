"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group inline-flex items-center gap-3"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: -2,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <Image
          src="/logo/apex-logo.png"
          alt="APEX WEB Logo"
          width={48}
          height={48}
          priority
          className="drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
        />
      </motion.div>

      <div className="leading-none">
        <h1 className="text-xl font-black tracking-wide text-white transition-colors duration-300 group-hover:text-cyan-400">
          APEX
        </h1>

        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.45em] text-slate-400">
          WEB
        </p>
      </div>
    </Link>
  );
}