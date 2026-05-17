"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
};

export function GlobeOrbit({ className, size = 460 }: Props) {
  return (
    <div
      className={cn("relative pointer-events-none select-none", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/30 via-emerald-500/20 to-saffron-500/15 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-6 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #6ee7b7 0%, #10b981 36%, #047857 70%, #064e3b 100%)",
          boxShadow:
            "inset -28px -28px 80px rgba(0,0,0,0.35), 0 30px 80px -20px rgba(5,150,105,0.45)"
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full opacity-40">
          <g stroke="#ffffff" strokeWidth="0.6" fill="none">
            <ellipse cx="100" cy="100" rx="90" ry="34" />
            <ellipse cx="100" cy="100" rx="90" ry="58" />
            <ellipse cx="100" cy="100" rx="90" ry="78" />
            <line x1="10" y1="100" x2="190" y2="100" />
            <line x1="100" y1="10" x2="100" y2="190" />
            <line x1="40" y1="20" x2="160" y2="180" />
            <line x1="160" y1="20" x2="40" y2="180" />
          </g>
          <g fill="#ffffff" opacity="0.55">
            <path d="M55 80 q5 -10 18 -8 q14 4 22 12 q-4 16 -18 14 q-15 -2 -22 -18z" />
            <path d="M110 70 q10 -4 22 4 q12 12 6 26 q-12 6 -26 -2 q-12 -10 -2 -28z" />
            <path d="M70 130 q12 -6 28 4 q14 10 12 24 q-16 4 -32 -4 q-12 -8 -8 -24z" />
            <path d="M140 120 q8 -2 14 6 q4 10 -4 18 q-12 4 -18 -6 q-4 -10 8 -18z" />
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="absolute -inset-2 rounded-full border border-sky-400/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 size-3 rounded-full bg-sky-500 shadow-[0_0_18px_rgba(53,144,239,0.9)]" />
      </motion.div>

      <motion.div
        className="absolute -inset-12 rounded-full border border-emerald-400/35 border-dashed"
        animate={{ rotate: -360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 size-2.5 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(5,150,105,0.9)]" />
      </motion.div>

      <motion.div
        className="absolute -inset-24 rounded-full border border-saffron-400/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -bottom-1 left-1/3 size-2 rounded-full bg-saffron-500 shadow-[0_0_12px_rgba(249,110,9,0.9)]" />
      </motion.div>

      <motion.svg
        viewBox="0 0 200 200"
        className="absolute -inset-2"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <g transform="translate(100 18)">
          <g transform="rotate(35)">
            <path
              d="M0 0 L18 -4 L26 -3 L32 0 L26 3 L18 4 L0 0 Z"
              fill="#0a1426"
              stroke="#fff"
              strokeWidth="0.4"
            />
            <path d="M14 -2 L20 -8 L23 -8 L18 -1 Z" fill="#0a1426" stroke="#fff" strokeWidth="0.3" />
          </g>
        </g>
      </motion.svg>
    </div>
  );
}
