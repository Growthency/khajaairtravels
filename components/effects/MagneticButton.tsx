"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({ children, className, strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 160, damping: 16 });
  const y = useSpring(0, { stiffness: 160, damping: 16 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
