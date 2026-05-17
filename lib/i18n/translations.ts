export type Lang = "en" | "bn";

export const LANGS: { code: Lang; label: string; full: string }[] = [
  { code: "en", label: "EN", full: "English" },
  { code: "bn", label: "BN", full: "বাংলা" }
];

export const t = {
  topbar: {
    licence: {
      en: "Govt. Approved Hajj Agency — Licence No-0252",
      bn: "সরকার অনুমোদিত হজ এজেন্সি — লাইসেন্স নং-০২৫২"
    },
    location: { en: "Uttara, Dhaka", bn: "উত্তরা, ঢাকা" }
  },
  nav: {
    home:     { en: "Home",     bn: "হোম" },
    about:    { en: "About",    bn: "আমাদের সম্পর্কে" },
    services: { en: "Services", bn: "সেবাসমূহ" },
    branches: { en: "Branches", bn: "শাখাসমূহ" },
    blog:     { en: "Blog",     bn: "ব্লগ" },
    gallery:  { en: "Gallery",  bn: "গ্যালারি" },
    contact:  { en: "Contact",  bn: "যোগাযোগ" }
  },
  cta: {
    whatsapp:        { en: "WhatsApp",            bn: "হোয়াটসঅ্যাপ" },
    whatsappUs:      { en: "WhatsApp Us",         bn: "হোয়াটসঅ্যাপ করুন" },
    whatsappDesk:    { en: "WhatsApp our desk",   bn: "ডেস্কে হোয়াটসঅ্যাপ" },
    chatOnWhatsapp:  { en: "Chat on WhatsApp",    bn: "হোয়াটসঅ্যাপে চ্যাট" },
    planHajj:        { en: "Plan my Hajj / Umrah",bn: "হজ / উমরাহ প্ল্যান করুন" },
    visitOffice:     { en: "Visit our office",    bn: "অফিসে আসুন" },
    callUs:          { en: "Call us",             bn: "ফোন করুন" }
  },
  hero: {
    kicker:    { en: "Govt. Approved Hajj Agency — Licence No-0252", bn: "সরকার অনুমোদিত হজ এজেন্সি — লাইসেন্স নং-০২৫২" },
    line1:     { en: "Your journey to the",        bn: "হারামাইনের পথে" },
    line2:     { en: "Haramain begins",            bn: "আপনার যাত্রার শুরু" },
    line3pre:  { en: "with",                       bn: "—" },
    subtitle: {
      en: "Two decades. Eleven thousand pilgrims to the Haramain. Sixty thousand travellers across the world. Whether it is Hajj, Umrah, a confirmed air ticket or a family holiday in Kashmir — we walk with you from the first call to the moment you are back home.",
      bn: "দুই দশকের অভিজ্ঞতা। হারামাইনে এগারো হাজার হাজী। বিশ্বজুড়ে ষাট হাজার ভ্রমণকারী। হজ, উমরাহ, কনফার্ম এয়ার টিকিট কিংবা কাশ্মীরে পরিবার নিয়ে ছুটি — প্রথম ফোন থেকে ঘরে ফেরা পর্যন্ত আমরা সবসময় আপনার পাশে।"
    },
    scroll: { en: "Scroll", bn: "স্ক্রল" },
    stats: {
      years:    { en: "Years of khedmat",      bn: "বছরের খেদমত" },
      pilgrims: { en: "Hajj pilgrims served",  bn: "হাজী সেবা প্রদান" },
      airlines: { en: "Airlines on offer",     bn: "এয়ারলাইনস" }
    },
    cards: {
      hajj:   { title: { en: "Hajj 2026",        bn: "হজ ২০২৬" },        sub: { en: "Quota open",            bn: "কোটা খোলা" } },
      ticket: { title: { en: "Air Ticket",       bn: "এয়ার টিকিট" },     sub: { en: "90+ airlines",          bn: "৯০+ এয়ারলাইনস" } },
      visa:   { title: { en: "Visa Help",        bn: "ভিসা সহায়তা" },    sub: { en: "Saudi · UAE · Schengen",bn: "সৌদি · ইউএই · শেনগেন" } },
      hotel:  { title: { en: "Hotel near Haram", bn: "হারামের কাছে হোটেল" },sub: { en: "300+ properties",     bn: "৩০০+ হোটেল" } }
    }
  },
  footer: {
    services:  { en: "Services",      bn: "সেবাসমূহ" },
    branches:  { en: "Our Branches",  bn: "আমাদের শাখা" },
    company:   { en: "Company",       bn: "কোম্পানি" },
    contact:   { en: "Contact",       bn: "যোগাযোগ" },
    aboutUs:   { en: "About Us",      bn: "আমাদের সম্পর্কে" },
    blog:      { en: "Blog",          bn: "ব্লগ" },
    gallery:   { en: "Gallery",       bn: "গ্যালারি" },
    faq:       { en: "FAQ",           bn: "প্রশ্নোত্তর" },
    contactLi: { en: "Contact",       bn: "যোগাযোগ" },
    tagline: {
      en: "Khaja Air Travels is a Government Approved Hajj agency and full-service travel house — Hajj & Umrah, air ticketing, visa processing, hotel booking and curated tour packages from Bangladesh since 2003.",
      bn: "খাজা এয়ার ট্র্যাভেলস একটি সরকার অনুমোদিত হজ এজেন্সি এবং পূর্ণাঙ্গ ট্র্যাভেল হাউস — ২০০৩ সাল থেকে বাংলাদেশ থেকে হজ ও উমরাহ, এয়ার টিকিট, ভিসা প্রসেসিং, হোটেল বুকিং ও কিউরেটেড ট্যুর প্যাকেজ।"
    },
    badges: {
      mora: { en: "MoRA Approved", bn: "ধর্ম মন্ত্রণালয় অনুমোদিত" },
      iata: { en: "IATA Verified", bn: "আইএটিএ ভেরিফায়েড" },
      haab: { en: "HAAB Member",   bn: "হাব সদস্য" }
    },
    rights: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
    crafted: {
      en: "Crafted with care in Dhaka — for travellers from every corner of Bangladesh.",
      bn: "ঢাকায় যত্ন সহকারে তৈরি — বাংলাদেশের প্রতিটি প্রান্তের ভ্রমণকারীর জন্য।"
    },
    proprietor: { en: "Proprietor", bn: "স্বত্বাধিকারী" }
  },
  service: {
    "hajj-umrah":      { en: "Hajj & Umrah",     bn: "হজ ও উমরাহ" },
    "air-ticketing":   { en: "Air Ticketing",    bn: "এয়ার টিকিটিং" },
    "visa-processing": { en: "Visa Processing",  bn: "ভিসা প্রসেসিং" },
    "tour-packages":   { en: "Tour Packages",    bn: "ট্যুর প্যাকেজ" },
    "hotel-booking":   { en: "Hotel Booking",    bn: "হোটেল বুকিং" }
  }
} as const;

export type Translatable = { en: string; bn: string };
