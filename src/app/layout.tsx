// src/app/layout.tsx

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import GA_HT_Analytics from '@/components/Analytics';
import GoogleAnalytics from '@/components/GoogleAnalytics';

import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

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
        {/* Google Fonts - Roboto Mono with preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap" />
        
        {/* Apply Roboto Mono font directly via style tag */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body, p, div, span, a, button, input, textarea, select, li {
              font-family: 'Roboto Mono', monospace !important;
            }
          `
        }} />
        
        {/* Ensure font is loaded before rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Roboto Mono';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/robotomono/v22/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW9.woff2) format('woff2');
            }
            
            /* Force Roboto Mono on specific elements */
            p { font-family: 'Roboto Mono', monospace !important; }
            span { font-family: 'Roboto Mono', monospace !important; }
            div { font-family: 'Roboto Mono', monospace !important; }
            a { font-family: 'Roboto Mono', monospace !important; }
            button { font-family: 'Roboto Mono', monospace !important; }
          `
        }} />
      </head>
      <body style={{ fontFamily: "'Roboto Mono', monospace" }}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}