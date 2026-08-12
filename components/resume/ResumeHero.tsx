"use client";

import {
  Award,
  Calendar,
  FileText,
  FolderKanban,
} from "lucide-react";

import { resume } from "@/data/resume";
import GlassCard from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/animations";

export default function ResumeHero() {
  return (
    <FadeUp>
      <div className="max-w-4xl">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-cyan-400" />

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Resume
          </p>
        </div>

        <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          My
          <span className="text-cyan-400">
            {" "}Resume.
          </span>
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
          {resume.description}
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
    </FadeUp>
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
    <GlassCard className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <p className="mt-5 text-2xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {label}
      </p>
    </GlassCard>
  );
}