"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-32 py-28">
      <Container>
        <SectionTitle
          eyebrow="SKILLS"
          title="Technologies I work with"
          description="Tools and technologies I'm currently using and continuously improving."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SKILLS.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-[0_15px_45px_rgba(59,130,246,0.2)]">
                  <motion.div
  whileHover={{
    rotate: 10,
    scale: 1.15,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
>
  <Icon className="h-10 w-10 text-blue-400" />
</motion.div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {category.title}
                  </h3>
                  <div className="mt-4">
  <div className="mb-2 flex justify-between text-sm text-zinc-400">
    <span>Proficiency</span>
    <span>{category.level}%</span>
  </div>

  <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${category.level}%` }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: index * 0.15,
      }}
      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
    />
  </div>
</div>

                  <ul className="mt-5 space-y-2 text-zinc-400">
                    {category.skills.map((skill) => (
                      <li
  key={skill}
  className="flex items-center gap-2 transition hover:text-white"
>
  <span className="h-2 w-2 rounded-full bg-cyan-400" />
  {skill}
</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}