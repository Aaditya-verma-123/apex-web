"use client";

import Container from "@/components/ui/Container";
import ResumeHero from "./ResumeHero";
import ResumeActions from "./ResumeActions";
import ResumeViewer from "./ResumeViewer";

export default function Resume() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <section className="relative py-24 pt-36">
        <Container>
          <ResumeHero />

          <ResumeActions />

          <ResumeViewer />
        </Container>
      </section>
    </main>
  );
}