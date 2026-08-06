"use client";

import GlassCard from "@/components/ui/GlassCard";
import { resume } from "@/data/resume";

export default function ResumeViewer() {
  return (
    <GlassCard className="mt-8 overflow-hidden rounded-3xl border border-white/10">
      <iframe
        src={`${resume.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
        title="Resume Preview"
        className="h-[900px] w-full bg-white"
      />
    </GlassCard>
  );
}