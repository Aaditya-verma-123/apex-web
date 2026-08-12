"use client";

import { BrainCircuit } from "lucide-react";

import type { Certificate } from "@/data/certificates";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

interface Props {
  certificate: Certificate;
}

export default function CertificateSkills({
  certificate,
}: Props) {
  return (
    <section className="relative py-24">
      <Container>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <BrainCircuit className="h-5 w-5 text-cyan-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Knowledge & Skills
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Skills Acquired
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-400">
            Key technical concepts and capabilities covered by this
            certification.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {certificate.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="px-4 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}