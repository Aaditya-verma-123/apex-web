"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl"
    >

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-3 text-zinc-400">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500"
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10"
            >
              <Code2 size={18} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}