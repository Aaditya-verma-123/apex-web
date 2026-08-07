"use client";

import {
  Download,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import type { Certificate } from "@/data/certificates";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface Props {
  certificate: Certificate;
}

export default function CertificateActions({
  certificate,
}: Props) {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-1xl">
          <h2 className="text-3xl font-bold text-white">
            Certificate Actions
          </h2>

          <p className="mt-3 text-slate-400">
            View, download, or verify this certificate.
          </p>

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

            <Button
              variant="secondary"
              asChild
            >
              <a href={certificate.pdf} download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
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
                  rel="noopener noreferrer"
                >
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Verify Certificate
                </a>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}