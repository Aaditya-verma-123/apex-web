import { notFound } from "next/navigation";

import { certificates } from "@/data/certificates";

import CertificateHero from "@/components/certificates/CertificateHero";
import CertificatePreview from "@/components/certificates/CertificatePreview";
import CertificateOverview from "@/components/certificates/CertificateOverview";
import CertificateSkills from "@/components/certificates/CertificateSkills";
import CertificateActions from "@/components/certificates/CertificateActions";
import RelatedCertificates from "@/components/certificates/RelatedCertificates";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CertificatePage({
  params,
}: Props) {
  const { slug } = await params;

  const certificate = certificates.find(
    (c) => c.slug === slug
  );

  if (!certificate) {
    notFound();
  }

  return (
    <>
      <CertificateHero certificate={certificate} />

      <CertificatePreview certificate={certificate} />

      <CertificateOverview certificate={certificate} />

      <CertificateSkills certificate={certificate} />

      <CertificateActions certificate={certificate} />

      <RelatedCertificates currentCertificate={certificate} />
    </>
  );
}