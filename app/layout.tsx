import type { Metadata } from "next";
import "./globals.css";

import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

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
        <ScrollProgress />
        <Navbar />
        <AnimatedBackground />


        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={2500}
        />
      </body>
    </html>
  );
}