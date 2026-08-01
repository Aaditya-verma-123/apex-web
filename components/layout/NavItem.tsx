"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface NavItemProps {
  name: string;
  href: string;
}

export default function NavItem({
  name,
  href,
}: NavItemProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className="relative"
    >
      <motion.span
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative px-1 py-2 text-sm font-medium transition-colors duration-300",
          active
            ? "text-cyan-400"
            : "text-slate-300 hover:text-white"
        )}
      >
        {name}

        {active && (
          <motion.span
            layoutId="navbar-indicator"
            className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-cyan-400"
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 35,
            }}
          />
        )}
      </motion.span>
    </Link>
  );
}