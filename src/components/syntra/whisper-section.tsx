"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { EASE_OUT_EXPO } from "@/lib/motion";

export function WhisperSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      id="sound"
      aria-labelledby="sound-heading"
      className="relative px-6 py-40 md:px-10 md:py-56"
    >
      <div className="mx-auto max-w-5xl">
        <span className="label-xs">Chapter 01 · Intent</span>
        <motion.p
          id="sound-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
          className="display-lg mt-10 text-[#f5f5f0]/90"
        >
          The room dissolves.
          <span className="text-[#6b6b6b]">
            {" "}
            What remains is the recording — the breath between notes, the
            architecture of sound the artist intended.{" "}
          </span>
          Nothing else.
        </motion.p>
      </div>
    </section>
  );
}
