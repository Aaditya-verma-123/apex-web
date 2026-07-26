"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-28">
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
                <Card className="h-full">
                  <Icon className="h-10 w-10 text-blue-400" />

                  <h3 className="mt-6 text-xl font-semibold">
                    {category.title}
                  </h3>

                  <ul className="mt-5 space-y-2 text-zinc-400">
                    {category.skills.map((skill) => (
                      <li key={skill}>• {skill}</li>
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