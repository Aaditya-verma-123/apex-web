"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const items = [
  {
    title: "APEX WEB",
    description:
      "Building a premium personal portfolio using Next.js, TypeScript, Tailwind CSS, and Framer Motion with a strong focus on UI, animations, and performance.",
    status: "Active Project",
    variant: "success" as const,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
    href: "/projects",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    description:
      "Learning networking, Linux, SQL, security operations, and security best practices while building a strong cybersecurity foundation.",
    status: "Learning",
    variant: "info" as const,
    technologies: [
      "Linux",
      "Networking",
      "SQL",
      "Security",
    ],
    href: "/journey",
  },
  {
    title: "AI Assistant",
    description:
      "Designing an intelligent assistant that combines automation, AI, and productivity features. Currently in planning and research.",
    status: "Coming Soon",
    variant: "warning" as const,
    technologies: [
      "AI",
      "Python",
      "LLMs",
      "Automation",
    ],
    href: "/projects",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Currently Building"
          title="What I'm Working On"
          description="I'm continuously learning new technologies while building projects that improve my skills and solve real-world problems."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Card className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <Badge variant={item.variant}>
                    <span className="mr-2 h-2 w-2 rounded-full bg-current" />
                    {item.status}
                  </Badge>

                  <ExternalLink
                    size={18}
                    className="text-slate-500"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-8 w-fit px-0"
                >
                  <Link href={item.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}