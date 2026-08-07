"use client";

import type { Certificate } from "@/data/certificates";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";

interface Props {
  certificate: Certificate;
}

export default function CertificateOverview({
  certificate,
}: Props) {
  return (
    <section className="py-20">
      <Container>

        <h2 className="mb-10 text-3xl font-bold text-white">
          Overview
        </h2>

        <GlassCard className="p-8">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Issuer
              </h3>

              <p className="text-slate-400">
                {certificate.issuer}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Issued
              </h3>

              <p className="text-slate-400">
                {certificate.issued}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Credential ID
              </h3>

              <p className="text-slate-400">
                {certificate.credentialId}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Status
              </h3>

              <p className="text-slate-400">
                {certificate.status}
              </p>
            </div>

          </div>

        </GlassCard>

      </Container>
    </section>
  );
}