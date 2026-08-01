"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

import type { Certificate } from "@/data/certificates";

import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { useCertificate } from "@/context/CertificateContext";

interface CertificateCardProps {
  certificate: Certificate;
  featured?: boolean;
}

export default function CertificateCard({
  certificate,
  featured = false,
}: CertificateCardProps) {
  const { openCertificate } = useCertificate();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group h-full"
    >
      <GlassCard className="overflow-hidden rounded-3xl p-0 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_25px_60px_rgba(59,130,246,.18)]">

        {/* Preview */}
        <div
          className={`relative overflow-hidden ${
            featured ? "h-[380px]" : "h-64"
          }`}
        >
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            priority={featured}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent" />

          <div className="absolute left-5 top-5">
            <Badge variant="success">
              <BadgeCheck className="mr-1 h-3 w-3" />
              {certificate.status}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            {certificate.issuer}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {certificate.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {certificate.description}
          </p>

          {/* Date */}
          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <CalendarDays className="h-4 w-4 text-blue-400" />
            {certificate.date}
          </div>

          {/* Credential */}
          <p className="mt-2 text-sm text-slate-400">
            <span className="font-semibold text-white">
              Credential ID:
            </span>{" "}
            {certificate.credentialId}
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8">
            <Button
              onClick={() => openCertificate(certificate)}
            >
              View Certificate

              <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}