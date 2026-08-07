"use client";

import type { Certificate } from "@/data/certificates";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

interface Props {
  certificate: Certificate;
}

export default function CertificateSkills({
  certificate,
}: Props) {
  return (
    <section className="py-20">
      <Container>

        <h2 className="mb-10 text-3xl font-bold text-white">
          Skills Acquired
        </h2>

        <div className="flex flex-wrap gap-3">

          {certificate.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
            >
              {skill}
            </Badge>
          ))}

        </div>

      </Container>
    </section>
  );
}