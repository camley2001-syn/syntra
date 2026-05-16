import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Geist_Mono } from "next/font/google";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://syntra.audio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SYNTRA — Precision Engineered Silence",
    template: "%s | SYNTRA",
  },
  description:
    "Premium wireless earbuds engineered for absolute silence. Titanium shell, hybrid ANC, beryllium drivers. A museum-grade listening instrument.",
  keywords: [
    "SYNTRA",
    "premium earbuds",
    "noise cancelling",
    "luxury audio",
    "wireless earbuds",
  ],
  authors: [{ name: "SYNTRA Audio" }],
  creator: "SYNTRA Audio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SYNTRA",
    title: "SYNTRA — Precision Engineered Silence",
    description:
      "Premium wireless earbuds engineered for absolute silence. Titanium shell, hybrid ANC, beryllium drivers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNTRA — Precision Engineered Silence",
    description:
      "Premium wireless earbuds engineered for absolute silence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#0a0a0a] font-sans text-[#f5f5f0] antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
