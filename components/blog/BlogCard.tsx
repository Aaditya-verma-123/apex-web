"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

import type { BlogPost } from "@/data/blog";

import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({
  post,
  featured = false,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="group h-full"
    >
      <GlassCard
        className={`flex h-full flex-col p-7 ${
          featured ? "border-cyan-400/20" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Badge variant="info">
            {post.category}
          </Badge>

          <ArrowUpRight className="h-5 w-5 text-slate-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
        </div>

        <h2
          className={`mt-6 font-bold text-white ${
            featured
              ? "text-3xl"
              : "text-2xl"
          }`}
        >
          {post.title}
        </h2>

        <p className="mt-4 flex-1 leading-7 text-slate-400">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-cyan-400" />
            {post.published}
          </span>

          <span className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-cyan-400" />
            {post.readTime}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-8 inline-flex w-fit items-center font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
        >
          Read Article
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </GlassCard>
    </motion.div>
  );
}