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
    location: { en: "Dhaka", bn: "ঢাকা" }
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
  },

  sections: {
    services: {
      kicker:   { en: "What we do",                          bn: "আমরা যা করি" },
      titleA:   { en: "Five desks. One promise:",            bn: "পাঁচটি ডেস্ক। এক প্রতিশ্রুতি:" },
      titleB:   { en: "khedmat over upsell.",                bn: "আপসেলের চেয়ে খেদমত।" },
      sub:      { en: "Every desk in our Dhaka office is run by an experienced team lead. No call centre. No bouncing between agents. The person who answers the phone is the person who closes your file.", bn: "আমাদের ঢাকা অফিসের প্রতিটি ডেস্ক একজন অভিজ্ঞ টিম লিডার চালান। কোনো কল সেন্টার নেই। এজেন্ট থেকে এজেন্টে ঘোরাঘুরি নেই। যিনি ফোন তোলেন তিনিই আপনার ফাইল ক্লোজ করেন।" }
    },
    hajj: {
      kicker:   { en: "Our Flagship Service",                bn: "আমাদের প্রধান সেবা" },
      titleA:   { en: "Hajj & Umrah, performed the way",     bn: "হজ ও উমরাহ — যেমনটি" },
      titleB:   { en: "it should be.",                       bn: "হওয়া উচিত।" },
      sub:      { en: "From the day you bring your passport to our Dhaka office to the day you return home with a Hajj certificate in your hand, every step is planned, every cost is itemised, and a Bangla-speaking khadem stays with the group through every ritual.", bn: "যেদিন আপনি পাসপোর্ট নিয়ে আমাদের ঢাকা অফিসে আসেন থেকে যেদিন হাতে হজ সার্টিফিকেট নিয়ে বাসায় ফেরেন — প্রতিটি ধাপ পরিকল্পিত, প্রতিটি খরচ আইটেমাইজড, এবং প্রতিটি ইবাদতে গ্রুপের সাথে একজন বাংলাভাষী খাদেম থাকেন।" },
      ctaSee:   { en: "See full Hajj & Umrah package",       bn: "সম্পূর্ণ হজ ও উমরাহ প্যাকেজ দেখুন" },
      ctaBook:  { en: "Book a free consultation",            bn: "ফ্রি পরামর্শের জন্য বুক করুন" },
      tagSeason:{ en: "Hajj 1447 H",                         bn: "হজ ১৪৪৭ হিজরি" },
      tagOpen:  { en: "Quota now open",                      bn: "কোটা এখন খোলা" },
      tagDist:  { en: "Hotel within 280m of Bab Marwah, direct Biman flight.", bn: "বাব মারওয়াহ থেকে ২৮০ মিটারের মধ্যে হোটেল, বিমানের ডাইরেক্ট ফ্লাইট।" },
      tagPil:   { en: "11,000+ pilgrims",                    bn: "১১,০০০+ হাজী" },
      tagSince: { en: "since 2003",                          bn: "২০০৩ থেকে" },
      tagMu:    { en: "Bangla Mu'allim",                     bn: "বাংলাভাষী মুয়াল্লিম" },
      tagGroup: { en: "on every group",                      bn: "প্রতিটি গ্রুপে" },
      f1: { l: { en: "Govt. approved",       bn: "সরকার অনুমোদিত" },         d: { en: "Hajj Licence No-0252 from MoRA", bn: "ধর্ম মন্ত্রণালয়ের হজ লাইসেন্স নং-০২৫২" } },
      f2: { l: { en: "Hotels near Haram",    bn: "হারামের কাছে হোটেল" },     d: { en: "250m – 900m from Bab Marwah / Bab Fahd", bn: "বাব মারওয়াহ / বাব ফাহদ থেকে ২৫০–৯০০ মিটার" } },
      f3: { l: { en: "Direct flights",       bn: "ডাইরেক্ট ফ্লাইট" },         d: { en: "Biman, Saudia, Flynas — preferred routing", bn: "বিমান, সৌদিয়া, ফ্লাইনাস — পছন্দের রুটিং" } },
      f4: { l: { en: "Bangla Mu'allim",      bn: "বাংলাভাষী মুয়াল্লিম" },     d: { en: "Daily orientation, Hajj manasik in Bangla", bn: "দৈনিক ওরিয়েন্টেশন, বাংলায় হজ মানাসিক" } },
      f5: { l: { en: "Mina Maktab",          bn: "মিনা মাকতাব" },             d: { en: "Reserved early to secure better tents", bn: "ভাল তাঁবু নিশ্চিত করতে আগে সংরক্ষিত" } },
      f6: { l: { en: "Family khedmat",       bn: "পারিবারিক খেদমত" },         d: { en: "Single point of contact for the journey", bn: "যাত্রার জন্য একটি যোগাযোগ পয়েন্ট" } }
    },
    branches: {
      kicker: { en: "Our Branches",                 bn: "আমাদের শাখা" },
      titleA: { en: "One family.",                  bn: "এক পরিবার।" },
      titleB: { en: "Four houses.",                 bn: "চারটি ঘর।" },
      sub:    { en: "Khaja Air Travels is the flagship, but the family extends into manpower, housing and food. Each company runs independently — yet shares the same standard of service that our founder built the first office on.", bn: "খাজা এয়ার ট্র্যাভেলস ফ্ল্যাগশিপ, কিন্তু পরিবার বিস্তৃত হয়েছে জনশক্তি, আবাসন এবং খাবারে। প্রতিটি কোম্পানি স্বাধীনভাবে চলে — তবু একই মানের সেবা ভাগ করে যা আমাদের প্রতিষ্ঠাতা প্রথম অফিসে গড়ে তুলেছিলেন।" },
      estd:   { en: "Est.",                         bn: "প্রতিষ্ঠা" },
      explore:{ en: "Explore",                      bn: "বিস্তারিত" }
    },
    process: {
      kicker:  { en: "How we work",                bn: "আমরা যেভাবে কাজ করি" },
      titleA:  { en: "Four simple steps.",         bn: "চারটি সহজ ধাপ।" },
      titleB:  { en: "Zero stress.",               bn: "শূন্য চাপ।" },
      sub:     { en: "We refuse to make booking a trip feel like a paperwork war. Here is what working with us actually looks like.", bn: "একটি ট্রিপ বুক করাকে কাগজপত্রের যুদ্ধের মতো করতে আমরা অস্বীকার করি। আমাদের সাথে কাজ করা আসলে কেমন দেখায় তা এখানে।" },
      s1l: { en: "Talk",     bn: "কথা" },
      s1t: { en: "Tell us what you need",  bn: "আপনার প্রয়োজন বলুন" },
      s1b: { en: "Walk into our Dhaka office, call us or WhatsApp. We listen first, ask about your dates, budget and preferences.", bn: "আমাদের ঢাকা অফিসে আসুন, কল করুন বা হোয়াটসঅ্যাপ করুন। আমরা প্রথমে শুনি, আপনার তারিখ, বাজেট ও পছন্দ জানতে চাই।" },
      s2l: { en: "Plan",     bn: "পরিকল্পনা" },
      s2t: { en: "We design and quote",    bn: "আমরা ডিজাইন ও কোট করি" },
      s2b: { en: "Within 24 hours you get a clear, itemised quote — no hidden fees. We hold flights and rooms for 72 hours at no cost.", bn: "২৪ ঘণ্টার মধ্যে স্পষ্ট, আইটেমাইজড কোট পাবেন — কোনো লুকানো ফি নেই। আমরা ফ্লাইট ও রুম ৭২ ঘণ্টা বিনামূল্যে হোল্ড করি।" },
      s3l: { en: "Travel",   bn: "ভ্রমণ" },
      s3t: { en: "We handle every detail", bn: "আমরা প্রতিটি বিষয় সামলাই" },
      s3b: { en: "Visa, ticket, hotel, transport, guide — issued and confirmed. You receive printed itineraries the day before departure.", bn: "ভিসা, টিকিট, হোটেল, ট্রান্সপোর্ট, গাইড — ইস্যু ও কনফার্ম। প্রস্থানের আগের দিন প্রিন্ট করা ইটিনারারি পাবেন।" },
      s4l: { en: "Aftercare",bn: "আফটারকেয়ার" },
      s4t: { en: "Khedmat continues",      bn: "খেদমত চলতে থাকে" },
      s4b: { en: "From WhatsApp support on the trip to a post-Hajj follow up call, we stay in touch. Many of our pilgrims become friends.", bn: "ট্রিপে হোয়াটসঅ্যাপ সাপোর্ট থেকে হজ-পরবর্তী ফলো-আপ কল পর্যন্ত আমরা যোগাযোগে থাকি। আমাদের অনেক হাজী বন্ধু হয়ে যান।" }
    },
    stats: {
      pilgrims: { en: "Pilgrims to the Haramain", bn: "হারামাইনের হাজী" },
      travel:   { en: "Travellers booked",        bn: "ভ্রমণকারী বুকড" },
      airlines: { en: "Airlines on offer",        bn: "এয়ারলাইনস" },
      countries:{ en: "Countries served",         bn: "দেশ সেবা" }
    },
    why: {
      kicker:  { en: "Why families choose us",      bn: "পরিবারগুলো কেন আমাদের বেছে নেয়" },
      titleA:  { en: "Trusted by Bangladesh for two decades.", bn: "দুই দশক ধরে বাংলাদেশের আস্থায়।" },
      titleB:  { en: "Here is why.",                bn: "এই হলো কারণ।" },
      sub:     { en: "It is not the slogans, it is the small details that define a travel partner. These six are non-negotiable for us — every day, every booking.", bn: "স্লোগান নয়, ছোট বিষয়গুলোই একজন ট্রাভেল পার্টনারকে সংজ্ঞায়িত করে। এই ছয়টি আমাদের জন্য আপোসহীন — প্রতিদিন, প্রতিটি বুকিংয়ে।" },
      r1: { t: { en: "Government Approved Hajj agency", bn: "সরকার অনুমোদিত হজ এজেন্সি" }, b: { en: "Licence No-0252 from the Ministry of Religious Affairs. The licence is on display at our reception — feel free to verify.", bn: "ধর্ম মন্ত্রণালয়ের লাইসেন্স নং-০২৫২। লাইসেন্স আমাদের রিসেপশনে প্রদর্শিত — যাচাই করতে পারেন।" } },
      r2: { t: { en: "IATA verified consolidator",  bn: "আইএটিএ ভেরিফায়েড কনসলিডেটর" }, b: { en: "Direct contracts with Biman, Saudia, Emirates, Qatar, Etihad and 80+ more — so the fare you see is the fare you pay.", bn: "বিমান, সৌদিয়া, এমিরেটস, কাতার, ইতিহাদ ও ৮০+ অন্যান্যর সাথে সরাসরি চুক্তি — তাই আপনি যে ভাড়া দেখেন তা-ই দেন।" } },
      r3: { t: { en: "Transparent, itemised pricing", bn: "স্বচ্ছ, আইটেমাইজড দাম" }, b: { en: "Every invoice shows airline tax, visa fee, our service charge and BSTI/VAT separately. No hidden numbers, ever.", bn: "প্রতিটি ইনভয়েসে এয়ারলাইন কর, ভিসা ফি, আমাদের সার্ভিস চার্জ এবং BSTI/VAT আলাদা দেখানো। কখনোই লুকানো সংখ্যা নেই।" } },
      r4: { t: { en: "Same-day issuance",           bn: "সেইম-ডে ইস্যু" }, b: { en: "Confirmed payment in the morning means an e-ticket in your inbox by afternoon. We do not waste your trip days on paperwork.", bn: "সকালে কনফার্ম পেমেন্ট মানে বিকেলেই ইনবক্সে ই-টিকিট। কাগজপত্রে আপনার ট্রিপের দিন নষ্ট করি না।" } },
      r5: { t: { en: "Bangla-speaking khedmat",     bn: "বাংলাভাষী খেদমত" }, b: { en: "From the Mu'allim on Hajj to our visa officer in Dhaka — every conversation happens in your comfortable language.", bn: "হজের মুয়াল্লিম থেকে ঢাকার ভিসা অফিসার পর্যন্ত — প্রতিটি কথোপকথন আপনার স্বাচ্ছন্দ্যের ভাষায়।" } },
      r6: { t: { en: "24/7 emergency line",         bn: "২৪/৭ ইমার্জেন্সি লাইন" }, b: { en: "A real human on the other end of the phone — even at 3 AM when your flight is delayed and you do not know what to do next.", bn: "ফোনের অপর প্রান্তে একজন বাস্তব মানুষ — এমনকি রাত ৩টায় যখন আপনার ফ্লাইট দেরি হয় এবং পরে কী করবেন জানেন না।" } }
    },
    testimonials: {
      kicker: { en: "Voice of our travellers",      bn: "আমাদের ভ্রমণকারীদের কণ্ঠ" },
      titleA: { en: "Real journeys.",                bn: "বাস্তব যাত্রা।" },
      titleB: { en: "Real words.",                   bn: "বাস্তব কথা।" },
      sub:    { en: "Every one of these is a real Khaja Air Travels customer. Reach out and we will happily put you in touch with any of them as a reference.", bn: "এদের প্রত্যেকেই খাজা এয়ার ট্র্যাভেলসের বাস্তব গ্রাহক। যোগাযোগ করুন, রেফারেন্স হিসেবে যেকোনো একজনের সাথে আনন্দের সাথে আপনাকে যুক্ত করব।" },
      prev:   { en: "Previous testimonial",         bn: "পূর্ববর্তী মন্তব্য" },
      next:   { en: "Next testimonial",             bn: "পরবর্তী মন্তব্য" }
    },
    blog: {
      kicker: { en: "From the journal",             bn: "জার্নাল থেকে" },
      titleA: { en: "Travel notes from the",        bn: "ভ্রমণ নোট" },
      titleB: { en: "Khaja desk.",                  bn: "খাজা ডেস্ক থেকে।" },
      sub:    { en: "Honest, practical writing from our Hajj, Visa and Tours teams. New article every fortnight.", bn: "আমাদের হজ, ভিসা ও ট্যুর টিমের সৎ, ব্যবহারিক লেখা। প্রতি পাক্ষিকে নতুন আর্টিকেল।" },
      all:    { en: "All articles",                 bn: "সব আর্টিকেল" },
      read:   { en: "Read article",                 bn: "আর্টিকেল পড়ুন" },
      readMin:{ en: "Read",                         bn: "পড়ুন" },
      minRead:{ en: "min read",                     bn: "মিনিট পড়া" },
      latest: { en: "Latest",                       bn: "সর্বশেষ" },
      moreFrom:{ en: "More from the journal",      bn: "জার্নাল থেকে আরও" },
      continue:{ en: "Continue reading",            bn: "পড়া চালিয়ে যান" },
      writtenBy:{ en: "Written by",                 bn: "লিখেছেন" },
      backTo: { en: "Back to journal",              bn: "জার্নালে ফিরুন" },
      filterAll: { en: "All", bn: "সব" }
    },
    cta: {
      kicker: { en: "Ready when you are",           bn: "আপনার প্রস্তুতির অপেক্ষায়" },
      titleA: { en: "One conversation. One trusted partner.", bn: "একটি কথোপকথন। একজন বিশ্বস্ত পার্টনার।" },
      titleB: { en: "A lifetime of journeys.",       bn: "আজীবনের যাত্রা।" },
      sub:    { en: "Walk into our Dhaka office, call us, or just say \"Assalamu Alaikum\" on WhatsApp. We will take it from there.", bn: "আমাদের ঢাকা অফিসে আসুন, কল করুন, বা হোয়াটসঅ্যাপে শুধু \"আসসালামু আলাইকুম\" বলুন। আমরা এরপর থেকে নিয়ে নেব।" }
    },
    airlines: { en: "Issuing tickets across 90+ airlines including", bn: "৯০+ এয়ারলাইনে টিকিট ইস্যু — অন্তর্ভুক্ত" },
    leadership: {
      kicker: { en: "Our Leadership", bn: "আমাদের নেতৃত্ব" },
      titleA: { en: "The people behind",      bn: "যারা গড়েছেন" },
      titleB: { en: "the khedmat.",           bn: "এই খেদমত।" },
      sub:    { en: "Khaja International Group is led by a team that treats every pilgrim and traveller like family — and has done so for two decades.", bn: "খাজা ইন্টারন্যাশনাল গ্রুপ পরিচালিত হয় এমন একটি টিম দ্বারা যারা প্রতিটি হাজী ও ভ্রমণকারীকে পরিবারের মতো দেখে — দুই দশক ধরে।" },
      meet:   { en: "Meet our leadership",    bn: "আমাদের নেতৃত্ব দেখুন" }
    },
    group: {
      part:   { en: "Part of",                bn: "একটি অংশ" },
      name:   { en: "Khaja International Group", bn: "খাজা ইন্টারন্যাশনাল গ্রুপ" }
    }
  },

  page: {
    about: {
      kicker: { en: "About us",                   bn: "আমাদের সম্পর্কে" },
      titleA: { en: "Twenty years of",            bn: "দুই দশকের" },
      titleB: { en: "khedmat",                    bn: "খেদমত" },
      titleC: { en: "to Bangladesh travellers.",  bn: "বাংলাদেশি ভ্রমণকারীদের প্রতি।" },
      sub:    { en: "What began in 2003 as a small ticketing desk in Cumilla today serves more than 5,000 travellers a year, leads over 200 pilgrims for every Hajj season, and runs a four-company family spanning travel, manpower, housing and food.", bn: "২০০৩ সালে কুমিল্লায় একটি ছোট টিকিটিং ডেস্ক হিসেবে যা শুরু হয়েছিল, আজ তা বছরে ৫,০০০-এর বেশি ভ্রমণকারীকে সেবা দেয়, প্রতি হজ মৌসুমে ২০০-এর বেশি হাজী পরিচালনা করে এবং ভ্রমণ, জনশক্তি, আবাসন ও খাবার জুড়ে চার-কোম্পানির পরিবার চালায়।" },
      visit:  { en: "Visit our office",           bn: "আমাদের অফিসে আসুন" },
      meet:   { en: "Meet our group companies",   bn: "আমাদের গ্রুপ কোম্পানি দেখুন" },
      story:  { en: "Our story",                  bn: "আমাদের গল্প" },
      storyTitleA: { en: "From a Cumilla courtyard to", bn: "কুমিল্লার আঙিনা থেকে" },
      storyTitleB: { en: "eleven thousand pilgrims.",   bn: "এগারো হাজার হাজী পর্যন্ত।" },
      values: { en: "Our values",                 bn: "আমাদের মূল্যবোধ" },
      valuesTitleA: { en: "Four words that",      bn: "চারটি শব্দ যা" },
      valuesTitleB: { en: "shape every booking.", bn: "প্রতিটি বুকিং গঠন করে।" },
      journey: { en: "The journey",               bn: "যাত্রা" },
      journeyTitle: { en: "Two decades, milestone by milestone.", bn: "দুই দশক, একটি একটি মাইলফলক।" },
      group: { en: "Our group of companies",      bn: "আমাদের গ্রুপ কোম্পানি" },
      groupTitleA: { en: "Four houses.",          bn: "চারটি ঘর।" },
      groupTitleB: { en: "One family.",           bn: "এক পরিবার।" },
      groupSub: { en: "Khaja Air Travels is the flagship. Around it sit three sister concerns founded by the same family, each in a sector close to our roots.", bn: "খাজা এয়ার ট্র্যাভেলস ফ্ল্যাগশিপ। এর চারপাশে রয়েছে একই পরিবারের প্রতিষ্ঠিত তিনটি সিস্টার কনসার্ন, প্রতিটি আমাদের শিকড়ের কাছাকাছি একটি সেক্টরে।" },
      readMore: { en: "Read more",                bn: "আরও পড়ুন" },
      founder: { en: "Founder",                   bn: "প্রতিষ্ঠাতা" },
      founderRole: { en: "Proprietor, Khaja Air Travels", bn: "স্বত্বাধিকারী, খাজা এয়ার ট্র্যাভেলস" }
    },
    services: {
      kicker: { en: "Our services",               bn: "আমাদের সেবা" },
      titleA: { en: "Five desks.",                bn: "পাঁচটি ডেস্ক।" },
      titleB: { en: "One promise.",               bn: "এক প্রতিশ্রুতি।" },
      sub:    { en: "Each of our five service desks runs as a focused, expert team — but they share information freely so your file moves quickly between Hajj, ticketing, visa, hotel and tour without retelling your story three times.", bn: "আমাদের পাঁচটি সেবা ডেস্কের প্রতিটি ফোকাসড, বিশেষজ্ঞ টিম হিসেবে চলে — তবে তারা মুক্তভাবে তথ্য শেয়ার করে যাতে আপনার ফাইল হজ, টিকিটিং, ভিসা, হোটেল ও ট্যুরের মধ্যে দ্রুত চলে, তিনবার আপনার গল্প পুনরায় না বলে।" },
      desk:   { en: "Desk",                       bn: "ডেস্ক" },
      highlights: { en: "Highlights",             bn: "মূল বৈশিষ্ট্য" },
      details: { en: "details",                   bn: "বিস্তারিত" },
      whatInc: { en: "What is included",          bn: "যা অন্তর্ভুক্ত" },
      howWeWork:{ en: "How we work — step by step",bn: "আমরা যেভাবে কাজ করি — ধাপে ধাপে" },
      faqHead:{ en: "Frequently asked",           bn: "সাধারণ প্রশ্ন" },
      quickAns:{ en: "Need a quick answer?",       bn: "দ্রুত উত্তর চান?" },
      talkTo:  { en: "Talk to our",                bn: "কথা বলুন আমাদের" },
      desk2:   { en: "desk",                       bn: "ডেস্কের সাথে" },
      whatsapp:{ en: "WhatsApp this desk",         bn: "এই ডেস্কে হোয়াটসঅ্যাপ" },
      callUs:  { en: "Call",                       bn: "কল করুন" },
      visitOff:{ en: "Visit our office",           bn: "আমাদের অফিসে আসুন" },
      other:   { en: "Other services",             bn: "অন্যান্য সেবা" }
    },
    branches: {
      kicker: { en: "Our Branches",               bn: "আমাদের শাখা" },
      titleA: { en: "One family,",                bn: "এক পরিবার," },
      titleB: { en: "four houses.",               bn: "চারটি ঘর।" },
      sub:    { en: "Founded by Mr. Amdadul Haque Mir, the group started with Khaja Air Travels in 2003 and has grown into a four-company family spanning travel, manpower, housing and food. Each company runs independently — yet all share the same standard of khedmat.", bn: "জনাব আমদাদুল হক মির কর্তৃক প্রতিষ্ঠিত এই গ্রুপ ২০০৩ সালে খাজা এয়ার ট্র্যাভেলস দিয়ে শুরু হয়ে আজ ভ্রমণ, জনশক্তি, আবাসন ও খাবার জুড়ে চার-কোম্পানির পরিবারে পরিণত হয়েছে। প্রতিটি কোম্পানি স্বাধীনভাবে চলে — তবু সবাই একই মানের খেদমত ভাগ করে।" },
      estab:   { en: "Established",               bn: "প্রতিষ্ঠিত" },
      learn:   { en: "Learn more",                bn: "আরও জানুন" },
      whatDoes:{ en: "What this house does",     bn: "এই ঘর যা করে" },
      hlights: { en: "Highlights",                bn: "মূল বৈশিষ্ট্য" },
      quick:   { en: "Quick facts",               bn: "দ্রুত তথ্য" },
      founder: { en: "Founder",                   bn: "প্রতিষ্ঠাতা" },
      estd:    { en: "Established",               bn: "প্রতিষ্ঠা" },
      what:    { en: "What we do",                bn: "আমরা যা করি" },
      contact: { en: "Contact this branch",       bn: "এই শাখায় যোগাযোগ" },
      wadesk:  { en: "WhatsApp the desk",         bn: "ডেস্কে হোয়াটসঅ্যাপ" },
      other:   { en: "Other branches",            bn: "অন্যান্য শাখা" }
    },
    blog: {
      kicker: { en: "Travel journal",             bn: "ভ্রমণ জার্নাল" },
      titleA: { en: "Notes from our",             bn: "নোট আমাদের" },
      titleB: { en: "Hajj, Visa and Tour desks.", bn: "হজ, ভিসা ও ট্যুর ডেস্ক থেকে।" },
      sub:    { en: "Practical articles, honest checklists and the small details that quietly decide whether a journey goes well — written by the people who book your trip.", bn: "ব্যবহারিক আর্টিকেল, সৎ চেকলিস্ট এবং সেই ছোট বিষয়গুলো যা নীরবে ঠিক করে একটি যাত্রা ভাল হবে কিনা — যারা আপনার ট্রিপ বুক করে তারাই লেখে।" }
    },
    contact: {
      kicker: { en: "Get in touch",               bn: "যোগাযোগ করুন" },
      titleA: { en: "Walk in, call, or just say", bn: "আসুন, কল করুন, বা শুধু বলুন" },
      titleB: { en: "Assalamu Alaikum",           bn: "আসসালামু আলাইকুম" },
      titleC: { en: "on WhatsApp.",               bn: "হোয়াটসঅ্যাপে।" },
      sub:    { en: "Our Dhaka office is open six days a week. Tea is on us. If you cannot come in person, the same team is on the phone and WhatsApp — and we reply within an hour during office hours.", bn: "আমাদের ঢাকা অফিস সপ্তাহে ছয় দিন খোলা। চা আমাদের পক্ষ থেকে। সশরীরে আসতে না পারলেও একই টিম ফোনে ও হোয়াটসঅ্যাপে আছে — অফিস সময়ে এক ঘণ্টার মধ্যে উত্তর দিই।" },
      send:   { en: "Send us a note",             bn: "আমাদের একটি নোট পাঠান" },
      tellWhere:{ en: "Tell us where you'd like to go.", bn: "আমাদের বলুন কোথায় যেতে চান।" },
      tellSub:{ en: "Share a few details and the right desk will reply with a quote and the next step.", bn: "কিছু বিবরণ শেয়ার করুন এবং সঠিক ডেস্ক একটি কোট ও পরবর্তী ধাপ নিয়ে উত্তর দেবে।" },
      head:   { en: "Head office",                bn: "প্রধান কার্যালয়" },
      branchOff:{ en: "Branch offices",           bn: "শাখা অফিস" }
    },
    gallery: {
      kicker: { en: "Gallery",                    bn: "গ্যালারি" },
      titleA: { en: "Moments from",               bn: "মুহূর্ত আমাদের" },
      titleB: { en: "our journeys.",              bn: "যাত্রা থেকে।" },
      sub:    { en: "Snapshots from Hajj seasons, Umrah groups, family tours and a typical morning in our Dhaka office. Every photograph here is from a real Khaja Air Travels trip.", bn: "হজ মৌসুম, উমরাহ গ্রুপ, পারিবারিক ট্যুর এবং আমাদের ঢাকা অফিসের একটি সাধারণ সকালের স্ন্যাপশট। এখানে প্রতিটি ছবি একটি বাস্তব খাজা এয়ার ট্র্যাভেলস ট্রিপ থেকে।" },
      close:  { en: "Close",                      bn: "বন্ধ" }
    },
    faq: {
      kicker: { en: "Frequently asked",           bn: "সাধারণ প্রশ্ন" },
      titleA: { en: "Honest answers to",          bn: "সৎ উত্তর" },
      titleB: { en: "honest questions.",          bn: "সৎ প্রশ্নের।" },
      sub:    { en: "Don't see your question? Pick up the phone, send a WhatsApp or walk into our Dhaka office. We answer everything that does not require a stamp from a sovereign government.", bn: "আপনার প্রশ্ন দেখছেন না? ফোন তুলুন, হোয়াটসঅ্যাপ পাঠান বা ঢাকা অফিসে আসুন। সার্বভৌম সরকারের স্ট্যাম্প প্রয়োজন নেই এমন সব প্রশ্নের উত্তর দিই।" }
    }
  },

  form: {
    name:      { en: "Full name",                     bn: "পুরো নাম" },
    namePh:    { en: "e.g. Md. Rezaul Karim",         bn: "যেমন: মো. রেজাউল করিম" },
    phone:     { en: "Phone number",                  bn: "ফোন নম্বর" },
    phonePh:   { en: "+880 17XX-XXXXXX",              bn: "+৮৮০ ১৭XX-XXXXXX" },
    email:     { en: "Email address",                 bn: "ইমেইল ঠিকানা" },
    emailPh:   { en: "you@example.com",               bn: "you@example.com" },
    service:   { en: "Which desk should we route you to?", bn: "কোন ডেস্কে রুট করব?" },
    choose:    { en: "Choose a service",              bn: "একটি সেবা বাছুন" },
    msg:       { en: "Tell us a bit more",            bn: "আরও কিছু বলুন" },
    msgPh:     { en: "Travel dates, family size, budget range, or just say hello and we will pick it up from there.", bn: "ভ্রমণের তারিখ, পরিবারের আকার, বাজেট রেঞ্জ, বা শুধু হ্যালো বলুন — আমরা সেখান থেকে শুরু করব।" },
    send:      { en: "Send enquiry",                  bn: "অনুসন্ধান পাঠান" },
    sending:   { en: "Sending…",                      bn: "পাঠানো হচ্ছে…" },
    success:   { en: "Jazak Allah khair. Your enquiry has reached our desk — we will reply within one working day.", bn: "জাযাকাল্লাহু খাইরান। আপনার অনুসন্ধান আমাদের ডেস্কে পৌঁছেছে — এক কর্মদিবসের মধ্যে উত্তর দেব।" },
    error:     { en: "Something went wrong. Please WhatsApp us and we will pick it up immediately.", bn: "কিছু ভুল হয়েছে। অনুগ্রহ করে হোয়াটসঅ্যাপ করুন, আমরা সঙ্গে সঙ্গে দেখব।" },
    errName:   { en: "Please tell us your name",      bn: "অনুগ্রহ করে আপনার নাম বলুন" },
    errPhone:  { en: "We need a phone number to reach you", bn: "আপনার কাছে পৌঁছাতে একটি ফোন নম্বর লাগবে" },
    errPhoneFmt:{ en: "Please enter a valid phone number", bn: "একটি বৈধ ফোন নম্বর দিন" },
    errEmail:  { en: "Please share your email",       bn: "অনুগ্রহ করে আপনার ইমেইল শেয়ার করুন" },
    errEmailFmt:{ en: "Please enter a valid email",   bn: "একটি বৈধ ইমেইল দিন" },
    errSvc:    { en: "Pick a desk so we route you correctly", bn: "সঠিক রুটিংয়ের জন্য একটি ডেস্ক বাছুন" },
    errMsg:    { en: "Even one line helps us prepare a useful reply", bn: "এক লাইনই আমাদের একটি কার্যকর উত্তর প্রস্তুতিতে সাহায্য করে" },
    svcGen:    { en: "General enquiry",               bn: "সাধারণ অনুসন্ধান" }
  },

  notFound: {
    head:   { en: "404",                              bn: "৪০৪" },
    sub:    { en: "This itinerary does not exist on our flight board. Let us reroute you to a familiar gate.", bn: "এই ইটিনারারি আমাদের ফ্লাইট বোর্ডে নেই। চলুন আপনাকে পরিচিত গেটে রুট করে দিই।" },
    home:   { en: "Back home",                        bn: "হোমে ফিরুন" },
    browse: { en: "Browse services",                  bn: "সেবা দেখুন" }
  }
} as const;

export type Translatable = { en: string; bn: string };
