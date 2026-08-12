"use client";

import { Check, Palette } from "lucide-react";

import { useTheme } from "./ThemeProvider";
import type { ThemeName } from "@/lib/themes";

const themes: {
  name: ThemeName;
  color: string;
}[] = [
  { name: "cyan", color: "#06b6d4" },
  { name: "purple", color: "#8b5cf6" },
  { name: "emerald", color: "#10b981" },
  { name: "orange", color: "#f97316" },
  { name: "rose", color: "#f43f5e" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="
        w-72
        rounded-3xl
        border
        border-white/10
        bg-zinc-950/90
        p-6
        shadow-2xl
        backdrop-blur-xl
      "
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-[color:var(--glow)] p-2">
          <Palette
            className="h-5 w-5"
            style={{
              color: "var(--primary)",
            }}
          />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            Appearance
          </h3>

          <p className="text-sm text-slate-400">
            Choose your accent color
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {themes.map((item) => (
          <button
            key={item.name}
            onClick={() => setTheme(item.name)}
            className={`
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              px-4
              py-3
              transition-all
              duration-300

              ${
                theme === item.name
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <span
                className="h-5 w-5 rounded-full border border-white/20"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="capitalize text-white">
                {item.name}
              </span>
            </div>

            {theme === item.name && (
              <Check
                className="h-5 w-5"
                style={{
                  color: "var(--primary)",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}