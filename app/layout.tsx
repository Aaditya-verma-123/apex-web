import type { Metadata } from "next";
import "./globals.css";

import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Loader from "@/components/layout/Loader";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://apex-web.vercel.app"), // Change after deployment

  title: {
    default: "APEX WEB | Aaditya Verma",
    template: "%s | APEX WEB",
  },

  description:
    "Personal portfolio of Aaditya Verma showcasing projects, web development, cybersecurity, AI, and software engineering.",

  keywords: [
    "Aaditya Verma",
    "APEX WEB",
    "Portfolio",
    "Web Developer",
    "Cybersecurity",
    "Artificial Intelligence",
    "Next.js",
    "React",
    "TypeScript",
  ],

  authors: [
    {
      name: "Aaditya Verma",
    },
  ],

  creator: "Aaditya Verma",

  openGraph: {
    title: "APEX WEB | Aaditya Verma",
    description:
      "Explore my projects, skills, and journey in web development, cybersecurity, and AI.",
    url: "https://apex-web.vercel.app",
    siteName: "APEX WEB",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "APEX WEB",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "APEX WEB | Aaditya Verma",
    description:
      "Personal portfolio showcasing projects, skills, and experience.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <Loader />
  <SmoothScroll />
  <ScrollProgress />
  <Background />
  <Navbar />

  <main className="pt-32">
    {children}
  </main>
</body>
    </html>
  );
}