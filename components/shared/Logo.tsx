import { cn } from "@/lib/utils";

type LogoProps = {
  size?: number;
  className?: string;
  monochrome?: boolean;
};

export function Logo({ size = 44, className, monochrome = false }: LogoProps) {
  const uid = "kat-logo";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Khaja Air Travels"
      role="img"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id={`${uid}-globe`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={monochrome ? "#0a1426" : "#10b981"} />
          <stop offset="100%" stopColor={monochrome ? "#0a1426" : "#047857"} />
        </linearGradient>
        <linearGradient id={`${uid}-plane`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={monochrome ? "#1f2a44" : "#3590ef"} />
          <stop offset="100%" stopColor={monochrome ? "#1f2a44" : "#1c5dd0"} />
        </linearGradient>
        <linearGradient id={`${uid}-ring`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={monochrome ? "#1f2a44" : "#1f72e3"} stopOpacity="0.8" />
          <stop offset="100%" stopColor={monochrome ? "#1f2a44" : "#059669"} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <circle cx="32" cy="36" r="20" fill={`url(#${uid}-globe)`} opacity="0.92" />

      <g stroke="#ffffff" strokeWidth="1.4" fill="none" opacity="0.85">
        <ellipse cx="32" cy="36" rx="20" ry="9" />
        <path d="M12 36c10-9 30-9 40 0" />
        <line x1="32" y1="16" x2="32" y2="56" />
        <line x1="12" y1="36" x2="52" y2="36" />
      </g>

      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="11"
        letterSpacing="0.4"
        fill="#ffffff"
      >
        KAT
      </text>

      <g transform="translate(2 6) rotate(-22 30 14)">
        <path
          d="M6 14 L28 8 L42 6 L52 10 L40 13 L34 19 L29 16 L19 18 Z"
          fill={`url(#${uid}-plane)`}
          stroke="#ffffff"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <path
          d="M28 8 L34 4 L37 4 L33 9 Z"
          fill={`url(#${uid}-plane)`}
          stroke="#ffffff"
          strokeWidth="0.6"
        />
      </g>

      <path
        d="M4 56 Q32 44 60 56"
        stroke={`url(#${uid}-ring)`}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
