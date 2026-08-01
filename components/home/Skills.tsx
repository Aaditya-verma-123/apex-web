"use client";

import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";

import SkillCard from "@/components/skills/SkillCard";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28"
    >
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I Work With"
          description="A collection of technologies, tools, and cybersecurity concepts that I use to build modern applications while continuously expanding my expertise."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}