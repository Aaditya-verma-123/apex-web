"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import ResumeHero from "./ResumeHero";
import ResumeActions from "./ResumeActions";
import ResumeViewer from "./ResumeViewer";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-28"
    >
      <Container>
        <SectionTitle
          eyebrow="Professional"
          title="Resume"
          description="A complete overview of my education, technical skills, certifications, and projects."
        />

        <div className="mt-14">
          <ResumeHero />
          <ResumeActions />
          <ResumeViewer />
        </div>
      </Container>
    </section>
  );
}