"use client";

import { useCertificate } from "@/context/CertificateContext";

import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";

export default function CertificateGrid() {
  const { certificates } = useCertificate();

  const [featured, ...others] = certificates;

  return (
    <>
      <div className="mt-16 space-y-10">
        <CertificateCard
          featured
          certificate={featured}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {others.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>
      </div>

      <CertificateModal />
    </>
  );
}