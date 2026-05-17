"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Marquee({
  children,
  className,
  direction = "left",
  pauseOnHover = true
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("group overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-12 whitespace-nowrap will-change-transform",
          direction === "left" ? "animate-marquee" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
