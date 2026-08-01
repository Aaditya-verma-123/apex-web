"use client";

import { motion } from "framer-motion";
import { Mail, Copy, Download } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa6";
import { toast } from "sonner";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactCard from "@/components/ui/ContactCard";
import Button from "@/components/ui/Button";

import { CONTACT } from "@/lib/data";

const cards = [
  {
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "Aaditya-verma-123",
    href: CONTACT.github,
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Aaditya Verma",
    href: CONTACT.linkedin,
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    value: "___aaditya_verma___",
    href: CONTACT.instagram,
  },
  {
    icon: FaDiscord,
    title: "Discord",
    value: CONTACT.discord,
  },
];

export default function ContactCTA() {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      toast.success("Email copied to clipboard!");
    } catch {
      toast.error("Failed to copy email.");
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-32 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <Container>
        <SectionTitle
          eyebrow="CONTACT"
          title="Let's Connect"
          description="Whether you have a project, collaboration, or simply want to say hello, I'd love to hear from you."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <ContactCard {...card} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Button onClick={copyEmail}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Email
          </Button>

          <Button variant="secondary" asChild>
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm text-zinc-500"
        >
          Looking forward to connecting, collaborating, and building meaningful
          technology together.
        </motion.p>
      </Container>
    </section>
  );
}