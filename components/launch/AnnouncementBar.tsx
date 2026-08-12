"use client";

import { Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="flex items-center justify-center gap-2 border-b border-white/10 bg-white/5 py-2 text-sm">
      <Sparkles
        className="h-4 w-4"
        style={{
          color: "var(--primary)",
        }}
      />

      <span>Welcome to APEX WEB v1.0 🚀</span>
    </div>
  );
}