"use client";

import { motion } from "framer-motion";

import { timeline } from "@/data/timeline";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

export default function Journey() {
  return (
    <section id="journey" className="scroll-mt-32 py-28">
      <Container>
        <SectionTitle
          eyebrow="JOURNEY"
          title="My Learning Journey"
          description="Every milestone represents another step in my journey as a developer, cybersecurity learner, and future AI engineer."
        />

        <div className="relative mt-20">
          {/* Timeline Line */}
          <div className="absolute left-3 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent shadow-[0_0_25px_rgba(34,211,238,0.35)]" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const badgeVariant =
                item.status === "completed"
                  ? "success"
                  : item.status === "current"
                  ? "warning"
                  : "info";

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 350,
                    damping: 20,
                  }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 180,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="absolute -left-[44px] top-8 z-20 flex h-7 w-7 items-center justify-center rounded-full border-4 border-zinc-950 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                  >
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </motion.div>

                  <GlassCard className="ml-14 p-7 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <Badge variant={badgeVariant}>
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </Badge>

                      <Badge variant="outline">
                        {item.year}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}