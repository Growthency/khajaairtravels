import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, HeartHandshake, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerGroup } from "@/components/effects/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { SITE } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { getServerLang, getServerBranches, serverTr, localePath } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/translations";

export const metadata: Metadata = {
  title: "About Khaja Air Travels — 20 years of khedmat",
  description:
    "Founded by Amdadul Haque Mir in 2003 in Cumilla. Today, a Government Approved Hajj agency (Licence No-0252) with a four-company group spanning travel, manpower, housing and food.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Khaja Air Travels — 20 years of khedmat" }
};

export default function AboutPage() {
  const lang = getServerLang();
  const branches = getServerBranches(lang);
  const tp = (e: any) => serverTr(e, lang);
  const lp = (h: string) => localePath(h, lang);

  const values = lang === "bn" ? [
    { icon: ShieldCheck,    title: "আপসেলের চেয়ে সততা",  body: "প্রতিটি ইনভয়েস আইটেমাইজড। প্রতিটি প্যাকেজ কাউন্টারে যা প্রতিশ্রুতি দিয়েছিলাম তার সাথে মেলে। কোনো শর্টকাট নেওয়ার চেয়ে একটি বুকিং হারানো ভাল।" },
    { icon: HeartHandshake, title: "লেনদেনের চেয়ে খেদমত",  body: "একজন হজ ক্লায়েন্ট কোনো বুকিং নম্বর নন — তিনি কারো বাবা, মা, স্ত্রী। আমরা তাদের সেভাবে সেবা দিই যেভাবে নিজের পরিবারকে দিই।" },
    { icon: Sparkles,       title: "লোকাল ভাষা, গ্লোবাল মান", body: "ফ্রন্ট ডেস্ক থেকে মিনার মুয়াল্লিম পর্যন্ত বাংলা। বিশ্বের সবচেয়ে দাবিদার এয়ারলাইনের সেবার মান।" },
    { icon: Compass,        title: "দীর্ঘমেয়াদী সম্পর্ক",   body: "আমাদের অনেক ক্লায়েন্ট পনেরো বছর ধরে আমাদের সাথে বুকিং করছেন। একই পরিবারের তিন প্রজন্ম এই অফিস দিয়ে উড়েছেন।" }
  ] : [
    { icon: ShieldCheck,    title: "Honesty over upsell",    body: "Every invoice is itemised. Every package matches what we promised at the counter. We would rather lose a booking than cut a corner." },
    { icon: HeartHandshake, title: "Khedmat over transaction", body: "A Hajj client is not a booking number — they are someone's father, mother, spouse. We serve them the way we would serve our own." },
    { icon: Sparkles,       title: "Local language, global standard", body: "Bangla from the front desk to the Mu'allim in Mina. Service standards from the world's most demanding airlines." },
    { icon: Compass,        title: "Long-term relationships",  body: "Many of our clients have booked with us for fifteen years. Three generations of one family have flown through this office." }
  ];

  const milestones = lang === "bn" ? [
    { year: "২০০৩", title: "কুমিল্লায় প্রতিষ্ঠা",          body: "জনাব আমদাদুল হক মির একটি একক-ডেস্কের ট্রাভেল অফিস খোলেন, মূলত উমরাহ ও টিকিটিংয়ের জন্য।" },
    { year: "২০০৮", title: "উত্তরা অফিস উদ্বোধন",          body: "ঢাকার চাহিদা আমাদের উত্তরা সেক্টর ৭-এ একটি পূর্ণাঙ্গ কর্পোরেট অফিস স্থাপনে বাধ্য করে।" },
    { year: "২০০৯", title: "হজ লাইসেন্স নং-০২৫২ পাই",    body: "ধর্ম মন্ত্রণালয় কর্তৃক প্রতি মৌসুমে হাজী গ্রুপ পরিচালনার অনুমোদন।" },
    { year: "২০১১", title: "শাহী এয়ার ইন্টারন্যাশনাল শুরু", body: "নৈতিক জনশক্তি রপ্তানির জন্য আলাদা ডেস্ক — দ্রুত সিস্টার কনসার্ন হয়ে যায়।" },
    { year: "২০১৬", title: "চান্দিনা ভিলেজ হাউজিং লিমিটেড", body: "প্রতিষ্ঠাতা চান্দিনা, কুমিল্লায় মাইগ্রেন্ট-ওয়ার্কার পরিবারের জন্য একটি প্রকল্প দিয়ে জমি উন্নয়নে প্রবেশ করেন।" },
    { year: "২০১৯", title: "আবাবিল ট্রেডিং ফুড প্রোডাক্টস", body: "আবাবিল ব্র্যান্ডের অধীনে পরিবারিক পণ্য — চাল, ডাল, ঘি, খেজুর — তে শাখা বিস্তার।" },
    { year: "২০২৪", title: "১১,০০০+ হাজী সেবা",          body: "খাজা এয়ার ট্র্যাভেলস দিয়ে যাওয়া হাজীদের ক্রমবর্ধমান সংখ্যা এগারো হাজার অতিক্রম।" }
  ] : [
    { year: "2003", title: "Founded in Cumilla",            body: "Mr. Amdadul Haque Mir opens a single-desk travel office, primarily for Umrah and ticketing." },
    { year: "2008", title: "Opened the Uttara office",      body: "Demand from Dhaka pushes us to establish a full corporate office in Uttara Sector 7." },
    { year: "2009", title: "Awarded Hajj Licence No-0252",  body: "Recognised by the Ministry of Religious Affairs to lead pilgrim groups every season." },
    { year: "2011", title: "Shahi Air International begins", body: "A separate desk for ethical manpower export — quickly becomes a sister concern." },
    { year: "2016", title: "Chandina Village Housing Ltd.", body: "Founder enters land development with a project for migrant-worker families in Chandina, Cumilla." },
    { year: "2019", title: "Abibil Trading Food Products Ltd.", body: "Branches into pantry essentials — rice, lentils, ghee, dates — under the Abibil brand." },
    { year: "2024", title: "11,000+ pilgrims served",       body: "The cumulative count of pilgrims passing through Khaja Air Travels crosses eleven thousand." }
  ];

  const storyParas = lang === "bn" ? [
    "প্রথম দিকে এজেন্সি ছিল শুধু একটি স্টিল আলমিরা, একটি ডেস্ক ও Amadeus টার্মিনাল। জনাব " + SITE.proprietor + " নিজেই টিকিট আনতে বিমানবন্দরে যেতেন, ক্লায়েন্টদের সাথে চায়ের আড্ডায় বসে হজ এজেন্সি ও ট্যুর অপারেটরের পার্থক্য বুঝিয়ে দিতেন, এবং ডকুমেন্ট চেকলিস্ট লাইন বাই লাইন ঘুরে দেখাতেন।",
    "দুই দশক পরও মডেল বদলায়নি — শুধু আকার বদলেছে। আজও আমরা বিশ্বাস করি যেকোনো ভ্রমণ সম্পর্কের সবচেয়ে গুরুত্বপূর্ণ মুহূর্ত হলো প্রথম কথোপকথন। আজও আমাদের টিম ফোন তোলে। আজও মুয়াল্লিম প্রতিটি গ্রুপের সাথে যাত্রার আগে মানাসিক ঘুরে দেখান।",
    "এই পথে প্রতিষ্ঠাতার অন্যান্য ব্যবসা — জনশক্তি রপ্তানির জন্য শাহী এয়ার ইন্টারন্যাশনাল, পরিকল্পিত আবাসিক প্লটের জন্য চান্দিনা ভিলেজ হাউজিং এবং সৎ খাবারের জন্য আবাবিল ট্রেডিং — ট্রাভেল এজেন্সির পাশে বেড়ে উঠেছে। তারা স্টাফ ভাগ করে, নীতি ভাগ করে এবং একটি ফোন লাইন ভাগ করে যা যেকোনো সময় তুলতে পারেন।"
  ] : [
    "In the early years, the agency was just a steel almirah, a single desk and an Amadeus terminal. Mr. " + SITE.proprietor + " would ride to the airport himself to pick up tickets, sit with clients over tea to explain the difference between a Hajj agency and a tour operator, and walk through document checklists line by line.",
    "Two decades on, the model has not changed — only the scale has. We still believe the most important moment of any travel relationship is the first conversation. Our team still picks up the phone. Our Mu'allim still walks every group through Manasik in person before departure.",
    "Along the way, the founder's other businesses — Shahi Air International for manpower export, Chandina Village Housing for planned residential plots and Abibil Trading for honest food — have grown alongside the travel agency. They share staff, share principles, and share one phone line you can pick up at any hour."
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tp(t.nav.home), href: "/" },
          { name: tp(t.nav.about), href: "/about" }
        ])}
      />
      <PageHero
        kicker={tp(t.page.about.kicker)}
        title={
          <>
            {tp(t.page.about.titleA)} <span className="gradient-text">{tp(t.page.about.titleB)}</span> {tp(t.page.about.titleC)}
          </>
        }
        subtitle={tp(t.page.about.sub)}
        tone="emerald"
      >
        <div className="flex flex-wrap gap-3">
          <Link href={lp("/contact")} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
            {tp(t.page.about.visit)}
            <ArrowRight className="size-4" />
          </Link>
          <Link href={lp("/branches")} className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-sky-500 hover:text-sky-700">
            {tp(t.page.about.meet)}
          </Link>
        </div>
      </PageHero>

      <section className="section-pad">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">{tp(t.page.about.story)}</div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-[40px]">
                  {tp(t.page.about.storyTitleA)} <span className="gradient-text">{tp(t.page.about.storyTitleB)}</span>
                </h2>
              </Reveal>
              <div className="prose prose-lg mt-6 max-w-none text-ink-muted">
                {storyParas.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="lg:col-span-5">
              <Reveal y={36}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-border">
                  <Image
                    src="/images/about/team.webp"
                    alt={lang === "bn" ? "উত্তরা অফিসে খাজা এয়ার ট্র্যাভেলস টিম" : "Khaja Air Travels team at the Uttara office"}
                    fill
                    sizes="(min-width:1024px) 400px, 80vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6 text-white">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{tp(t.page.about.founder)}</div>
                    <div className="mt-1 font-display text-2xl font-bold">{SITE.proprietor}</div>
                    <div className="mt-0.5 text-sm text-white/80">{tp(t.page.about.founderRole)}</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-paper-2">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-700">{tp(t.page.about.values)}</div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-[40px]">
                {tp(t.page.about.valuesTitleA)} <span className="gradient-text">{tp(t.page.about.valuesTitleB)}</span>
              </h2>
            </div>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Reveal key={v.title}>
                <div className="h-full rounded-3xl border border-border bg-white p-6">
                  <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 text-sky-700">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-saffron-700">{tp(t.page.about.journey)}</div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-[40px]">{tp(t.page.about.journeyTitle)}</h2>
            </div>
          </Reveal>
          <div className="relative mx-auto mt-14 max-w-4xl">
            <div aria-hidden="true" className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-sky-300 via-emerald-300 to-saffron-300 md:left-1/2 md:block" />
            <ol className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.05}>
                  <li className={`relative grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                    <div className="md:[direction:ltr]">
                      <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                        <div className="font-display text-3xl font-bold text-sky-700">{m.year}</div>
                        <div className="mt-1 font-semibold text-ink">{m.title}</div>
                        <p className="mt-2 text-sm text-ink-muted leading-relaxed">{m.body}</p>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-2 top-7 hidden size-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 ring-4 ring-white md:left-1/2 md:block" />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <Stats />

      <section className="section-pad">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">{tp(t.page.about.group)}</div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-[40px]">
                {tp(t.page.about.groupTitleA)} <span className="gradient-text">{tp(t.page.about.groupTitleB)}</span>
              </h2>
              <p className="mt-4 text-base text-ink-muted">{tp(t.page.about.groupSub)}</p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {branches.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.06}>
                <Link href={lp(`/branches/${b.slug}`)} className="group block h-full rounded-3xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="grid size-12 place-items-center rounded-xl bg-paper-2 text-sky-700">
                    <Building2 className="size-5" />
                  </div>
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-ink-muted">{tp(t.sections.branches.estd)} {b.established}</div>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-ink-muted">{b.role}</p>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-3">{b.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 group-hover:text-sky-800">
                    {tp(t.page.about.readMore)} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
