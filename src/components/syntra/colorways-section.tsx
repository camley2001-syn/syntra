"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { EASE_OUT_EXPO } from "@/lib/motion";

const COLORWAYS = [
  {
    name: "Obsidian",
    bg: "#0a0a0a",
    swatch: "#141414",
    text: "#f5f5f0",
    accent: "#c9a55c",
  },
  {
    name: "Bone",
    bg: "#1a1814",
    swatch: "#d4cfc4",
    text: "#0a0a0a",
    accent: "#c9a55c",
  },
  {
    name: "Ember",
    bg: "#14100c",
    swatch: "#8a5c38",
    text: "#f5f5f0",
    accent: "#e8c080",
  },
  {
    name: "Slate",
    bg: "#121416",
    swatch: "#4a5560",
    text: "#f5f5f0",
    accent: "#9aabb8",
  },
] as const;

export function ColorwaysSection() {
  const [active, setActive] = useState(0);
  const current = COLORWAYS[active];

  return (
    <section
      id="colorways"
      aria-labelledby="colorways-heading"
      className="relative overflow-hidden border-t border-[#1f1f1f] px-6 py-28 transition-colors duration-700 md:px-10 md:py-40"
      style={{ backgroundColor: current.bg }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="label-xs">Chapter 04 · Colorways</span>
            <h2 id="colorways-heading" className="display-xl mt-6">
              Four finishes.
            </h2>
          </div>
          <span className="label-xs hidden shrink-0 md:block">
            Hover to preview
          </span>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#1f1f1f] md:grid-cols-4">
          {COLORWAYS.map((way, i) => (
            <button
              key={way.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group relative flex aspect-[3/4] flex-col items-start justify-between p-6 text-left transition-all duration-500"
              style={{ backgroundColor: way.swatch, color: way.text }}
            >
              <span className="label-xs" style={{ color: "inherit", opacity: 0.55 }}>
                0{i + 1}
              </span>
              <div>
                <div className="font-display text-3xl">{way.name}</div>
                <p
                  className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em]"
                  style={{ opacity: 0.55 }}
                >
                  {active === i ? "Selected" : "View"}
                </p>
              </div>
              <motion.span
                animate={{ scale: active === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                className="absolute right-6 top-6 h-2 w-2 rounded-full"
                style={{ backgroundColor: way.accent }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
