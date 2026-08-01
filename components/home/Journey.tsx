"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import Timeline from "@/components/journey/Timeline";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-28"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <Container>
        <SectionTitle
          eyebrow="Journey"
          title="My Learning Journey"
          description="Every project, course, and milestone has helped shape my path as a developer. This timeline highlights the experiences that continue to drive my growth."
        />

        <Timeline />
      </Container>
    </section>
  );
}