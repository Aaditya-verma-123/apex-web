"use client";

import {
  BadgeCheck,
  CalendarDays,
  Fingerprint,
  ShieldCheck,
} from "lucide-react";

import type { Certificate } from "@/data/certificates";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";

interface Props {
  certificate: Certificate;
}

export default function CertificateOverview({
  certificate,
}: Props) {
  const details = [
    {
      icon: BadgeCheck,
      label: "Issuer",
      value: certificate.issuer,
    },
    {
      icon: CalendarDays,
      label: "Issued",
      value: certificate.issued,
    },
    {
      icon: Fingerprint,
      label: "Credential ID",
      value: certificate.credentialId,
    },
    {
      icon: ShieldCheck,
      label: "Status",
      value: certificate.status,
    },
  ];

  return (
    <section className="relative py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Credential Information
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Certificate Overview
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-400">
            Key information associated with this credential.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <GlassCard
                key={detail.label}
                className="group p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-5 w-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      {detail.label}
                    </p>

                    <p className="mt-2 break-all text-base font-medium text-white">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}