import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
        <Navbar />

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