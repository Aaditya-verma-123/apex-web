"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  themes,
  ThemeName,
} from "@/lib/themes";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext =
  createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeName>(() => {
  if (typeof window === "undefined") {
    return "cyan";
  }

  const saved =
    localStorage.getItem("theme") as ThemeName;

  return saved && themes[saved]
    ? saved
    : "cyan";
});

  useEffect(() => {
    const colors = themes[theme];

    const root =
      document.documentElement;

    root.style.setProperty(
      "--primary",
      colors.primary
    );

    root.style.setProperty(
      "--secondary",
      colors.secondary
    );

    root.style.setProperty(
      "--border",
      colors.border
    );

    root.style.setProperty(
      "--glow",
      colors.glow
    );

    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider."
    );
  }

  return context;
}