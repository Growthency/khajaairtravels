import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Container({
  children,
  className,
  size = "default"
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "tight";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[1400px]",
        size === "tight" && "max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
