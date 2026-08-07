"use client";

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
    <section className="py-24">
      <Container>

        <h2 className="mb-10 text-3xl font-bold text-white">
          Certificate Preview
        </h2>

        <GlassCard className="overflow-hidden rounded-3xl p-0">

          <iframe
            src={certificate.pdf}
            title={certificate.title}
            className="h-[900px] w-full"
          />

        </GlassCard>

      </Container>
    </section>
  );
}