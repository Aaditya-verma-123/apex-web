"use client";

import { motion } from "framer-motion";
import { Mail, Copy } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa6";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactCard from "@/components/ui/ContactCard";

import { CONTACT } from "@/lib/data";

export default function Contact() {
  async function copyEmail() {
    await navigator.clipboard.writeText(CONTACT.email);
    alert("Email copied!");
  }

  return (
    <section
      id="contact"
      className="scroll-mt-32 py-28"
    >
      <Container>
        <SectionTitle
          eyebrow="CONTACT"
          title="Let's Connect"
          description="Feel free to reach out through any of these platforms."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          <ContactCard
            icon={Mail}
            title="Email"
            value={CONTACT.email}
          />

          <ContactCard
  icon={FaGithub}
  title="GitHub"
  value="Aaditya-verma-123"
  href={CONTACT.github}
/>

<ContactCard
  icon={FaLinkedin}
  title="LinkedIn"
  value="Aaditya Verma"
  href={CONTACT.linkedin}
/>

<ContactCard
  icon={FaInstagram}
  title="Instagram"
  value="___aaditya_verma___"
  href={CONTACT.instagram}
/>

          <ContactCard
            icon={FaDiscord}
            title="Discord"
            value={CONTACT.discord}
          />
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            <Copy size={18} />
            Copy Email
          </button>

          <a
            href="/resume/resume.pdf"
            target="_blank"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            Download Resume
          </a>
        </div>
      </Container>
    </section>
  );
}