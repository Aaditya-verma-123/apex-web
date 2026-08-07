"use client";

import { certificates } from "@/data/certificates";

import CertificateCard from "./CertificateCard";

export default function CertificateGrid() {
  const featured = certificates.find(
    (certificate) => certificate.featured
  );

  const others = certificates.filter(
    (certificate) => !certificate.featured
  );

  return (
    <div className="mt-16 space-y-10">
      {featured && (
        <CertificateCard
          featured
          certificate={featured}
        />
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {others.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
          />
        ))}
      </div>
    </div>
  );
}