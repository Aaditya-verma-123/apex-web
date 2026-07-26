"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


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
  image,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
  y: -10,
  scale: 1.02,
}}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
    >
      <div className="group relative h-60 overflow-hidden">
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover transition duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
</div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-3 text-zinc-400">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/20"
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
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 transition hover:-translate-y-1 hover:bg-white/10"
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
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}