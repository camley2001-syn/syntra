"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { EASE_OUT_EXPO, springSoft } from "@/lib/motion";
import { PRODUCT_IMAGES } from "@/lib/product-assets";

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: imageProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const curtain = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  const imageY = useTransform(imageProgress, [0, 1], ["12%", "-12%"]);
  const imageRotate = useTransform(imageProgress, [0, 1], [-6, 6]);
  const smoothY = useSpring(imageY, springSoft);
  const smoothRotate = useSpring(imageRotate, { stiffness: 60, damping: 20 });

  return (
    <section
      id="reserve"
      ref={ref}
      className="relative overflow-hidden border-t border-[#1f1f1f]"
    >
      <div className="relative px-6 py-32 md:px-10 md:py-44">
        <motion.div
          aria-hidden
          style={{ y: curtain }}
          className="pointer-events-none absolute inset-0 origin-top bg-[#0a0a0a]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE_OUT_EXPO }}
              className="label-xs"
            >
              Chapter 05 · Reserve
            </motion.span>

            <motion.h2
              initial={{ y: 72, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.1, ease: EASE_OUT_EXPO }}
              className="display-hero mt-10"
            >
              Yours,
              <br />
              <span className="text-[#c9a55c]">in silence.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: EASE_OUT_EXPO }}
              className="mt-8 max-w-md text-sm font-light leading-relaxed text-[#6b6b6b]"
            >
              First edition limited to 2,000 pairs. $449, shipping within 6 weeks.
              The charging case holds 38 hours. Reservation requires no payment
              today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.55, ease: EASE_OUT_EXPO }}
              className="mt-12"
            >
              <Link
                href="mailto:reserve@syntra.audio"
                className="group inline-flex items-center gap-4 rounded-full bg-[#c9a55c] px-8 py-5 text-[#0a0a0a] transition-transform duration-500 hover:scale-[1.02]"
              >
                <span className="font-display text-2xl">Reserve a pair</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">
                  → $0 today
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            ref={imageRef}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="amber-glow pointer-events-none absolute h-[min(70vw,420px)] w-[min(70vw,420px)]"
            />

            <motion.div
              style={{ y: smoothY, rotate: smoothRotate }}
              className="relative z-10 w-full max-w-[min(100%,480px)]"
            >
              <motion.div
                animate={inView ? { y: [0, -14, 0] } : { y: 0 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                      : {}
                  }
                  transition={{
                    duration: 1.6,
                    delay: 0.25,
                    ease: EASE_OUT_EXPO,
                  }}
                  className="relative aspect-square w-full"
                >
                  <Image
                    src={PRODUCT_IMAGES.charging.src}
                    alt={PRODUCT_IMAGES.charging.alt}
                    fill
                    sizes="(max-width: 1024px) 85vw, 480px"
                    className="object-contain object-center drop-shadow-[0_40px_80px_rgba(0,0,0,0.75)]"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9, duration: 1 }}
                  className="label-xs mt-6 text-center lg:text-right"
                >
                  Wireless charging case · 38h total
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <footer className="relative border-t border-[#1f1f1f] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <span className="font-display text-xl">Syntra</span>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-6">
              {["Press", "Support", "Privacy"].map((item) => (
                <li key={item}>
                  <span className="label-xs cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </nav>
          <span className="label-xs">
            © {new Date().getFullYear()} — SYNTRA Audio
          </span>
        </div>
      </footer>
    </section>
  );
}
