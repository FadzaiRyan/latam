import type { Metadata } from "next";
import "./globals.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Weather and River Level Monitoring",
  description: "Real-time weather and river level monitoring for Campana, Buenos Aires.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
