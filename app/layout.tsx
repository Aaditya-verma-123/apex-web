import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/command/CommandPalette";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import ScrollProgress from "@/components/effects/ScrollProgress";
import PageTransition from "@/components/providers/PageTransition";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "APEX WEB",
    template: "%s | APEX WEB",
  },
  description:
    "Official portfolio of Aaditya Verma — Developer, Cybersecurity Learner, and AI Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <ScrollProgress />
        <CommandPalette />
        <PageTransition>
        <Navbar />

          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>

        <Footer />

        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={2500}
        />
        <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}