"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  BadgeCheck,
  ExternalLink,
  Download,
} from "lucide-react";

import type { Certificate } from "@/data/certificates";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface CertificateHeroProps {
  certificate: Certificate;
}

export default function CertificateHero({
  certificate,
}: CertificateHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <Container>
        {/* Back Navigation */}
        <Link
          href="/certificates"
          className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Certificates
        </Link>

        <div className="relative z-10 mt-12 grid items-center gap-16 lg:grid-cols-2">
          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="success">
              <BadgeCheck className="mr-1 h-3 w-3" />
              {certificate.status}
            </Badge>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {certificate.title}
            </h1>

            <p className="mt-5 text-lg font-medium text-cyan-400">
              {certificate.issuer}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {certificate.description}
            </p>

            <div className="mt-8 flex items-center gap-2 text-slate-400">
              <CalendarDays className="h-5 w-5 text-cyan-400" />
              <span>{certificate.issued}</span>
            </div>

            <div className="mt-4 break-all text-sm text-slate-400">
              <span className="font-semibold text-white">
                Credential ID:
              </span>{" "}
              {certificate.credentialId}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View PDF
                </a>
              </Button>

              <Button variant="secondary" asChild>
                <a href={certificate.pdf} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>

              {certificate.verificationUrl && (
                <Button variant="secondary" asChild>
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Certificate
                  </a>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                width={1200}
                height={850}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}