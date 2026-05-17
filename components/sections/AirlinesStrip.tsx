import { Marquee } from "@/components/effects/Marquee";

const airlines = [
  "Biman Bangladesh",
  "Saudia",
  "Emirates",
  "Qatar Airways",
  "Etihad",
  "Turkish Airlines",
  "Flynas",
  "Singapore Airlines",
  "Malaysia Airlines",
  "Air Arabia",
  "Oman Air",
  "Kuwait Airways",
  "Gulf Air",
  "Thai Airways",
  "Indigo"
];

export function AirlinesStrip() {
  return (
    <section className="border-y border-border bg-paper-2 py-7">
      <div className="mx-auto mb-3 max-w-7xl px-5 md:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-ink-muted">
          Issuing tickets across 90+ airlines including
        </p>
      </div>
      <Marquee>
        {airlines.map((name) => (
          <span
            key={name}
            className="font-display text-lg font-semibold tracking-tight text-ink/65 hover:text-ink transition-colors"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
