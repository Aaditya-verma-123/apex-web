"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const journey = [
  {
    year: "2024",
    title: "Started Web Development",
    description:
      "Learned HTML, CSS and JavaScript while building my first responsive websites and exploring modern frontend development.",
  },
  {
    year: "2025",
    title: "Cybersecurity Journey",
    description:
      "Started the Google Cybersecurity Professional Certificate and developed a strong foundation in networking, Linux and security fundamentals.",
  },
  {
    year: "2026",
    title: "IIT Madras BS Degree",
    description:
      "Began the IIT Madras BS Degree while improving my software engineering, AI and full-stack development skills.",
  },
  {
    year: "Future",
    title: "B.Tech & AI Engineer",
    description:
      "Planning to pursue B.Tech in Computer Science and build AI-powered products with real-world impact while contributing to open source.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="scroll-mt-32 py-28">
      <Container>
        <SectionTitle
          eyebrow="JOURNEY"
          title="My Learning Journey"
          description="Every milestone has shaped my skills, mindset and long-term vision."
        />

        <div className="relative mt-20">

          {/* Timeline Line */}
          <div className="absolute left-3 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />

          <div className="space-y-12">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                                whileHover={{
                  y: -8,
                  scale: 1.025,
                }}
                transition={{
  duration: 0.35,
  delay: index * 0.06,
  ease: "easeOut",
  type: "spring",
  stiffness: 350,
  damping: 20,
}}

                
                className="relative ml-14 rounded-3xl border border-white/10 bg-zinc-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[58px] top-8 flex h-7 w-7 items-center justify-center rounded-full border-4 border-zinc-950 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Year */}
                <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-300">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}