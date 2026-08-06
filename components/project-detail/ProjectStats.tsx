"use client";

import {
  Boxes,
  Award,
  CalendarDays,
  Layers3,
} from "lucide-react";

import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectStats({
  project,
}: Props) {
  const stats = [
    {
      icon: Layers3,
      value: project.components,
      label: "Components",
    },
    {
      icon: Award,
      value: project.certificates,
      label: "Certificates",
    },
    {
      icon: CalendarDays,
      value: project.started,
      label: "Started",
    },
    {
      icon: Boxes,
      value: project.category,
      label: "Category",
    },
  ];

  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-500/40
            hover:bg-white/[0.06]
          "
        >
          <stat.icon className="mb-4 h-6 w-6 text-blue-400" />

          <p className="text-2xl font-bold text-white">
            {stat.value}
          </p>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}