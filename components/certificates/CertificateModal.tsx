"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Download,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { useCertificate } from "@/context/CertificateContext";

export default function CertificateModal() {
  const {
    selectedCertificate,
    isOpen,
    closeCertificate,
    nextCertificate,
    previousCertificate,
    certificates,
  } = useCertificate();

  if (!selectedCertificate) return null;

  const currentIndex = certificates.findIndex(
    (c) => c.id === selectedCertificate.id
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-6"
          >
            <div className="relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">

              {/* Close */}
              <button
                onClick={closeCertificate}
                className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2 transition hover:bg-white/20"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              {/* Navigation */}
              <div className="absolute left-5 top-5 z-20 flex items-center gap-3">

                <button
                  onClick={previousCertificate}
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  {currentIndex + 1} / {certificates.length}
                </span>

                <button
                  onClick={nextCertificate}
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>

              </div>

              {/* Image */}
              <div className="relative h-[650px] w-full">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <h2 className="text-3xl font-bold text-white">
                  {selectedCertificate.title}
                </h2>

                <p className="mt-2 text-blue-400">
                  {selectedCertificate.issuer}
                </p>

                <div className="mt-5 flex items-center gap-2 text-slate-400">
                  <CalendarDays className="h-4 w-4" />
                  {selectedCertificate.date}
                </div>

                <p className="mt-3 text-slate-300">
                  <strong>Credential ID:</strong>{" "}
                  {selectedCertificate.credentialId}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">

                  <Button asChild>
                    <a
                      href={selectedCertificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      href={selectedCertificate.pdf}
                      download
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>

                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}