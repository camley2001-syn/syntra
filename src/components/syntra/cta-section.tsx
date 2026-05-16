"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { EASE_OUT_EXPO } from "@/lib/motion";

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const curtain = useTransform(scrollYProgress, [0, 0.55], ["100%", "0%"]);
  const inView = useInView(ref, { once: true, margin: "-25%" });

  return (
    <section id="reserve" ref={ref} className="relative overflow-hidden border-t border-[#1f1f1f]">
      <div className="relative px-6 py-40 md:px-10 md:py-56">
        <motion.div
          aria-hidden
          style={{ y: curtain }}
          className="pointer-events-none absolute inset-0 origin-top bg-[#0a0a0a]"
        />

        <div className="relative mx-auto max-w-6xl">
          <span className="label-xs">Chapter 05 · Reserve</span>

          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.6, ease: EASE_OUT_EXPO }}
            className="display-hero mt-10"
          >
            Yours,
            <br />
            <span className="text-[#c9a55c]">in silence.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: EASE_OUT_EXPO }}
            className="mt-16 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between"
          >
            <p className="max-w-md text-sm font-light leading-relaxed text-[#6b6b6b]">
              First edition limited to 2,000 pairs. $449, shipping within 6
              weeks. Reservation requires no payment today.
            </p>

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
          <span className="label-xs">© {new Date().getFullYear()} — SYNTRA Audio</span>
        </div>
      </footer>
    </section>
  );
}
