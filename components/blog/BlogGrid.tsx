"use client";

import { motion } from "framer-motion";

import { blogPosts } from "@/data/blog";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  const featured = blogPosts.find(
    (post) => post.featured
  );

  const others = blogPosts.filter(
    (post) => !post.featured
  );

  return (
    <div>
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <BlogCard
            post={featured}
            featured
          />
        </motion.div>
      )}

      {others.length > 0 && (
        <div>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              More Articles
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              More From My Journey
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {others.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}