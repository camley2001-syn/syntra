"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type ProductVisualProps = {
  src: string;
  alt: string;
  className?: string;
  scrollTarget?: React.RefObject<HTMLElement | null>;
  scale?: number;
  variant?: "hero" | "materials" | "inline";
  priority?: boolean;
  enableParallax?: boolean;
  enableScrollRotate?: boolean;
};

export function ProductVisual({
  src,
  alt,
  className,
  scrollTarget,
  scale = 1,
  variant = "hero",
  priority = false,
  enableParallax = true,
  enableScrollRotate = true,
}: ProductVisualProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const targetRef = scrollTarget ?? localRef;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const smoothRotate = useSpring(scrollRotate, { stiffness: 80, damping: 26 });
  const smoothY = useSpring(parallaxY, { stiffness: 100, damping: 30 });

  const sizeClass =
    variant === "hero"
      ? "h-[min(62vh,560px)] w-[min(88vw,560px)]"
      : variant === "materials"
        ? "h-[min(52vh,480px)] w-[min(80vw,480px)]"
        : "h-64 w-64";

  return (
    <motion.div
      ref={localRef}
      style={{
        y: variant === "hero" && enableParallax ? smoothY : undefined,
        rotate: enableScrollRotate ? smoothRotate : 0,
        scale,
      }}
      className={cn("relative", className)}
    >
      <div
        className={cn("relative mx-auto", sizeClass)}
        aria-hidden={alt === ""}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-[-30%] rounded-full bg-[#c9a55c]/6 blur-[72px]"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={
              variant === "hero"
                ? "(max-width: 768px) 90vw, 560px"
                : "(max-width: 768px) 80vw, 480px"
            }
            className="object-contain object-center drop-shadow-[0_48px_96px_rgba(0,0,0,0.85)]"
          />
        </div>
      </div>
    </motion.div>
  );
}
