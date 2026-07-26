import "./globals.css";

import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Navbar />

        <main className="pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}