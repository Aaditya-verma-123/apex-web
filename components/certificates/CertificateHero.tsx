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
    <section className="relative overflow-hidden py-24">
      <Container>
        <Link
          href="/certificates"
          className="mb-10 inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Certificates
        </Link>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
          >
            <Badge variant="success">
              <BadgeCheck className="mr-1 h-3 w-3" />
              {certificate.status}
            </Badge>

            <h1 className="mt-6 text-5xl font-bold text-white">
              {certificate.title}
            </h1>

            <p className="mt-5 text-lg text-cyan-400">
              {certificate.issuer}
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              {certificate.description}
            </p>

            <div className="mt-8 flex items-center gap-2 text-slate-400">
              <CalendarDays className="h-5 w-5 text-cyan-400" />
              {certificate.issued}
            </div>

            <div className="mt-4">
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
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View PDF
                </a>
              </Button>

              <Button
                variant="secondary"
                asChild
              >
                <a
                  href={certificate.pdf}
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>

              {certificate.verificationUrl && (
                <Button
                  variant="secondary"
                  asChild
                >
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                  >
                    Verify
                  </a>
                </Button>
              )}

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={900}
                height={700}
                className="w-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}