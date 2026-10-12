"use client";

import { motion, useReducedMotion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & { children: ReactNode; delay?: number };

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }} {...props}>{children}</motion.div>;
}
