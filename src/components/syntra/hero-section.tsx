"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { EASE_OUT_EXPO, springGentle, springSoft } from "@/lib/motion";
import { PRODUCT_IMAGES } from "@/lib/product-assets";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -14]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const sy = useSpring(y, springSoft);
  const sScale = useSpring(scale, springSoft);
  const sRotate = useSpring(rotate, springGentle);

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Introduction"
      className="relative h-[100svh] w-full overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="amber-glow pointer-events-none absolute left-1/2 top-[38%] h-[85vmin] w-[85vmin] -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        style={{ y: sy, scale: sScale, rotate: sRotate }}
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-[6vh] md:pt-[4vh]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.06, filter: "blur(16px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: EASE_OUT_EXPO }}
          className="relative h-[min(78vh,820px)] w-[min(108vw,980px)] max-w-none"
        >
          <Image
            src={PRODUCT_IMAGES.main.src}
            alt={PRODUCT_IMAGES.main.alt}
            fill
            priority
            sizes="100vw"
            className="object-contain object-center drop-shadow-[0_48px_96px_rgba(201,165,92,0.14)]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: headlineY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-6 pb-28 md:pb-32"
      >
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.35, ease: EASE_OUT_EXPO }}
          className="display-hero -mt-[clamp(3rem,12vh,7rem)] text-center"
        >
          Silence,
          <br />
          <span className="text-[#c9a55c]">engineered.</span>
        </motion.h1>
      </motion.div>

      <div className="absolute bottom-8 left-6 z-30 md:left-10">
        <span className="label-xs">N°001 — Syntra</span>
      </div>
      <div className="absolute bottom-8 right-6 z-30 text-right md:right-10">
        <span className="label-xs block">Scroll</span>
        <span className="label-xs mt-1 block text-[#f5f5f0]/50">↓</span>
      </div>
    </section>
  );
}
