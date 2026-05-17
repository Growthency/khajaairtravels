"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  range?: [number, number];
  offset?: "near" | "far";
};

export function ParallaxFloater({
  children,
  className,
  range = [0, -80],
  offset = "near"
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset === "near" ? ["start end", "end start"] : ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], range);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
