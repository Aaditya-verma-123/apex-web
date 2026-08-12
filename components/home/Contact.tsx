"use client";

import { motion } from "framer-motion";
import {
  Copy,
  Download,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { toast } from "sonner";

import Container from "@/components/ui/Container";
import ContactCard from "@/components/ui/ContactCard";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

import { CONTACT } from "@/lib/data";

const cards = [
  {
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
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
    <main className="relative overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <section className="relative py-24 pt-36">
        <Container>
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-cyan-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Contact
              </p>
            </div>

            <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s
              <span className="text-cyan-400">
                {" "}Connect.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              Have a project, idea, collaboration, or simply want to
              say hello? Feel free to reach out through any of the
              platforms below.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="relative z-10 mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <ContactCard {...card} />
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <GlassCard className="relative mt-10 overflow-hidden p-8 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[80px]"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Quick Actions
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Want to get in touch?
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                  Copy my email or take a look at my resume before
                  reaching out.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={copyEmail}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Email
                </Button>

                <Button variant="secondary" asChild>
                  <a
                    href="/resume/Aaditya_Verma_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </GlassCard>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-16 max-w-2xl text-center"
          >
            <Send className="mx-auto h-7 w-7 text-cyan-400" />

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Always open to learning, collaborating, and building
              meaningful technology.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}