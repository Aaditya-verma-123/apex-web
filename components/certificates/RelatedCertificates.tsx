"use client";

import {
  ArrowUpRight,
  Award,
} from "lucide-react";

import { certificates } from "@/data/certificates";
import type { Certificate } from "@/data/certificates";
import Link from "next/link";

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
      (certificate) =>
        certificate.id !== currentCertificate.id
    )
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-cyan-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Continue Exploring
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Related Certificates
            </h2>

            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
              Explore more credentials from my cybersecurity learning
              journey.
            </p>
          </div>

          <Link
  href="/certificates"
  className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
>
  View all certificates
  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
</Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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