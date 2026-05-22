export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  icon: string;
  accent: "sky" | "emerald" | "saffron";
  highlights: string[];
  inclusions: string[];
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  hero: { kicker: string; heading: string; sub: string };
  meta: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: "hajj-umrah",
    title: "Hajj & Umrah",
    short: "Govt. licensed Hajj & year-round Umrah with personal khedmat",
    intro:
      "We are a Government Approved Hajj Agency (Licence No-0252) with more than two decades of khedmat. Our packages cover everything from Mu'allim assistance and visa processing to Makkah-Madinah transfers, Maktab tents in Mina and Arafah, and a dedicated Bangla-speaking guide for every group.",
    icon: "🕋",
    accent: "emerald",
    hero: {
      kicker: "Licence No-0252",
      heading: "Hajj & Umrah, performed the right way",
      sub: "A spiritual journey deserves an organised journey. From the day you submit your passport to the day we receive you back at HSIA, we walk every step beside you."
    },
    highlights: [
      "Government approved Hajj quota every season",
      "Year-round Umrah packages — 14, 21 and 30 days",
      "Bangla speaking Mu'allim and on-ground khadem",
      "Direct flights with Biman, Saudia and Flynas",
      "Hotels within 250m–900m of Haram Sharif",
      "Maktab in Mina/Arafah arranged in advance"
    ],
    inclusions: [
      "Hajj/Umrah visa processing and biometric assistance",
      "Return air ticket (Dhaka — Jeddah/Madinah — Dhaka)",
      "Hotel accommodation in Makkah and Madinah",
      "All ground transfers (airport, Haram, Mina, Arafah, Muzdalifah)",
      "Ziyarah of historical sites in Makkah and Madinah",
      "Ihram, prayer mat, ID lanyard, and travel pouch",
      "Three meals a day in Bangladeshi cuisine",
      "24/7 emergency support hotline in Saudi Arabia"
    ],
    process: [
      {
        title: "Free consultation",
        body: "Visit our Dhaka office or call us on WhatsApp. We listen to your preferences — group size, hotel distance, meal plan — and recommend the package that fits."
      },
      {
        title: "Document submission",
        body: "We collect your passport, photographs, vaccination card and bank documents. Our office handles the Saudi e-visa and Bangladesh MoRA registration on your behalf."
      },
      {
        title: "Orientation & training",
        body: "Before departure we run an Ihram and Manasik orientation in Bangla, led by an experienced Mu'allim. You leave knowing exactly what every day will look like."
      },
      {
        title: "Departure & in-country khedmat",
        body: "Our team escorts you from HSIA check-in to your hotel in Makkah. From that moment, a dedicated khadem stays with the group through every ritual."
      },
      {
        title: "Return & follow up",
        body: "We arrange your return flight, baggage handling and post-Hajj health check-up. Many of our pilgrims become lifelong travel companions of Khaja Air Travels."
      }
    ],
    faq: [
      {
        q: "Are you a Government Approved Hajj agency?",
        a: "Yes. Khaja Air Travels carries Hajj Licence No-0252 issued by the Ministry of Religious Affairs, Government of the People's Republic of Bangladesh. You can verify the licence on the MoRA Hajj portal."
      },
      {
        q: "How early should I book my Hajj?",
        a: "We strongly recommend booking by Muharram or Safar. Saudi quotas fill quickly and early booking gives you the widest choice of hotel distance and flight schedule."
      },
      {
        q: "What is included in your Umrah packages?",
        a: "Every Umrah package includes the e-visa, return ticket, accommodation in Makkah and Madinah, ground transport, Ziyarah and three Bangladeshi meals a day. We also issue a fully itemised invoice — no hidden costs."
      },
      {
        q: "Can I travel alone, or do I need a group?",
        a: "Both options are available. Single travellers join our weekly group departures with a Mu'allim. Families and corporate jamaats can book private packages with their own bus and guide."
      }
    ],
    meta: {
      title: "Hajj & Umrah Packages from Bangladesh | Khaja Air Travels",
      description:
        "Government Approved Hajj Agency (Licence No-0252) offering Hajj 2025, Umrah packages, e-visa processing, hotel booking near Haram Sharif and Bangla-speaking khedmat."
    }
  },
  {
    slug: "air-ticketing",
    title: "Air Ticketing",
    short: "Domestic, regional and worldwide tickets — fast issuance, real fares",
    intro:
      "From a same-day Dhaka — Cox's Bazar hop to a multi-city Dhaka — Istanbul — New York itinerary, our ticketing desk issues confirmed tickets on more than 90 airlines. We operate live GDS terminals (Amadeus and Galileo) so the fare you see is the fare you pay.",
    icon: "✈️",
    accent: "sky",
    hero: {
      kicker: "IATA verified consolidator",
      heading: "Tickets that match your plan, not the other way around",
      sub: "We sit at the GDS terminal with you, compare fares across 90+ airlines, hold the best one for free for 24 hours and only issue once you say yes."
    },
    highlights: [
      "Direct contracts with Biman, Saudia, Emirates, Qatar, Etihad, Flynas, Singapore, Turkish, Malaysia and Air Arabia",
      "Honest 'no-mark-up on government tax' policy",
      "Same-day issuance for confirmed bookings",
      "24/7 emergency rescheduling for our travellers",
      "Group fares for jamaat, family and corporate"
    ],
    inclusions: [
      "Free 24-hour fare hold on every quote",
      "Seat selection and baggage add-ons",
      "Special meal request (Asian veg, Hindu, Halal)",
      "Travel insurance bundling on request",
      "Itinerary printed in English and Bangla"
    ],
    process: [
      { title: "Tell us your route", body: "Share origin, destination, dates and the number of travellers on WhatsApp or in our office. We confirm passport validity in the same call." },
      { title: "We compare fares live", body: "Our agents pull the lowest published fare and the best consolidator fare side by side. You see both, with rules clearly explained." },
      { title: "Hold, then book", body: "We reserve your seat for 24 hours at no charge. Once you confirm payment by bKash, bank or card, the e-ticket arrives in your inbox within an hour." },
      { title: "Pre-departure check-in", body: "We send web check-in links 36 hours before take-off and remind you about visa, transit and PCR requirements (if any)." }
    ],
    faq: [
      { q: "Do you sell domestic tickets too?", a: "Yes — Biman, US-Bangla, NOVOAIR and Air Astra. Same-day issuance is standard and you can pay at the office or via bKash." },
      { q: "Can you reissue a ticket booked elsewhere?", a: "If the original airline allows it, we will reissue. Bring the original PNR, passport and any payment receipts." },
      { q: "Do you charge extra over the airline fare?", a: "Our service fee is fixed and transparent and is shown on every invoice. Government and airline taxes are passed through at cost." }
    ],
    meta: {
      title: "Air Ticket Booking from Bangladesh | Khaja Air Travels",
      description: "Confirmed air tickets on Biman, Saudia, Emirates, Qatar, Etihad, Turkish, Malaysia, Singapore and 80+ more airlines. Honest fares, same-day issuance, 24/7 support."
    }
  },
  {
    slug: "visa-processing",
    title: "Visa Processing",
    short: "Saudi, UAE, Malaysia, Thailand, Schengen and beyond — handled end to end",
    intro:
      "Visa paperwork is where most travel plans die. Our visa desk has processed more than 40,000 successful applications since 2003. We pre-check every document, fill the application in front of you and book the embassy slot the same day.",
    icon: "📘",
    accent: "saffron",
    hero: {
      kicker: "40,000+ visas issued since 2003",
      heading: "We handle the paperwork. You pack the suitcase.",
      sub: "Embassy rules change every few months. We update our checklists every week, so the document you bring to our office is the document the embassy accepts."
    },
    highlights: [
      "Saudi (Hajj, Umrah, business, work) — daily processing",
      "UAE (tourist 30/60 days, transit) — issued in 48–72 hours",
      "Malaysia eVISA, Singapore, Thailand, Indonesia",
      "Schengen, UK, Canada and USA visa filing support",
      "Document attestation from Notary, MoFA and embassies",
      "Visa-on-arrival briefing for 39 eligible countries"
    ],
    inclusions: [
      "Eligibility check before you pay anything",
      "Document scrutiny and translation if required",
      "Online application filing and appointment booking",
      "Cover letter, itinerary, hotel reservation drafting",
      "Insurance arrangement that meets embassy minimums",
      "Visa pick-up and courier to your address"
    ],
    process: [
      { title: "Eligibility call", body: "We review your passport, travel history and finances over a 15-minute call and tell you the realistic approval chance — honestly." },
      { title: "Document checklist", body: "We send a country-specific checklist on WhatsApp. Bring or courier the originals. We scan and return them the same day." },
      { title: "Application filing", body: "We complete the application form, draft the cover letter and book your embassy appointment if biometrics are required." },
      { title: "Tracking and pick-up", body: "You receive an SMS each time the file status changes. Once the visa is stamped we courier the passport to your door." }
    ],
    faq: [
      { q: "Do you guarantee a visa?", a: "No agency can guarantee a sovereign decision. What we can guarantee is a complete, embassy-compliant file and an honest read on your chances before you spend money." },
      { q: "Which countries have the highest approval rate through your office?", a: "Saudi Arabia, UAE, Malaysia, Thailand and Indonesia — for these we have a 96%+ approval rate over the last three years." },
      { q: "Can you help with family-of-four bookings?", a: "Yes. Family applications get a discounted service fee and we coordinate appointments so the whole family goes together." }
    ],
    meta: {
      title: "Visa Processing from Dhaka | Khaja Air Travels",
      description: "End-to-end visa processing for Saudi Arabia, UAE, Malaysia, Thailand, Schengen, UK, USA and Canada from our Dhaka office. Honest eligibility check, transparent fees."
    }
  },
  {
    slug: "tour-packages",
    title: "Tour Packages",
    short: "Curated holidays — Kashmir, Bali, Maldives, Turkey, Egypt and more",
    intro:
      "A holiday is the rare time a Bangladeshi family steps away from work, school and home all at once. We build itineraries that respect Halal preferences, prayer times and Bangladeshi taste — without compromising on comfort.",
    icon: "🌍",
    accent: "sky",
    hero: {
      kicker: "Halal-friendly itineraries",
      heading: "Holidays a Bangladeshi family will actually enjoy",
      sub: "Mosques on the route map. Halal restaurants pre-confirmed. Hotels with a Qibla sign in the room. We sweat the small details so you don't have to."
    },
    highlights: [
      "Kashmir 6N/7D — Srinagar, Gulmarg, Pahalgam, Sonmarg",
      "Bali 5N/6D — Kuta, Ubud and Nusa Penida day trip",
      "Maldives 3N/4D — water villa or beach villa options",
      "Turkey 7N/8D — Istanbul, Cappadocia, Pamukkale, Konya",
      "Egypt 7N/8D — Cairo, Luxor, Aswan and Alexandria",
      "Malaysia + Singapore combo 7N/8D"
    ],
    inclusions: [
      "Return air ticket and visa support",
      "4-star or 5-star hotel with daily breakfast",
      "Private AC vehicle with English-speaking driver",
      "All entrance fees on the published itinerary",
      "Halal lunch and dinner at vetted restaurants",
      "Local SIM with data on arrival"
    ],
    process: [
      { title: "Choose a destination", body: "Pick from our curated catalogue or describe your dream trip. We design custom itineraries for groups of 2 to 50." },
      { title: "Lock the dates", body: "We confirm airfare, hotel and ground availability against your dates and lock everything with a 30% deposit." },
      { title: "Travel-ready handover", body: "A printed itinerary, travel pouch, visa, tickets and a SIM are handed over at our office 48 hours before departure." },
      { title: "On-trip concierge", body: "A WhatsApp group with your travel manager runs through the trip — meal changes, photo spots, weather updates, we are one ping away." }
    ],
    faq: [
      { q: "Can you customise these packages?", a: "Yes. Every itinerary on the site is a starting point. We routinely adjust the hotel category, number of days, sightseeing and meals to suit each family." },
      { q: "Do you arrange honeymoon packages?", a: "Maldives, Bali, Phuket, Kashmir and Turkey are our most-booked honeymoon destinations. We add private candle-light dinner and room decoration on request." },
      { q: "Is travel insurance included?", a: "Visa-required destinations include a basic policy at no extra cost. You can upgrade to a comprehensive plan if you wish." }
    ],
    meta: {
      title: "International Tour Packages from Bangladesh | Khaja Air Travels",
      description: "Halal-friendly tour packages to Kashmir, Bali, Maldives, Turkey, Egypt, Malaysia and Singapore. Custom itineraries, 24/7 on-trip concierge."
    }
  },
  {
    slug: "hotel-booking",
    title: "Hotel Booking",
    short: "Hotels near Haram, in Dubai, KL, Bangkok or anywhere you fly",
    intro:
      "We hold contracted rates with more than 300 hotels in Makkah, Madinah, Dubai, Kuala Lumpur, Bangkok, Istanbul and Kashmir. Booking through us often costs less than the OTAs — and you can settle the bill in Bangladeshi Taka.",
    icon: "🏨",
    accent: "emerald",
    hero: {
      kicker: "300+ contracted hotels",
      heading: "The right room, at the right distance, at the right price",
      sub: "Booking.com tells you the room exists. We tell you whether the lift is working, the prayer area is open and the breakfast is Halal."
    },
    highlights: [
      "Makkah — Hilton Suites, Hyatt Regency, Anjum, Dar Al Tawhid, Pullman",
      "Madinah — Anwar Al Madinah Mövenpick, Pullman, Dar Al Iman Intercontinental, Madinah Hilton",
      "Dubai, Sharjah and Abu Dhabi — Halal-friendly properties",
      "Kuala Lumpur, Bangkok, Singapore — family and business",
      "Kashmir houseboats and Maldives water villas",
      "Pay in Taka, get an invoice in English"
    ],
    inclusions: [
      "Confirmed booking voucher within 24 hours",
      "Free cancellation on most properties up to 7 days",
      "Late check-out and early check-in requested at no charge",
      "Crib, wheelchair and Halal meal pre-arranged"
    ],
    process: [
      { title: "Tell us the city and the dates", body: "Share the destination, check-in/out, number of rooms and any preference — distance from Haram, breakfast plan, family room." },
      { title: "Three options, transparent prices", body: "We send three hotel options with photos, distance to Haram, breakfast plan and a Taka-based price. No mark-up surprises." },
      { title: "Confirm and pay", body: "Pick one, pay by bKash, bank or card. Voucher and invoice arrive in your inbox the same day." }
    ],
    faq: [
      { q: "Can I book a hotel without a flight?", a: "Absolutely — hotels are a stand-alone service. Many families book Makkah and Madinah hotels through us and travel on their own ticket." },
      { q: "Will the rate be lower than Booking.com?", a: "For our contracted properties, yes — usually 6–18% lower. For non-contracted ones we publish the OTA rate plus a small service charge." },
      { q: "Do you book hotels for Hajj season?", a: "Yes, but availability tightens after Rajab. The earlier you book, the closer to Haram you stay." }
    ],
    meta: {
      title: "Hotel Booking in Makkah, Madinah and Worldwide | Khaja Air Travels",
      description: "Contracted hotel rates in Makkah, Madinah, Dubai, KL, Bangkok, Istanbul, Kashmir and Maldives. Pay in Bangladeshi Taka, voucher in 24 hours, free cancellation on most stays."
    }
  }
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
