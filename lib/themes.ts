export type ThemeName =
  | "cyan"
  | "purple"
  | "emerald"
  | "orange"
  | "rose";

export interface Theme {
  primary: string;
  secondary: string;
  primaryHover: string;
  border: string;
  glow: string;
}

export const themes: Record<ThemeName, Theme> = {
  cyan: {
    primary: "#06b6d4",
    secondary: "#0891b2",
    primaryHover: "#22d3ee",
    border: "#22d3ee",
    glow: "rgba(6,182,212,.35)",
  },

  purple: {
    primary: "#8b5cf6",
    secondary: "#7c3aed",
    primaryHover: "#a78bfa",
    border: "#a78bfa",
    glow: "rgba(139,92,246,.35)",
  },

  emerald: {
    primary: "#10b981",
    secondary: "#059669",
    primaryHover: "#34d399",
    border: "#34d399",
    glow: "rgba(16,185,129,.35)",
  },

  orange: {
    primary: "#f97316",
    secondary: "#ea580c",
    primaryHover: "#fb923c",
    border: "#fb923c",
    glow: "rgba(249,115,22,.35)",
  },

  rose: {
    primary: "#f43f5e",
    secondary: "#e11d48",
    primaryHover: "#f87171",
    border: "#fb7185",
    glow: "rgba(244,63,94,.35)",
  },
};