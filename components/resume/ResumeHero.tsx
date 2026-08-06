"use client";

import { FileText, Award, FolderKanban, Calendar } from "lucide-react";

import { resume } from "@/data/resume";
import GlassCard from "@/components/ui/GlassCard";

export default function ResumeHero() {
  return (
    <GlassCard className="rounded-3xl border border-white/10 p-8">
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        Resume
      </span>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {resume.title}
      </h2>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
        {resume.description}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          icon={<FileText className="h-5 w-5" />}
          label="Pages"
          value={resume.pages}
        />

        <Stat
          icon={<FolderKanban className="h-5 w-5" />}
          label="Projects"
          value={resume.projects}
        />

        <Stat
          icon={<Award className="h-5 w-5" />}
          label="Certificates"
          value={resume.certifications}
        />

        <Stat
          icon={<Calendar className="h-5 w-5" />}
          label="Updated"
          value={resume.updated}
        />
      </div>
    </GlassCard>
  );
}

interface StatProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

function Stat({
  icon,
  label,
  value,
}: StatProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-3 text-blue-400">{icon}</div>

      <p className="text-2xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}