// src/app/layout.tsx

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import GA_HT_Analytics from '@/components/Analytics';
import GoogleAnalytics from '@/components/GoogleAnalytics';

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flexible Functions AI - Industrial Research & Development AI Lab",
  description: "We build practical AI applications and use that to inform our research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GA_HT_Analytics />
        <GoogleAnalytics/>
      </head>
      <body className={jetbrainsMono.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}