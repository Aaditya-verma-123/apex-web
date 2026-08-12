"use client";

import {
  FileText,
  Maximize2,
} from "lucide-react";

import type { Certificate } from "@/data/certificates";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";

interface Props {
  certificate: Certificate;
}

export default function CertificatePreview({
  certificate,
}: Props) {
  return (
    <section className="relative py-24">
      <Container>
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-cyan-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Documentation
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Certificate Preview
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                View the original certificate directly from this page.
              </p>
            </div>

            <a
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
            >
              <Maximize2 className="h-4 w-4" />
              Open full document
            </a>
          </div>
        </div>

        <GlassCard className="overflow-hidden rounded-3xl p-0">
          <div className="border-b border-white/10 bg-white/[0.02] px-5 py-3">
            <p className="truncate text-sm text-slate-500">
              {certificate.title}
            </p>
          </div>

          <iframe
            src={`${certificate.pdf}#toolbar=0&navpanes=0`}
            title={`${certificate.title} PDF preview`}
            className="h-[750px] w-full border-0 bg-white sm:h-[900px]"
          />
        </GlassCard>
      </Container>
    </section>
  );
}