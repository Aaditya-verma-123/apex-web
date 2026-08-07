"use client";

import { useTheme } from "./ThemeProvider";
import type { ThemeName } from "@/lib/themes";

const themeOptions: ThemeName[] = [
  "cyan",
  "purple",
  "emerald",
  "orange",
  "rose",
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-[999] rounded-2xl border border-white/10 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-xl">
      <h3 className="mb-3 text-sm font-semibold text-white">
        Theme
      </h3>

      <div className="flex flex-col gap-2">
        {themeOptions.map((option) => (
          <button
            key={option}
            onClick={() => setTheme(option)}
            className={`rounded-lg px-3 py-2 text-left transition ${
              theme === option
                ? "bg-white text-black"
                : "text-white hover:bg-white/10"
            }`}
          >
            {option.charAt(0).toUpperCase() +
              option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}