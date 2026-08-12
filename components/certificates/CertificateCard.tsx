"use client";

import Image from "next/image";
import Link from "next/link";
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

interface CertificateCardProps {
  certificate: Certificate;
  featured?: boolean;
}

export default function CertificateCard({
  certificate,
  featured = false,
}: CertificateCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="group h-full"
    >
      <GlassCard
        className="
          h-full overflow-hidden
          transition-all duration-300
          hover:border-cyan-400/30
          hover:bg-white/[0.07]
          hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]
        "
      >
        {/* Certificate Image */}
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[1200/850]" : "aspect-[1200/850]"
          }`}
        >
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 896px"
                : "(max-width: 768px) 100vw, 50vw"
            }
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />

          <div className="absolute left-5 top-5">
            <Badge variant="success">
              <BadgeCheck className="mr-1 h-3 w-3" />
              {certificate.status}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {certificate.issuer}
          </p>

          <h3
            className={`mt-3 font-bold text-white ${
              featured
                ? "text-3xl"
                : "text-2xl"
            }`}
          >
            {certificate.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {certificate.description}
          </p>

          {/* Meta */}
          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <CalendarDays className="h-4 w-4 text-cyan-400" />
            {certificate.issued}
          </div>

          <p className="mt-2 break-all text-sm text-slate-400">
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
                className="
                  transition-all
                  duration-300
                  group-hover:border-cyan-500/40
                  group-hover:bg-cyan-500/10
                  group-hover:text-cyan-300
                "
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              asChild
              className="w-full justify-center gap-2"
            >
              <Link
                href={`/certificates/${certificate.slug}`}
              >
                View Details

                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}