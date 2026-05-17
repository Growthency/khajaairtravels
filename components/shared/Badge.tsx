import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "sky" | "emerald" | "saffron" | "ink";
  icon?: ReactNode;
};

const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
  sky: "bg-sky-50 text-sky-700 ring-sky-200/70",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
  saffron: "bg-saffron-50 text-saffron-700 ring-saffron-200/70",
  ink: "bg-ink/5 text-ink-soft ring-ink/10"
};

export function Badge({ children, className, tone = "sky", icon }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
        tones[tone],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
