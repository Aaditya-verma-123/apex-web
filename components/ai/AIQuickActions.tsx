"use client";

import {
  FileText,
  FolderKanban,
  Award,
  Code2,
  Mail,
  Rocket,
} from "lucide-react";

const actions = [
  {
    icon: FileText,
    label: "Resume",
    prompt: "Open resume",
  },
  {
    icon: FolderKanban,
    label: "Projects",
    prompt: "Show projects",
  },
  {
    icon: Award,
    label: "Certificates",
    prompt: "Open certificates",
  },
  {
    icon: Code2,
    label: "Skills",
    prompt: "Show skills",
  },
  {
    icon: Rocket,
    label: "Journey",
    prompt: "Show journey",
  },
  {
    icon: Mail,
    label: "Contact",
    prompt: "Contact Aaditya",
  },
];

import { useAI } from "@/context/AIContext";

export default function AIQuickActions() {
  const { sendMessage } = useAI();

  return (
    <>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              onClick={() =>
                sendMessage(action.prompt)
              }
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                text-left
                transition-all
                duration-300

                hover:border-[var(--border)]
                hover:bg-[color:var(--glow)]
              "
            >
              <Icon
                className="mb-3 h-6 w-6"
                style={{
                  color: "var(--primary)",
                }}
              />

              <p className="font-medium text-white">
                {action.label}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
}