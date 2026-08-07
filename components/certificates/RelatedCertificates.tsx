"use client";

import { certificates } from "@/data/certificates";
import type { Certificate } from "@/data/certificates";

import Container from "@/components/ui/Container";
import CertificateCard from "./CertificateCard";

interface Props {
  currentCertificate: Certificate;
}

export default function RelatedCertificates({
  currentCertificate,
}: Props) {

  const related = certificates
    .filter(
      (c) => c.id !== currentCertificate.id
    )
    .slice(0, 3);

  return (
    <section className="py-24">
      <Container>

        <h2 className="mb-10 text-3xl font-bold text-white">
          Related Certificates
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {related.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}