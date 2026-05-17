"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Banknote, Clock, Users, BadgeCheck, Headphones } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Government Approved Hajj agency",
    body: "Licence No-0252 from the Ministry of Religious Affairs. The licence is on display at our reception — feel free to verify."
  },
  {
    icon: BadgeCheck,
    title: "IATA verified consolidator",
    body: "Direct contracts with Biman, Saudia, Emirates, Qatar, Etihad and 80+ more — so the fare you see is the fare you pay."
  },
  {
    icon: Banknote,
    title: "Transparent, itemised pricing",
    body: "Every invoice shows airline tax, visa fee, our service charge and BSTI/VAT separately. No hidden numbers, ever."
  },
  {
    icon: Clock,
    title: "Same-day issuance",
    body: "Confirmed payment in the morning means an e-ticket in your inbox by afternoon. We do not waste your trip days on paperwork."
  },
  {
    icon: Users,
    title: "Bangla-speaking khedmat",
    body: "From the Mu'allim on Hajj to our visa officer in Uttara — every conversation happens in your comfortable language."
  },
  {
    icon: Headphones,
    title: "24/7 emergency line",
    body: "A real human on the other end of the phone — even at 3 AM when your flight is delayed and you do not know what to do next."
  }
];

export function WhyUs() {
  return (
    <section className="section-pad">
      <Container>
        <SectionHeader
          kicker="Why families choose us"
          title={
            <>
              Trusted by Bangladesh for two decades.{" "}
              <span className="gradient-text">Here is why.</span>
            </>
          }
          subtitle="It is not the slogans, it is the small details that define a travel partner. These six are non-negotiable for us — every day, every booking."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-card"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-sky-700 transition-all group-hover:from-sky-200 group-hover:to-emerald-200">
                <r.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
