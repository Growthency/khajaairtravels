import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { Badge } from "./Badge";

type Props = {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "sky" | "emerald" | "saffron";
};

export function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
  tone = "sky"
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <Badge tone={tone} className="mb-4">
          {kicker}
        </Badge>
      )}
      <h2 className="font-display text-3xl md:text-[40px] lg:text-[46px] font-bold leading-[1.05] tracking-tight text-ink text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-muted leading-relaxed text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
}
