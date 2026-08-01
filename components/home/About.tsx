"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { ABOUT_CARDS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32 py-28">
      <Container>
        <SectionTitle
          eyebrow="ABOUT"
          title="Get to know me"
          description="I'm passionate about building secure, modern web applications while continuously learning new technologies and improving my skills."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ABOUT_CARDS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <Icon className="h-10 w-10 text-blue-400" />

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-zinc-400 leading-7">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}