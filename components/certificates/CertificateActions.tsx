"use client";

import {
  Download,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import type { Certificate } from "@/data/certificates";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

interface Props {
  certificate: Certificate;
}

export default function CertificateActions({
  certificate,
}: Props) {
  return (
    <section className="relative py-24">
      <Container>
        <GlassCard className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
          {/* Accent glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-[80px]"
          />

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Credential Access
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Certificate Actions
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Access the original document, download a copy, or
              verify the credential through its official verification
              page.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View PDF
                </a>
              </Button>

              <Button
                variant="secondary"
                asChild
              >
                <a
                  href={certificate.pdf}
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>

              {certificate.verificationUrl && (
                <Button
                  variant="secondary"
                  asChild
                >
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Verify Certificate
                  </a>
                </Button>
              )}
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}