"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PressableProps = {
  as?: "button" | "a";
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onFocus?: () => void;
  role?: string;
  "aria-selected"?: boolean;
  "aria-controls"?: string;
  type?: "button" | "submit" | "reset";
};

const spring = { type: "spring" as const, stiffness: 500, damping: 28 };

const interaction = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: spring,
} as const;

export function Pressable({
  className,
  children,
  as = "button",
  href,
  onClick,
  onMouseEnter,
  onFocus,
  role,
  "aria-selected": ariaSelected,
  "aria-controls": ariaControls,
  type = "button",
}: PressableProps) {
  const classes = cn("inline-block cursor-pointer", className);

  if (as === "a" && href) {
    if (href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <motion.a href={href} className={classes} {...interaction}>
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div className={classes} {...interaction}>
        <Link href={href} className="block">
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      role={role}
      aria-selected={ariaSelected}
      aria-controls={ariaControls}
      className={classes}
      {...interaction}
    >
      {children}
    </motion.button>
  );
}
