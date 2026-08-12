"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CertificateGrid from "@/components/certificates/CertificateGrid";

export default function Certificates() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Certifications"
          title="My Certifications"
          description="Professional certifications and learning milestones from my cybersecurity journey."
        />

        <div className="mt-14">
          <CertificateGrid />
        </div>
      </Container>
    </section>
  );
}