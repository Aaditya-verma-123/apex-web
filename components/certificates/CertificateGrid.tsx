"use client";

import {
  Award,
  Sparkles,
} from "lucide-react";

import { certificates } from "@/data/certificates";

import CertificateCard from "./CertificateCard";

import Badge from "@/components/ui/Badge";
import { FadeUp } from "@/components/animations";

export default function CertificateGrid() {
  const featured = certificates.find(
    (certificate) => certificate.featured
  );

  const others = certificates.filter(
    (certificate) => !certificate.featured
  );

  return (
    <div className="space-y-24">
      {/* Featured Certificate */}
      {featured && (
        <section>
          <FadeUp>
            <div className="flex items-center gap-3">
              <Badge variant="info">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                Featured Credential
              </Badge>

              <span className="text-sm text-slate-500">
                Latest highlighted achievement
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {featured.title}
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              A detailed credential with verification information,
              skills, and supporting documentation.
            </p>
          </FadeUp>

          <div className="mt-10">
            <CertificateCard
              certificate={featured}
              featured
            />
          </div>
        </section>
      )}

      {/* Other Certificates */}
      {others.length > 0 && (
        <section>
          <FadeUp>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-cyan-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Credential Collection
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              More Certifications
            </h2>

            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
              Additional certifications completed throughout my
              cybersecurity learning journey.
            </p>
          </FadeUp>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {others.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}