// src/app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import GA_HT_Analytics from '@/components/Analytics';
import GoogleAnalytics from '@/components/GoogleAnalytics';

import type { Metadata } from "next";
import "./globals.css";

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
        {/* Only import JetBrains Mono now since Verdana is a system font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}