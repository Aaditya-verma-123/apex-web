"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import CertificateHero from "@/components/certificates/CertificateHero";
import CertificateGrid from "@/components/certificates/CertificateGrid";

import { CertificateProvider } from "@/context/CertificateContext";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-28"
    >
      <CertificateProvider>
        <Container>
          <SectionTitle
            eyebrow="Achievements"
            title="Professional Certifications"
            description="Verified credentials earned through continuous learning and hands-on practice."
          />

          <div className="mt-14">
            <CertificateHero />
          </div>

          <CertificateGrid />
        </Container>
      </CertificateProvider>
    </section>
  );
}