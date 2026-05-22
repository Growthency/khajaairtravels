export type Branch = {
  slug: string;
  title: string;
  role: string;
  tagline: string;
  established: string;
  intro: string;
  sectors: string[];
  highlights: string[];
  body: { heading: string; paragraphs: string[] }[];
  contact?: { phone?: string; email?: string; address?: string };
  cta: { label: string; href: string };
  accent: "sky" | "emerald" | "saffron";
  meta: { title: string; description: string };
};

export const branches: Branch[] = [
  {
    slug: "khaja-air-travels",
    title: "Khaja Air Travels",
    role: "Proprietor — Amdadul Haque Mir",
    tagline: "Government Approved Hajj Agency, Licence No-0252",
    established: "2003",
    intro:
      "Khaja Air Travels is the flagship of the group. Founded in 2003 by Mr. Amdadul Haque Mir, the agency carries Hajj Licence No-0252 issued by the Ministry of Religious Affairs and has guided more than 11,000 pilgrims to the Haramain since inception.",
    sectors: ["Hajj & Umrah", "Air Ticketing", "Visa Processing", "Tour Packages", "Hotel Booking"],
    highlights: [
      "Recognised Hajj agency by Ministry of Religious Affairs",
      "IATA verified ticketing consolidator",
      "Member, Hajj Agencies Association of Bangladesh (HAAB)",
      "Member, Association of Travel Agents of Bangladesh (ATAB)"
    ],
    body: [
      {
        heading: "Our story",
        paragraphs: [
          "Khaja Air Travels began as a small office in Cumilla in 2003, helping local families perform Umrah and arrange affordable air tickets. Within five years the demand from neighbouring districts pushed us to open a corporate office in Dhaka, and to apply for a formal Hajj Licence.",
          "We received Hajj Licence No-0252 in 2009 and have led pilgrim groups for every Hajj season since. Each season, our office becomes a second home to families preparing for their once-in-a-lifetime journey — and that warmth is what our pilgrims remember most when they return."
        ]
      },
      {
        heading: "What we do",
        paragraphs: [
          "Today, Khaja Air Travels operates a five-desk full-service travel office: Hajj & Umrah, Air Ticketing, Visa Processing, Hotel Booking and Tour Packages. Our pilgrim group sizes range from 8 to 220 each season, and we issue more than 18,000 air tickets a year across domestic and international airlines.",
          "Beyond travel, the group has grown into a small family of companies — Shahi Air International, Chandina Village Housing Ltd. and Abibil Trading Food Products Ltd. — that share the same principle: serve the customer the way you would serve your own family."
        ]
      }
    ],
    contact: {
      phone: "+8801711338261",
      email: "khajaair03@gmail.com",
      address: "61 Nikethon Mulla Complex, Dhaka 1000, Bangladesh"
    },
    cta: { label: "Plan with our travel desk", href: "/contact" },
    accent: "sky",
    meta: {
      title: "Khaja Air Travels — Govt. Approved Hajj Agency (Licence No-0252)",
      description: "Flagship office of the Khaja group — Hajj & Umrah, air ticketing, visa, tour and hotel services since 2003. Dhaka."
    }
  },
  {
    slug: "shahi-air-international",
    title: "Shahi Air International",
    role: "Managing Partner — Amdadul Haque Mir",
    tagline: "Manpower export and international employment services",
    established: "2011",
    intro:
      "Shahi Air International is the group's recruiting agency, working under the Bureau of Manpower, Employment and Training (BMET). We send skilled and unskilled workers to Saudi Arabia, the United Arab Emirates, Qatar, Oman, Malaysia and Singapore — with a focus on ethical recruitment and transparent fees.",
    sectors: ["Manpower Export", "Skill Testing", "Pre-departure Briefing", "Worker Welfare"],
    highlights: [
      "BMET registered recruiting agency",
      "Tie-ups with 60+ employers across the GCC and South-East Asia",
      "In-house skill testing for cleaners, drivers, AC technicians, masons and carpenters",
      "Pre-departure orientation in Bangla, including financial literacy"
    ],
    body: [
      {
        heading: "Why manpower export, why us",
        paragraphs: [
          "Remittance is the lifeline of millions of Bangladeshi families. Shahi Air International was founded in 2011 because Mr. Mir saw too many workers exploited at the recruitment stage — promised one salary, paid another. We set out to do this differently.",
          "Every Shahi Air worker signs a contract in Bangla and English, knows their take-home salary in writing before they board the flight, and carries a printed grievance number that connects to a real person in our Dhaka office."
        ]
      },
      {
        heading: "Welfare beyond placement",
        paragraphs: [
          "Our khedmat to the workers does not end at the boarding gate. We run a quarterly check-in with each placed worker for the first year, support family-side documentation when they want to remit, and host a welcome session when they return home on leave.",
          "Today our alumni network is more than 7,400 workers strong across the GCC and Malaysia — and many of them have placed their younger brothers, cousins and neighbours through us in turn."
        ]
      }
    ],
    contact: {
      phone: "+8801779734415",
      email: "shahi@khajainternational.com",
      address: "61 Nikethon Mulla Complex, Dhaka 1000, Bangladesh"
    },
    cta: { label: "Talk to our recruitment desk", href: "/contact" },
    accent: "saffron",
    meta: {
      title: "Shahi Air International — BMET Registered Recruiting Agency",
      description: "Ethical manpower export to Saudi Arabia, UAE, Qatar, Oman, Malaysia and Singapore. Transparent contracts, in-house skill testing, lifelong worker welfare."
    }
  },
  {
    slug: "chandina-village-housing",
    title: "Chandina Village Housing Ltd.",
    role: "Director — Amdadul Haque Mir",
    tagline: "Planned residential plots and affordable village housing in Cumilla",
    established: "2016",
    intro:
      "Chandina Village Housing Ltd. develops planned residential plots and modern village houses in and around Chandina Upazila of Cumilla district. Our projects bring city amenities — water, gas, paved roads, drainage, a community mosque — to homebuyers who want to invest in their own soil.",
    sectors: ["Land Development", "Village Housing", "Plot Sales", "Community Infrastructure"],
    highlights: [
      "Two on-going projects spanning 22 bighas in Chandina",
      "Approved layout from the Upazila land authority",
      "Easy instalments of 24, 36 and 60 months",
      "Project mosque, community hall and pucca road inside every project"
    ],
    body: [
      {
        heading: "Home back home",
        paragraphs: [
          "Many Bangladeshis living in Dhaka or working abroad dream of a home in their own gram (village). Chandina Village Housing was created to make that dream achievable. We acquire farmland legally, gain layout approval, lay water-gas-electric infrastructure, and sell ready-to-build plots and turnkey village houses at a fair price.",
          "The first project, Khaja Garden City, sold out in 18 months. Our current projects — Khaja Sonali Bhumi and Khaja Sebuj Palli — are designed with the same principle: clear paperwork, infrastructure that lasts decades, and a community feel."
        ]
      },
      {
        heading: "What you get",
        paragraphs: [
          "Every plot comes with paved access road, drainage, treated water connection, and reservation for gas and electricity. Buyers receive their saaf-kabala registration within 90 days of full payment.",
          "We also offer fully built three-bedroom village houses on a turnkey basis for buyers who want to move in (or rent out) immediately. Construction is supervised by our own civil team."
        ]
      }
    ],
    contact: {
      phone: "+8801743656077",
      email: "chandina@khajaairtravels.com",
      address: "Chandina Bazar Road, Chandina, Cumilla"
    },
    cta: { label: "Request the project booklet", href: "/contact" },
    accent: "emerald",
    meta: {
      title: "Chandina Village Housing Ltd. — Planned Plots in Cumilla",
      description: "Planned residential plots and turnkey village houses in Chandina, Cumilla. Infrastructure, mosque and road inside every project. Easy 24–60 month instalments."
    }
  },
  {
    slug: "abibil-trading",
    title: "Abibil Trading Food Products Ltd.",
    role: "Shareholder — Amdadul Haque Mir",
    tagline: "Fresh dry food and pantry essentials from the heartland of Cumilla",
    established: "2019",
    intro:
      "Abibil Trading Food Products Ltd. sources, packs and distributes dry food and pantry essentials — premium quality rice, lentils, mustard oil, ghee, dates, honey, spices and traditional Cumilla khadi (sweet) under hygienic conditions. We supply to retail stores, restaurants and Hajj group caterers across Dhaka, Chattogram and Cumilla.",
    sectors: ["Food Trading", "Wholesale Distribution", "Branded Packaging", "Hajj Group Catering"],
    highlights: [
      "BSTI compliant packaging and labelling",
      "Khejur (dates), zam-zam water and Ihram supply for Hajj groups",
      "Direct sourcing of rice and lentils from north Bengal farmers",
      "Halal certification on all packaged products"
    ],
    body: [
      {
        heading: "From farm to family",
        paragraphs: [
          "Abibil Trading was set up in 2019 to bring honest, traceable food to Bangladeshi pantries. Adulteration of cooking oil, fake dates and dyed turmeric had become common in the market — and our founders wanted to offer a reliable alternative at a fair price.",
          "We work directly with farmers in Dinajpur, Naogaon and Bogura for rice and lentils, and import premium Ajwa, Sukkari and Mabroom dates and zam-zam water from authorised Saudi suppliers."
        ]
      },
      {
        heading: "Trusted by Hajj groups",
        paragraphs: [
          "A natural extension of the group, Abibil Trading is the preferred supplier for Khaja Air Travels Hajj groups every season — providing zam-zam water, Ajwa dates, prayer mats and gift packs that pilgrims bring home for relatives.",
          "We also distribute to over 90 retail outlets and 12 restaurants in the Dhaka and Cumilla region under the Abibil brand."
        ]
      }
    ],
    contact: {
      phone: "+8801743656088",
      email: "abibil@khajaairtravels.com",
      address: "Cumilla Sadar Dakshin, Cumilla 3500"
    },
    cta: { label: "Request a wholesale price list", href: "/contact" },
    accent: "saffron",
    meta: {
      title: "Abibil Trading Food Products Ltd. — Honest Pantry Essentials",
      description: "Dry food and pantry essentials — premium rice, lentils, mustard oil, ghee, dates, honey, spices and Cumilla khadi. BSTI compliant, Halal certified."
    }
  },
  {
    slug: "khaja-international",
    title: "Khaja International",
    role: "A Khaja International Group company",
    tagline: "Civil Aviation Authority approved — Licence No: 0014496",
    established: "2014",
    intro:
      "Khaja International holds the group's Civil Aviation Authority of Bangladesh (CAAB) approval, Licence No-0014496. It is the aviation and ticketing backbone of the group — operating live GDS terminals, holding airline contracts and issuing tens of thousands of tickets a year across domestic and international routes.",
    sectors: ["Air Ticketing", "Airline GSA", "Corporate Travel", "Group Fares"],
    highlights: [
      "CAAB approved — Licence No-0014496",
      "Direct contracts with 90+ airlines",
      "Live Amadeus & Galileo GDS terminals",
      "Dedicated corporate and group-fare desk"
    ],
    body: [
      {
        heading: "The aviation backbone",
        paragraphs: [
          "Every confirmed ticket the group issues runs through Khaja International's aviation licence. Holding the CAAB approval (Licence No-0014496) lets the group contract directly with airlines, access net fares and serve corporate accounts that need volume and reliability.",
          "From a single Dhaka — Jeddah pilgrim ticket to a 200-seat group movement for the Hajj season, the ticketing desk plans, prices and issues with the precision a regulated aviation business demands."
        ]
      },
      {
        heading: "Built for scale and trust",
        paragraphs: [
          "Corporate clients, travel sub-agents and group organisers rely on Khaja International for transparent net fares, 24/7 rescheduling and honest, itemised invoices.",
          "The same aviation infrastructure powers Khaja Air Travels' Hajj and Umrah flight planning every season — which is why our pilgrim groups so often travel on direct flights at fair fares."
        ]
      }
    ],
    contact: {
      phone: "+8801711338261",
      email: "khajaair03@gmail.com",
      address: "61 Nikethon Mulla Complex, Dhaka 1000, Bangladesh"
    },
    cta: { label: "Talk to our ticketing desk", href: "/contact" },
    accent: "sky",
    meta: {
      title: "Khaja International — CAAB Approved Aviation & Ticketing (Licence 0014496)",
      description: "The aviation and ticketing arm of Khaja International Group. CAAB Licence No-0014496, direct airline contracts, GDS terminals, corporate and group fares."
    }
  },
  {
    slug: "khaja-holidays",
    title: "Khaja Holidays & Consultancy",
    role: "A Khaja International Group company",
    tagline: "Authorized Tour Operator — curated holidays & travel consultancy",
    established: "2018",
    intro:
      "Khaja Holidays & Consultancy is the group's authorized tour operator, designing Halal-friendly holidays and providing end-to-end travel consultancy — destination planning, visa advisory, hotel and transport — for families, honeymooners and corporate groups across Asia, the Middle East and Europe.",
    sectors: ["Tour Operations", "Holiday Packages", "Travel Consultancy", "Corporate Offsites"],
    highlights: [
      "Authorized Tour Operator",
      "Halal-friendly itineraries to 20+ countries",
      "Custom family, honeymoon and corporate packages",
      "On-trip WhatsApp concierge throughout the journey"
    ],
    body: [
      {
        heading: "Holidays designed around you",
        paragraphs: [
          "Khaja Holidays turns a destination wish into a planned, stress-free itinerary. Kashmir in the snow, Cappadocia at sunrise, the Maldives for a honeymoon, Turkey and Egypt for the history — each trip is built around prayer times, Halal dining and Bangladeshi taste.",
          "As an authorized tour operator, we manage every moving part — air ticket, visa, hotel, transport and guide — under one roof, with one travel manager you can reach on WhatsApp throughout the trip."
        ]
      },
      {
        heading: "Consultancy that saves you money",
        paragraphs: [
          "Beyond packages, Khaja Holidays advises on the smartest routing, the right visa to apply for and the best season to travel — honest guidance that often saves more than our fee.",
          "Corporate clients use us for reward trips, vendor offsites and family days, with branded merchandise and dedicated transport included."
        ]
      }
    ],
    contact: {
      phone: "+8801779734415",
      email: "khajaair03@gmail.com",
      address: "907 Surma Tower (Level 8), Taltola Road, Sylhet"
    },
    cta: { label: "Plan a holiday with us", href: "/contact" },
    accent: "sky",
    meta: {
      title: "Khaja Holidays & Consultancy — Authorized Tour Operator",
      description: "Halal-friendly holiday packages and end-to-end travel consultancy from Khaja International Group — Kashmir, Bali, Maldives, Turkey, Egypt and more."
    }
  },
  {
    slug: "khaja-international-company",
    title: "Khaja International Company, LLC",
    role: "Saudi Arabia operations of Khaja International Group",
    tagline: "Makkah-based — Commercial Registration (CR) No: 7054132522",
    established: "2020",
    intro:
      "Khaja International Company, LLC is the group's licensed Saudi Arabia operation, registered in the Kingdom under Commercial Registration No-7054132522. Based in Makkah, it handles on-ground logistics for our Hajj and Umrah pilgrims — hotels, transport, Maktab coordination and 24/7 in-country support.",
    sectors: ["On-ground Hajj/Umrah services", "KSA Hotels & Transport", "Maktab Coordination", "Pilgrim Support"],
    highlights: [
      "Saudi registered — CR No-7054132522",
      "Makkah office at Ajyad Rea Bakhsh",
      "Direct hotel and transport contracts inside KSA",
      "24/7 Arabic & Bangla speaking ground team"
    ],
    body: [
      {
        heading: "Khedmat that continues inside the Kingdom",
        paragraphs: [
          "Many agencies stop at the boarding gate. Khaja International Company is why our khedmat continues the moment a pilgrim lands in Jeddah or Madinah. Registered in Saudi Arabia (CR No-7054132522), our Makkah team manages hotels, transfers, Mina and Arafah logistics and any emergency that arises.",
          "Having our own licensed entity inside the Kingdom means we negotiate hotels and transport directly, respond to issues in real time, and never hand our pilgrims to an unknown third party."
        ]
      },
      {
        heading: "One group, two countries, one standard",
        paragraphs: [
          "The Saudi office works hand in hand with the Dhaka and Sylhet teams so a pilgrim experiences a single, seamless journey — booked in Bangladesh, served in Saudi Arabia, to the same standard end to end.",
          "Our Makkah desk also assists Bangladeshi travellers already in the Kingdom with hotel extensions, ground transport and Ziyarah arrangements."
        ]
      }
    ],
    contact: {
      phone: "+966508785198",
      email: "info@khajainternational.com",
      address: "Ajyad Rea Bakhsh, Makkah, Kingdom of Saudi Arabia"
    },
    cta: { label: "Reach our Makkah office", href: "/contact" },
    accent: "emerald",
    meta: {
      title: "Khaja International Company LLC — Saudi Arabia Operations (CR 7054132522)",
      description: "Makkah-based Saudi operation of Khaja International Group. CR No-7054132522 — on-ground Hajj & Umrah hotels, transport, Maktab coordination and 24/7 support."
    }
  }
];

export function getBranch(slug: string) {
  return branches.find((b) => b.slug === slug);
}
