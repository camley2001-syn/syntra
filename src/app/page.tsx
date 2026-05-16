import type { Metadata } from "next";

import { ColorwaysSection } from "@/components/syntra/colorways-section";
import { CtaSection } from "@/components/syntra/cta-section";
import { DockNav } from "@/components/syntra/dock-nav";
import { HeroSection } from "@/components/syntra/hero-section";
import { MaterialsSection } from "@/components/syntra/materials-section";
import { ScrollProgress } from "@/components/syntra/scroll-progress";
import { SpecsSection } from "@/components/syntra/specs-section";
import { TopMeta } from "@/components/syntra/top-meta";
import { WhisperSection } from "@/components/syntra/whisper-section";

export const metadata: Metadata = {
  title: "SYNTRA — Precision Engineered Silence",
  description:
    "Premium wireless earbuds engineered for absolute silence. 11mm beryllium driver, 48dB ANC, museum-grade design.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SYNTRA Earbuds",
  description:
    "Premium wireless earbuds with hybrid active noise cancellation and beryllium-coated drivers.",
  brand: { "@type": "Brand", name: "SYNTRA" },
  offers: {
    "@type": "Offer",
    price: "449",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollProgress />
      <TopMeta />
      <DockNav />

      <main>
        <HeroSection />
        <WhisperSection />
        <SpecsSection />
        <MaterialsSection />
        <ColorwaysSection />
        <CtaSection />
      </main>
    </>
  );
}
