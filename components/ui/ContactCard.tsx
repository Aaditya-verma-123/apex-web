"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

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
      className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-xl transition"
    >
      <Icon className="mb-4 h-7 w-7 text-blue-400" />

      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 break-all text-zinc-400">
        {value}
      </p>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
}