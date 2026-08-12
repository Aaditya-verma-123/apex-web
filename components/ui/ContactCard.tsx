"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";

type ContactCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
};

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      className="
        group
        rounded-2xl
        border border-white/10
        bg-zinc-900/60
        p-6
        backdrop-blur-xl
        transition-all duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.07]
        hover:shadow-[0_15px_45px_rgba(34,211,238,0.08)]
      "
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
          <Icon
            aria-hidden="true"
            className="h-5 w-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 break-all text-sm text-zinc-400">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        {content}
      </a>
    );
  }

  return content;
}