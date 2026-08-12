"use client";

import { useAI } from "@/context/AIContext";

const suggestions = [
  "Tell me about Aaditya",
  "Show projects",
  "Certificates",
  "Skills",
  "Download resume",
  "Current goals",
];

export default function AISuggestions() {
  const { sendMessage } = useAI();

  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((text) => (
        <button
          key={text}
          onClick={() => sendMessage(text)}
          className="
            rounded-full
            border
            border-white/10
            px-4
            py-2
            text-sm
            text-slate-300
            transition-all
            duration-300
            hover:border-[var(--border)]
            hover:bg-[color:var(--glow)]
          "
        >
          {text}
        </button>
      ))}
    </div>
  );
}