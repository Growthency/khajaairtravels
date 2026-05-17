import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "emerald" | "saffron" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-500/20 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-sky-600 text-white hover:bg-sky-700 shadow-[0_8px_28px_-8px_rgba(31,114,227,0.45)] hover:-translate-y-0.5",
  emerald:
    "bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_8px_28px_-8px_rgba(5,150,105,0.45)] hover:-translate-y-0.5",
  saffron:
    "bg-saffron-500 text-white hover:bg-saffron-600 shadow-[0_8px_28px_-8px_rgba(249,110,9,0.45)] hover:-translate-y-0.5",
  outline:
    "border-2 border-ink/10 text-ink hover:border-sky-600 hover:text-sky-700 hover:bg-sky-50/60",
  ghost: "text-ink-soft hover:text-sky-700 hover:bg-sky-50",
  dark: "bg-ink text-white hover:bg-ink-soft shadow-[0_10px_28px_-10px_rgba(10,20,38,0.5)] hover:-translate-y-0.5"
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
  external = false,
  ...rest
}: CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string; external?: boolean }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
