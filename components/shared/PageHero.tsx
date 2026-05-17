"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { Container } from "./Container";
import { Badge } from "./Badge";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { cn } from "@/lib/utils";

type Props = {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "sky" | "emerald" | "saffron";
  className?: string;
  children?: ReactNode;
};

export function PageHero({
  kicker,
  title,
  subtitle,
  tone = "sky",
  className,
  children
}: Props) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-paper pt-28 pb-16 md:pt-36 md:pb-20",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-mesh-aurora opacity-80" aria-hidden="true" />
      <div className="dot-grid absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
      <GradientBlob color={tone} size="xl" className="-top-32 -left-32" opacity={0.18} />
      <GradientBlob color="emerald" size="lg" className="-bottom-32 right-0" opacity={0.14} />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {kicker && (
            <Badge tone={tone} className="mb-4">
              {kicker}
            </Badge>
          )}
          <h1 className="font-display text-[36px] font-bold leading-[1.05] tracking-tight text-ink text-balance md:text-[58px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
}
