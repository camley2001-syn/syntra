"use client";

import { Counter } from "@/components/syntra/counter";

const STATS = [
  {
    label: "Driver",
    value: 11,
    suffix: "mm",
    caption: "Beryllium-coated planar driver",
  },
  {
    label: "Frequency",
    display: "5–40 kHz",
    caption: "20 Hz – 40 kHz extended range",
  },
  {
    label: "Cancellation",
    value: 48,
    suffix: "dB",
    caption: "Hybrid feedforward + feedback",
  },
  {
    label: "Latency",
    value: 24,
    suffix: "ms",
    caption: "Game mode, aptX Adaptive",
  },
] as const;

export function SpecsSection() {
  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="relative border-t border-[#1f1f1f] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="label-xs">Chapter 02 · Engineering</span>
            <h2
              id="engineering-heading"
              className="display-xl mt-6 max-w-3xl"
            >
              Numbers, told quietly.
            </h2>
          </div>
          <span className="label-xs hidden shrink-0 md:block">
            Measured · Anechoic chamber
          </span>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#1f1f1f] md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-[220px] flex-col bg-[#0a0a0a] p-10"
            >
              <span className="label-xs">{stat.label}</span>
              <div className="mt-10 font-display text-6xl font-light leading-none tracking-tight md:text-7xl">
                {"display" in stat ? (
                  <span className="whitespace-nowrap">{stat.display}</span>
                ) : (
                  <Counter to={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="mt-6 text-sm font-light text-[#6b6b6b]">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
