"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useLenis } from "@/hooks/use-lenis";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { scrollToHash } from "@/lib/scroll";

const ITEMS = [
  { href: "#sound", label: "Sound" },
  { href: "#engineering", label: "Engineering" },
  { href: "#materials", label: "Materials" },
  { href: "#colorways", label: "Colorways" },
] as const;

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const lenis = useLenis();

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        scrollToHash(lenis, href);
        window.history.pushState(null, "", href);
      }}
      className={className}
    >
      {children}
    </a>
  );
}

export function DockNav() {
  return (
    <motion.nav
      aria-label="Primary"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 1, ease: EASE_OUT_EXPO }}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <motion.div className="flex items-center gap-1 rounded-full border border-[#1f1f1f]/80 bg-[#0a0a0a]/90 px-2 py-2 shadow-[0_12px_48px_rgba(0,0,0,0.65)] backdrop-blur-xl">
        <NavLink
          href="#hero"
          className="px-4 py-2 font-display text-base tracking-tight text-[#f5f5f0]"
        >
          Syntra
        </NavLink>

        <div className="mx-1 h-5 w-px bg-[#1f1f1f]" aria-hidden />

        {ITEMS.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-[12px] font-light text-[#8a8a8a] transition-colors duration-300 hover:text-[#f5f5f0]"
          >
            {item.label}
          </NavLink>
        ))}

        <NavLink
          href="#reserve"
          className="ml-1 rounded-full bg-[#c9a55c] px-4 py-2 text-[12px] font-medium text-[#0a0a0a] transition-transform duration-300 hover:scale-[1.03]"
        >
          Reserve
        </NavLink>
      </motion.div>
    </motion.nav>
  );
}
