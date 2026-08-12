import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";

import CommandPalette from "@/components/command/CommandPalette";

import BootScreen from "@/components/boot/BootScreen";

import ScrollProgress from "@/components/launch/ScrollProgress";


import Footer from "@/components/launch/Footer";

import PageTransition from "@/components/providers/PageTransition";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ThemeMenu from "@/components/theme/ThemeMenu";

import { AIProvider } from "@/context/AIContext";
import AIButton from "@/components/ai/AIButton";
import AIWindow from "@/components/ai/AIWindow";

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
          <AIProvider>
            {/* Global Effects */}
            <BootScreen />
            <ScrollProgress />            

            {/* Layout */}
            <Navbar />
            <PageTransition>
              <main className="min-h-screen">
                {children}
              </main>
            </PageTransition>

            <Footer />

            {/* Global UI */}
            <CommandPalette />

            <Toaster
              position="top-right"
              richColors
              closeButton
              duration={2500}
            />

            <ThemeMenu />
            <AIButton />
            <AIWindow />
          </AIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}