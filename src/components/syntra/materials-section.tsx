"use client";

import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { EASE_OUT_EXPO, springRotate } from "@/lib/motion";
import { PRODUCT_IMAGES } from "@/lib/product-assets";

const SURFACES = [
  {
    n: "01",
    label: "Shell",
    value: "Anodised aluminium",
    image: PRODUCT_IMAGES.aluminum,
  },
  {
    n: "02",
    label: "Touch surface",
    value: "Vapor-deposited ceramic",
    image: PRODUCT_IMAGES.ceramic,
  },
  {
    n: "03",
    label: "Acoustic chamber",
    value: "Precision-machined housing",
    image: PRODUCT_IMAGES.detail,
  },
] as const;

function SurfaceCard({
  n,
  label,
  value,
  image,
}: {
  n: string;
  label: string;
  value: string;
  image: (typeof PRODUCT_IMAGES)[keyof typeof PRODUCT_IMAGES];
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const inView = useInView(itemRef, { once: true, margin: "-25%" });

  return (
    <motion.article
      ref={itemRef}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
      className="grid grid-cols-[auto_1fr] gap-8"
    >
      <span className="label-xs pt-2">{n}</span>
      <div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#1f1f1f]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover object-center"
          />
        </div>
        <div className="mt-6 flex items-baseline justify-between gap-4">
          <span className="label-xs">{label}</span>
          <span className="font-display text-right text-2xl md:text-3xl">{value}</span>
        </div>
      </div>
    </motion.article>
  );
}

export function MaterialsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-22, 28]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const sRotate = useSpring(rotate, springRotate);
  const sY = useSpring(y, springRotate);

  return (
    <section
      ref={ref}
      id="materials"
      aria-labelledby="materials-heading"
      className="relative border-t border-[#1f1f1f] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <span className="label-xs">Chapter 03 · Materials</span>
        <h2 id="materials-heading" className="display-xl mt-6 max-w-3xl">
          Three surfaces. One object.
        </h2>

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div className="sticky top-24 hidden h-[70svh] items-center justify-center lg:flex">
            <motion.div
              aria-hidden
              className="amber-glow pointer-events-none absolute h-[50vmin] w-[50vmin]"
            />
            <motion.div
              style={{ rotate: sRotate, y: sY }}
              className="relative h-[58vmin] w-[58vmin]"
            >
              <Image
                src={PRODUCT_IMAGES.main.src}
                alt={PRODUCT_IMAGES.main.alt}
                fill
                sizes="58vmin"
                className="object-contain object-center drop-shadow-[0_32px_64px_rgba(0,0,0,0.7)]"
              />
            </motion.div>
          </div>

          <div className="space-y-28 md:space-y-32">
            {SURFACES.map((surface) => (
              <SurfaceCard key={surface.n} {...surface} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
