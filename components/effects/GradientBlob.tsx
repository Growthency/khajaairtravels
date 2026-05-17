"use client";

import { cn } from "@/lib/utils";

type Props = {
  color?: "sky" | "emerald" | "saffron" | "mix";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  opacity?: number;
};

const sizes = {
  sm: "w-56 h-56",
  md: "w-72 h-72",
  lg: "w-[420px] h-[420px]",
  xl: "w-[680px] h-[680px]"
};

const colors: Record<NonNullable<Props["color"]>, string> = {
  sky: "bg-sky-500",
  emerald: "bg-emerald-500",
  saffron: "bg-saffron-500",
  mix: "bg-gradient-to-br from-sky-500 via-emerald-500 to-saffron-500"
};

export function GradientBlob({
  color = "sky",
  size = "lg",
  className,
  opacity = 0.18
}: Props) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none blob",
        sizes[size],
        colors[color],
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
