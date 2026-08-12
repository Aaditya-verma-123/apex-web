"use client";

import { useEffect, useRef, useState } from "react";
import { Palette } from "lucide-react";

import ThemeSwitcher from "./ThemeSwitcher";

export default function ThemeMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-zinc-900/90
          backdrop-blur-xl
          shadow-xl
          transition-all
          duration-300
          hover:scale-105
          hover:border-[var(--border)]
        "
      >
        <Palette
          className="h-6 w-6"
          style={{
            color: "var(--primary)",
          }}
        />
      </button>

      {open && (
        <div className="absolute bottom-20 right-0">
          <ThemeSwitcher />
        </div>
      )}
    </div>
  );
}