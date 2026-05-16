"use client";

import { useCallback } from "react";

import { useLenis } from "@/hooks/use-lenis";
import { scrollToHash } from "@/lib/scroll";

export function useSmoothScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (hash: string) => {
      scrollToHash(lenis, hash);
      if (hash.startsWith("#") && hash !== "#") {
        window.history.pushState(null, "", hash);
      }
    },
    [lenis],
  );
}
