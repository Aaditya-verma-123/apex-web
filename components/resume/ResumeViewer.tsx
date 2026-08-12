"use client";

import {
  FileText,
  Maximize2,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import { resume } from "@/data/resume";

export default function ResumeViewer() {
  return (
    <div className="mt-16">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-cyan-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Document
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Resume Preview
          </h2>

          <p className="mt-3 text-slate-400">
            Preview the latest version of my resume directly here.
          </p>
        </div>

        <a
          href={resume.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
        >
          <Maximize2 className="h-4 w-4" />
          Open full document
        </a>
      </div>

      <GlassCard className="overflow-hidden rounded-3xl p-0">
        <div className="border-b border-white/10 bg-white/[0.02] px-5 py-3">
          <p className="truncate text-sm text-slate-500">
            Aaditya_Verma_Resume.pdf
          </p>
        </div>

        <iframe
          src={`${resume.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
          title="Aaditya Verma Resume Preview"
          className="h-[750px] w-full border-0 bg-white sm:h-[900px]"
        />
      </GlassCard>
    </div>
  );
}