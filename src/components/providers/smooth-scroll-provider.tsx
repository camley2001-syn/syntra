"use client";

import Lenis from "lenis";
import { useEffect, useState, type ReactNode } from "react";

import { LenisContext } from "@/hooks/use-lenis";
import { scrollToHash } from "@/lib/scroll";

import "lenis/dist/lenis.css";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.15,
      wheelMultiplier: 0.95,
    });

    setLenis(instance);

    let frameId: number;

    function raf(time: number) {
      instance.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => scrollToHash(lenis, hash));
    }

    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );

      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#" || !document.getElementById(hash.slice(1))) return;

      event.preventDefault();
      scrollToHash(lenis, hash);

      if (hash !== window.location.hash) {
        window.history.pushState(null, "", hash);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
