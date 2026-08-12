import {
  Award,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

import { certificates } from "@/data/certificates";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations";

import CertificateGrid from "@/components/certificates/CertificateGrid";

export default function CertificatesPage() {
  const completed = certificates.filter(
    (certificate) => certificate.status === "Completed"
  ).length;

  const categories = new Set(
    certificates.map((certificate) => certificate.category)
  ).size;

  return (
    <main className="relative overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <section className="relative py-24 pt-36">
        <Container>
          {/* Header */}
          <FadeUp>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-cyan-400" />

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Certifications
                </p>
              </div>

              <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Skills backed by
                <span className="text-cyan-400">
                  {" "}credentials.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
                A collection of certifications earned while developing
                practical knowledge in cybersecurity, technology, and
                professional skills.
              </p>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.12}>
            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              <GlassCard className="p-5">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-cyan-400" />

                  <div>
                    <p className="text-3xl font-bold text-white">
                      {certificates.length}
                    </p>

                    <p className="text-sm text-slate-500">
                      Certificates
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-5">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-emerald-400" />

                  <div>
                    <p className="text-3xl font-bold text-emerald-400">
                      {completed}
                    </p>

                    <p className="text-sm text-slate-500">
                      Completed
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />

                  <div>
                    <p className="text-3xl font-bold text-white">
                      {categories}
                    </p>

                    <p className="text-sm text-slate-500">
                      Categories
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </FadeUp>

          {/* Certificate Collection */}
          <div className="mt-24">
            <CertificateGrid />
          </div>
        </Container>
      </section>
    </main>
  );
}