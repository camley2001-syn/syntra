import type Lenis from "lenis";

export const SCROLL_EASING = (t: number) =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));

export const SCROLL_DURATION = 1.5;

export const SCROLL_OFFSET = -32;

export function scrollToHash(lenis: Lenis | null, hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, {
      offset: SCROLL_OFFSET,
      duration: SCROLL_DURATION,
      easing: SCROLL_EASING,
    });
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
