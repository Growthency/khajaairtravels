export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  category: "Hajj & Umrah" | "Visa" | "Tours" | "Travel Tips";
  author: { name: string; role: string };
  publishedAt: string;
  tags: string[];
  content: string;
};

export const posts: Post[] = [
  {
    slug: "hajj-2026-bangladesh-early-booking-guide",
    title: "Hajj 2026 from Bangladesh: early booking guide, quota update and what to do before Muharram",
    excerpt:
      "Saudi Arabia has confirmed the 2026 Hajj quota for Bangladesh. Here is a clear, no-jargon guide on what changes this year, why early booking matters, and the documents you should gather right now.",
    cover:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Pilgrims circumambulating the Kaaba at Masjid al-Haram",
    category: "Hajj & Umrah",
    author: { name: "Amdadul Haque Mir", role: "Proprietor, Khaja Air Travels" },
    publishedAt: "2026-04-22",
    tags: ["Hajj 2026", "Quota", "Bangladesh", "Booking"],
    content: `<p>If you intend to perform Hajj in 2026, the most important question is not which agency to choose, but <strong>when</strong> to choose one. Saudi Arabia announces national quotas in early Muharram and Bangladesh's allocation is divided between the Government Hajj management and 700+ approved private agencies. Once an agency's quota is filled, no further bookings can be accepted at any price.</p>

    <h2>What is Bangladesh's 2026 Hajj quota?</h2>
    <p>Bangladesh has been allocated approximately <strong>127,000 pilgrim seats</strong> for the 2026 Hajj season, of which roughly 10,000 are under the Government Hajj management and the remainder are distributed among private agencies. The Ministry of Religious Affairs (MoRA) publishes the precise quota in the official Hajj Bulletin, usually within the first ten days of Muharram.</p>
    <p>The Bangladesh quota for 1447 H is slightly higher than last season's, and the published package categories remain three: Government General, Government Special and Private Agency.</p>

    <h2>Why early booking is not just a marketing line</h2>
    <p>Five real reasons:</p>
    <ul>
      <li><strong>Hotel distance.</strong> The closer the hotel to Masjid al-Haram, the higher the price and the faster it sells. Hotels within 250–400 metres are usually contracted out by Rabi al-Awwal.</li>
      <li><strong>Flight schedule.</strong> Direct flights (Dhaka — Jeddah or Dhaka — Madinah) on Biman and Saudia are the first to fill. Late bookers often end up on one-stop itineraries via Doha or Abu Dhabi.</li>
      <li><strong>Maktab in Mina.</strong> The Mu'allim assigns Mina tents based on a Saudi Arabian computerised allocation that strongly favours early registration.</li>
      <li><strong>Group composition.</strong> Families and friends who book together travel together. Late additions are placed in whatever group still has space.</li>
      <li><strong>Currency hedging.</strong> Agencies that take early bookings can lock the Saudi Riyal rate. A 6% currency move in May can cost a late booker BDT 60,000 on a BDT 1 million package.</li>
    </ul>

    <h2>Documents to gather before Muharram</h2>
    <p>You do not need to wait for an agency to start collecting documents. Gather these now and the rest of the booking will move fast:</p>
    <ol>
      <li>Passport with at least <strong>8 months validity</strong> from the intended departure date.</li>
      <li>Four passport-sized photographs, white background, 6×4 cm, taken in the last six months.</li>
      <li>National ID copy (both sides).</li>
      <li>Vaccination card showing <strong>meningitis ACWY</strong> and the current seasonal influenza shot. Polio and yellow fever may be required for certain transit routes.</li>
      <li>Bank solvency certificate (your bank can issue this in 1–2 working days).</li>
      <li>Mahram relation certificate for female pilgrims travelling without a Mahram (this is now optional under the new Saudi rules for women above 45, but agencies still keep it on file).</li>
    </ol>

    <h2>What questions to ask any agency</h2>
    <p>Whether you book with us or somewhere else, please ask these questions in writing. A trustworthy agency will answer in writing too:</p>
    <ul>
      <li>What is your Hajj Licence number? (Ours is <strong>0252</strong>.)</li>
      <li>What is the exact distance of the hotel in Makkah from Bab Marwah/Bab Fahd?</li>
      <li>What category of Mina Maktab is included?</li>
      <li>Is the airfare on a direct flight or with a stopover?</li>
      <li>What is the total price including all government charges, and what is the refund policy?</li>
      <li>Can you provide three references from your 2024 or 2025 pilgrims?</li>
    </ul>

    <h2>A small word from us</h2>
    <p>We say this every year: Hajj is one journey where saving BDT 50,000 by going with the cheapest option can cost you peace of mind for the rest of your life. Choose an agency you can visit in person, hold the manager's eye, and trust to look after your father, your mother, your spouse for the most important journey they will ever take.</p>
    <p>If you would like to sit with our Hajj desk in Uttara, please come on any Saturday or Sunday morning. Tea is on us, the Mu'allim is on standby, and you can leave without a deposit.</p>`
  },
  {
    slug: "umrah-in-ramadan-what-makes-it-different",
    title: "Umrah in Ramadan: what makes the experience different — and what to plan for",
    excerpt:
      "Performing Umrah in Ramadan carries the reward of Hajj. But the experience is also more intense, more crowded and more spiritually rich. Here is what we tell every pilgrim who books a Ramadan package with us.",
    cover:
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Masjid an-Nabawi in Madinah at twilight",
    category: "Hajj & Umrah",
    author: { name: "Mufti Abdul Karim", role: "Resident Mu'allim, Khaja Air Travels" },
    publishedAt: "2026-02-15",
    tags: ["Umrah", "Ramadan", "Iftar", "Crowd"],
    content: `<p>Umrah is a beloved act of worship at any time, but Umrah in Ramadan carries a Hadith-confirmed reward equal in scale to Hajj. Every year, our agency arranges three Ramadan-specific Umrah packages — 14, 21 and 30 days — and our Mu'allim sits with every group beforehand to set expectations. Here is the essence of that briefing.</p>

    <h2>What changes in Ramadan?</h2>
    <p><strong>The atmosphere.</strong> The Haram is full from Fajr to Isha and beyond. Tarawih in Masjid al-Haram by Sheikh as-Sudais and Sheikh Juhany is a once-in-a-lifetime spiritual experience. Iftar inside the Haram, on rows of plastic mats with dates and zam-zam water, is something every pilgrim describes as unforgettable.</p>
    <p><strong>The crowd.</strong> Tawaf and Sa'i take longer, especially in the last ten nights. A Tawaf that takes 30 minutes in Rajab can take 90 minutes during Lailatul-Qadr nights. Plan accordingly — go for the obligatory rituals before Asr if possible.</p>
    <p><strong>The cost.</strong> Hotel rates inside the Markaziya zone go up by 60–80% in the last ten days. We secure rooms in Sha'ban to keep our packages affordable.</p>

    <h2>Best night to perform Umrah in Ramadan</h2>
    <p>Most scholars recommend performing the Umrah rituals at a time of lower crowd density to preserve focus. Our suggestion to pilgrims is:</p>
    <ul>
      <li>Perform Umrah on the night of arrival, <strong>after Isha</strong>, when most other groups are at hotels for iftar follow-up.</li>
      <li>For the rest of Ramadan, focus on <strong>i'tikaf</strong>, voluntary tawafs, and a daily portion of Quran recitation.</li>
      <li>Avoid Tawaf during the first hour after iftar — the cleaning crew is at work and crowds peak at this time.</li>
    </ul>

    <h2>What to pack specifically for Ramadan Umrah</h2>
    <ol>
      <li>A small water bottle and a date pouch for iftar (you can carry both into the Haram).</li>
      <li>A lightweight prayer mat for the outer courtyards when the inner halls are full.</li>
      <li>A phone holder and a battery bank — you will spend long hours away from your hotel room.</li>
      <li>Comfortable, broken-in sandals that you can slip on and off easily.</li>
      <li>A simple white head-cover for women that pairs with any abaya.</li>
    </ol>

    <h2>Sehri, iftar and meal plans</h2>
    <p>Most Makkah hotels stop serving lunch and breakfast in Ramadan and offer sehri and iftar buffets instead. We confirm with each property in advance and include both meals in our Ramadan packages. For pilgrims who want to take iftar at the Haram and only sehri at the hotel, we adjust the package price accordingly.</p>

    <h2>Itikaf in the last ten nights</h2>
    <p>Our 21-day and 30-day packages are designed to enable i'tikaf in Masjid al-Haram or Masjid an-Nabawi for the last ten nights of Ramadan. We arrange a separate seating area for the women's section and brief every pilgrim on the rulings of i'tikaf — entry and exit, ablution, and what breaks i'tikaf.</p>

    <h2>A practical note on the return journey</h2>
    <p>Flights from Jeddah and Madinah back to Dhaka are extremely tight in the first ten days of Shawwal. We book return tickets the moment your package is confirmed — sometimes nine months in advance — to ensure a comfortable return. If you book very late, expect long stopovers or a separated family on different flights.</p>

    <p>May Allah ta'ala accept the Umrah of every Bangladeshi who is travelling this Ramadan. If you would like to join our Ramadan groups, please reach our office or WhatsApp us by the second week of Sha'ban at the latest.</p>`
  },
  {
    slug: "uae-tourist-visa-from-bangladesh-checklist",
    title: "UAE 60-day tourist visa from Bangladesh: the complete 2026 checklist",
    excerpt:
      "The 60-day UAE tourist visa is one of the most popular travel choices for Bangladeshi families. Here is exactly which documents you need, the realistic processing time, and how to avoid the three most common rejection reasons.",
    cover:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Skyline of Dubai with Burj Khalifa at twilight",
    category: "Visa",
    author: { name: "Sumaiya Khan", role: "Senior Visa Officer, Khaja Air Travels" },
    publishedAt: "2026-03-10",
    tags: ["UAE", "Dubai", "Tourist Visa", "Checklist"],
    content: `<p>The 60-day UAE tourist visa is the longest standard visa available to Bangladeshi passport holders without sponsorship. It is ideal for families who want to spend Eid in Dubai, for businesspeople attending a trade show, and for couples on an extended honeymoon. Unlike the 30-day visa, it can be issued in your name (not requiring a Dubai-based sponsor) and is valid for one single entry.</p>

    <h2>Documents we need from you</h2>
    <ol>
      <li>Passport copy — the bio-data page only, scanned in colour, valid for at least six months from intended entry.</li>
      <li>One <strong>passport-size photograph</strong>, white background, taken in the last three months. The face must occupy 70–80% of the frame.</li>
      <li>Bank statement of the last <strong>three months</strong>. Daily balance should average at least BDT 80,000. A statement attested by the bank is preferred.</li>
      <li>Confirmed return air ticket (we can hold this for free for 72 hours while the visa is being processed).</li>
      <li>Hotel reservation in the UAE (we can issue a refundable reservation if you have not yet decided where to stay).</li>
      <li>Trade Licence or Salary Certificate, whichever applies. Self-employed travellers should add a No-Objection Letter from their business.</li>
    </ol>

    <h2>Realistic processing time</h2>
    <p>Once we file the application with all documents complete, the visa is normally issued in <strong>4 to 7 working days</strong>. Express processing in 48–72 hours is available for a higher fee. If you are travelling on a fixed-date flight, we strongly recommend filing 14 working days in advance.</p>

    <h2>Three most common reasons for rejection</h2>
    <h3>1. Insufficient or unclear bank statement</h3>
    <p>This is the single largest cause of UAE visa refusal for Bangladeshis. A salary credit appearing only once or twice is not enough. If you are self-employed, please provide a one-page statement of your business activity and your three-month average closing balance.</p>

    <h3>2. Earlier travel record that does not match the application</h3>
    <p>If your passport shows recent visits to high-risk regions, the UAE consular team will scrutinise the application more closely. We will discuss this with you openly during the document review and craft a clear cover letter if needed.</p>

    <h3>3. Name mismatch between passport, ticket and hotel</h3>
    <p>Many Bangladeshi names have multiple acceptable spellings (Md., Mohd., Muhammad). The name on your ticket and hotel <strong>must</strong> exactly match the name on your passport. We double-check every booking before submission to avoid this trap.</p>

    <h2>What it costs</h2>
    <p>The 60-day single-entry visa fee plus our service fee is published on a single, clearly itemised invoice. We do not add any hidden charge for medical insurance, courier or VAT — these are all included.</p>

    <h2>While you are in the UAE</h2>
    <p>The visa allows you to enter the UAE once within 60 days of issue and stay for up to 60 days after entry. You can leave and return only if you arrange a re-entry permit. For most Bangladeshi travellers, the single entry rule is sufficient.</p>
    <p>If you want to extend the stay, our partner office in Dubai can arrange a 30-day extension at the official rate without needing to fly out.</p>

    <p>Visit our Uttara office on any working day between 9:30 AM and 7:30 PM with your passport and we will complete the eligibility check in 15 minutes — at no charge. If we believe the visa will not be granted, we say so upfront so you do not pay for an unwinnable application.</p>`
  },
  {
    slug: "kashmir-in-winter-bangladeshi-traveller-itinerary",
    title: "Kashmir in winter: a 6-night itinerary for first-time Bangladeshi travellers",
    excerpt:
      "Gulmarg in snow, a shikara ride at sunrise, kahwa tea at a houseboat — winter Kashmir is something every Bangladeshi traveller should experience once. This is the itinerary we recommend after booking 400+ Kashmir tours.",
    cover:
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Snow-covered houses in Kashmir valley",
    category: "Tours",
    author: { name: "Rakib Hasan", role: "Tour Operations Lead, Khaja Air Travels" },
    publishedAt: "2026-01-08",
    tags: ["Kashmir", "Winter", "Family", "Itinerary"],
    content: `<p>Kashmir is one of those destinations a Bangladeshi family talks about for years after returning. Direct evening flights from Dhaka to Srinagar (via Delhi) make it surprisingly accessible — and at less than four hours air time once you discount the connection. Here is the 6-night winter itinerary we have refined over 400+ family bookings.</p>

    <h2>Day 1 — Arrival in Srinagar</h2>
    <p>Arrive at Sheikh ul-Alam International Airport. Our local driver, Bashir bhai (with us for nine years), will meet you with hot kahwa tea. Forty-minute drive to a houseboat on Dal Lake. Light dinner, early sleep — the body needs time to adjust to the altitude.</p>

    <h2>Day 2 — Srinagar and Mughal gardens</h2>
    <p>Sunrise shikara ride on Dal Lake. Breakfast at the houseboat. Visit Nishat Bagh and Shalimar Bagh, two of the Mughal gardens designed in the 17th century. Lunch at a Halal Kashmiri restaurant — try the rogan josh, gushtaba and Kashmiri pulao. Afternoon for the floating vegetable market and the Jamia Masjid of Srinagar (built in 1394, rebuilt several times since). Evening at leisure.</p>

    <h2>Day 3 — Gulmarg day trip</h2>
    <p>Two-hour scenic drive to Gulmarg, the meadow of flowers — at 2,650 m the air is thinner and far colder, so warm jackets are essential. Two-stage cable car (Gondola) to Kongdoori and Apharwat peak (the second stage may be closed on heavy snow days). Snow-bike rentals available. Lunch at the cable car cafeteria. Drive back to Srinagar.</p>

    <h2>Day 4 — Pahalgam day trip</h2>
    <p>Drive 95 km south to Pahalgam through saffron fields of Pampore. Pony ride to the Aru and Betaab valleys (or a private taxi ride for those who prefer to avoid horses). Lunch by the river. Drive back via Avantipura Hindu temple ruins (10th century, optional photo stop). Return to Srinagar.</p>

    <h2>Day 5 — Sonmarg or rest day</h2>
    <p>Sonmarg (88 km from Srinagar) is breathtaking but the road may close in heavy snow. If open, take the day. If closed, replace with a relaxed local day — Friday prayer at Hazratbal Shrine, lunch at Mughal Darbar, an afternoon shopping for Pashmina shawls and Kashmiri saffron.</p>

    <h2>Day 6 — Local Srinagar and souvenirs</h2>
    <p>Visit Hari Parbat Fort (optional, weather-permitting), Tulip Garden if you arrive in late March, Nehru Park on the banks of Dal Lake. Souvenir shopping. Last sunset on Dal Lake from a shikara. Farewell dinner at the houseboat.</p>

    <h2>Day 7 — Departure</h2>
    <p>Breakfast at the houseboat. Transfer to airport in time for your Delhi connection back to Dhaka.</p>

    <h2>What is included in our Kashmir package</h2>
    <ul>
      <li>Return Dhaka — Srinagar air ticket (via Delhi)</li>
      <li>Indian visa support and document checklist</li>
      <li>2 nights houseboat + 4 nights hotel in Srinagar</li>
      <li>Private AC SUV with Bashir bhai (English and basic Bangla speaking)</li>
      <li>Daily breakfast and dinner — Halal, Kashmiri style</li>
      <li>All sightseeing entrance fees, cable car at Gulmarg (stage 1)</li>
      <li>Local SIM with 30 GB data and 50 minutes voice</li>
      <li>24/7 WhatsApp support from our Dhaka office</li>
    </ul>

    <h2>Best months to go</h2>
    <p>December to February for snow lovers. March to early April for tulips and almond blossoms. October for the autumn colour of chinar leaves. Avoid Eid-ul-Adha week if you want quieter sightseeing.</p>

    <h2>What to pack</h2>
    <p>Heavy thermal innerwear, a down jacket rated to -10°C, gloves, beanie, waterproof boots with good grip, prescription glasses (sunglasses fog up quickly in cold), basic medicines and a hot water bottle for the houseboat night.</p>

    <p>Walk into our Uttara office or WhatsApp us with your preferred dates and we will lock the houseboat, the SUV and Bashir bhai for your group within 24 hours.</p>`
  },
  {
    slug: "turkey-8-days-istanbul-cappadocia-pamukkale",
    title: "Turkey in 8 days: Istanbul, Cappadocia and Pamukkale — for the Bangladeshi traveller",
    excerpt:
      "Halal-friendly, family-tested and rich in Islamic history — our 8-day Turkey itinerary covers the Blue Mosque, hot-air balloons at sunrise, the white travertines of Pamukkale, and ends with the Bosphorus dinner cruise.",
    cover:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Hot air balloons over the Cappadocia valley at sunrise",
    category: "Tours",
    author: { name: "Tahsin Mahmud", role: "Senior Travel Consultant, Khaja Air Travels" },
    publishedAt: "2026-02-28",
    tags: ["Turkey", "Istanbul", "Cappadocia", "Family"],
    content: `<p>Turkey sits at the crossroads of three continents and 1,400 years of Islamic civilisation. For a Bangladeshi traveller it is one of the few destinations where the entire family — grandparents to grandchildren — finds something meaningful. Here is the 8-day itinerary we send to every family that asks us to design a Turkey trip.</p>

    <h2>Day 1 — Arrival in Istanbul</h2>
    <p>Direct flight Dhaka — Istanbul on Turkish Airlines (11 hours). Meet our Bangla-speaking guide at IST. Transfer to a 4-star hotel in Sultanahmet (15 minutes from the Blue Mosque). Light dinner of pide and ayran. Early rest.</p>

    <h2>Day 2 — Old Istanbul (Sultanahmet)</h2>
    <p>Walk to <strong>Hagia Sophia</strong> — recently re-converted to a mosque, prayer mats are available. Cross the square to the <strong>Blue Mosque (Sultan Ahmed Camii)</strong>, with its six minarets and Iznik tile interior. Lunch at Mehmet Efendi's traditional Ottoman kitchen. Afternoon: <strong>Topkapi Palace</strong> — the home of the Ottoman caliphate, holding sacred relics including a strand of the Prophet's beard (pbuh). Sunset from the palace gardens overlooking the Bosphorus.</p>

    <h2>Day 3 — Grand Bazaar, Spice Bazaar, Bosphorus cruise</h2>
    <p>Morning at the <strong>Grand Bazaar</strong> — 4,000 shops under one roof. Bargain for Turkish lamps, ceramic plates and gold. Walk to the <strong>Spice Bazaar</strong> for saffron, sumac, lokum (Turkish delight) and apple tea. Lunch at Karakoy Lokantasi. Afternoon Bosphorus cruise — see the two continents from the water. Evening Whirling Dervish ceremony.</p>

    <h2>Day 4 — Fly to Cappadocia (Kayseri)</h2>
    <p>Morning flight Istanbul — Kayseri (1.5 hours). Drive to a cave hotel in Goreme. Lunch at a rooftop overlooking the valley. Afternoon: pottery demonstration in Avanos, hike through Pasabag valley to see the famous "fairy chimneys" — sandstone formations carved by 6,000 years of wind. Evening at a Turkish hammam.</p>

    <h2>Day 5 — Cappadocia sunrise balloon, Goreme open-air museum</h2>
    <p>4:30 AM wake-up call. Drive to the launch field. <strong>One-hour hot-air balloon ride</strong> at sunrise, drifting over the valleys with 50+ other balloons — easily one of the top three travel experiences in the world. Champagne ceremony at landing (we order apple juice for Muslim guests). Back to hotel for full breakfast. Morning rest. Afternoon: <strong>Goreme Open-Air Museum</strong>, the 10th–12th century rock-cut churches of early Cappadocian Christians. Sunset at the Red Valley viewpoint.</p>

    <h2>Day 6 — Fly to Pamukkale (Denizli)</h2>
    <p>Morning flight Kayseri — Denizli. One-hour drive to <strong>Pamukkale</strong> ("cotton castle") — bright white travertine terraces formed by hot springs over millennia. Walk barefoot up the terraces. Visit the ruins of the Roman spa city of <strong>Hierapolis</strong>. Optional swim at Cleopatra's Pool. Overnight in a thermal hotel.</p>

    <h2>Day 7 — Fly back to Istanbul, Bosphorus dinner cruise</h2>
    <p>Morning flight Denizli — Istanbul. Free afternoon for souvenir shopping in Taksim or a coffee at a Beyoglu cafe. Evening: <strong>Bosphorus dinner cruise</strong> — a four-course Halal Turkish menu, live folkloric performance, with Istanbul lit up on both shores.</p>

    <h2>Day 8 — Departure</h2>
    <p>Late check-out. Transfer to IST for the Dhaka return flight.</p>

    <h2>What is included</h2>
    <ul>
      <li>Return Dhaka — Istanbul air ticket on Turkish Airlines</li>
      <li>Three domestic flights inside Turkey (IST — Kayseri, Kayseri — Denizli, Denizli — IST)</li>
      <li>e-Visa to Turkey processed by us</li>
      <li>3 nights Istanbul (4-star), 2 nights Cappadocia (cave hotel), 1 night Pamukkale (thermal hotel), 1 night Istanbul (4-star)</li>
      <li>All breakfasts; six lunches; three Halal dinners including the Bosphorus cruise</li>
      <li>Private vehicle and English/Bangla guide throughout</li>
      <li>All entrance fees on the itinerary</li>
      <li>Hot-air balloon ride in Cappadocia (1 hour)</li>
    </ul>

    <h2>Best season</h2>
    <p>April–May and September–October for the perfect weather. December–January for snow in Cappadocia and lower prices. Avoid July–August Istanbul heat unless you love the Mediterranean summer.</p>

    <h2>What to pack</h2>
    <p>Modest clothing for mosque visits, comfortable walking shoes for cobblestone streets, a warm jacket for the Cappadocia balloon (sunrise is cold even in May), a power bank, and a wide-brim hat for Pamukkale.</p>

    <p>Speak to our Uttara office to customise the itinerary — many families add Konya (the Mawlana Rumi shrine) or Bursa (the first Ottoman capital). We can also build a 12-day version that includes Edirne and Gallipoli.</p>`
  },
  {
    slug: "saudi-work-visa-pre-departure-checklist",
    title: "Going to Saudi Arabia for work: pre-departure checklist every Bangladeshi worker should follow",
    excerpt:
      "Your first job abroad is a major life decision. This is the practical, government-aligned checklist we hand to every worker placed through Shahi Air International — covering documents, money, health and what to do in the first 30 days.",
    cover:
      "https://images.unsplash.com/photo-1614957004131-9e8f2a13123c?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Aerial view of Riyadh with the Kingdom Tower at dusk",
    category: "Travel Tips",
    author: { name: "Khalid Mahmud", role: "Recruitment Manager, Shahi Air International" },
    publishedAt: "2026-03-30",
    tags: ["Saudi Arabia", "Work Visa", "BMET", "Migrant Worker"],
    content: `<p>Every year, more than 600,000 Bangladeshi workers travel to Saudi Arabia, Oman, Qatar, the UAE and Malaysia. Many of them arrive with little information about their own rights and obligations. This checklist — used by every Shahi Air International worker — covers what you should do, in order, before you board the flight.</p>

    <h2>Two weeks before departure</h2>
    <ol>
      <li><strong>Re-read your employment contract.</strong> Verify the job title, basic salary, overtime rate, working hours, weekly leave and the duration. The contract you signed at BMET must match exactly with the agreement at our office.</li>
      <li><strong>Visa stamp verification.</strong> The visa in your passport should show the same employer name as the contract. If there is any difference, do not travel — contact our recruitment desk immediately.</li>
      <li><strong>Open a bank account in Bangladesh</strong> (Islamic or conventional) that can receive remittance. Sonali, Islami Bank, Dutch-Bangla and BRAC are all reliable. Activate the account in your name with proper KYC.</li>
      <li><strong>Inform your family</strong> of the bank account details, the employer's name and the company address in Saudi Arabia. Leave a photocopy of your passport and visa with someone you trust.</li>
    </ol>

    <h2>One week before departure</h2>
    <ol>
      <li><strong>Pre-departure orientation</strong> at our office. This four-hour session covers your rights under Saudi labour law, how Iqama renewal works, how to use the Absher app, and what to do if your employer mistreats you.</li>
      <li><strong>Vaccination card update.</strong> Meningitis ACWY, COVID booster (if applicable), seasonal influenza — and yellow fever if you are transiting through certain African airports.</li>
      <li><strong>Mobile arrangement.</strong> Switch your Bangladeshi SIM to international roaming for the first 48 hours. Pre-book a Saudi SIM (STC or Mobily) for collection at the destination airport — both have desks at Jeddah, Riyadh and Dammam.</li>
      <li><strong>Carry small denominations of Saudi Riyal</strong> for the first 3–4 days. SAR 500–800 is enough.</li>
    </ol>

    <h2>Day of departure</h2>
    <ol>
      <li>Reach Hazrat Shahjalal Airport <strong>five hours before flight time</strong>. BMET smart card check, immigration and security take longer than the airline counter.</li>
      <li>Keep the following in your hand luggage: passport, visa stamp, employment contract, BMET smart card, vaccination card, three passport photographs, copies of your educational certificates, the employer's Saudi address printed in Arabic and English.</li>
      <li>Do not pack anything for someone else. Refuse politely if asked at the airport — even a sealed envelope.</li>
      <li>Drink water, eat lightly. The flight is 6–8 hours depending on destination.</li>
    </ol>

    <h2>Arrival in Saudi Arabia</h2>
    <ol>
      <li>Follow the "Workers" lane at immigration. Have your passport, visa and employer's name ready in Arabic transliteration.</li>
      <li>Collect your bag. Look for the company representative at the arrivals area — they should be holding a sign with your name. <strong>Do not leave the airport with a stranger.</strong> Call our Dhaka office immediately if no one comes.</li>
      <li>The employer will take you to the company accommodation and start the Iqama (residence permit) process. By Saudi law, the Iqama must be issued within 90 days of your arrival.</li>
      <li>Open a Saudi bank account in your name as soon as the Iqama is issued. Receive your salary through the WPS (Wage Protection System) — this is the law and protects your right to be paid on time.</li>
    </ol>

    <h2>What to do if something goes wrong</h2>
    <ul>
      <li>Employer takes your passport — by Saudi law, this is illegal. Ask politely for it to be returned and contact our Dhaka office to mediate. If it continues, file a complaint at the Bangladesh Embassy in Riyadh or the Consulate in Jeddah.</li>
      <li>Salary delayed by more than 30 days — file a labour complaint through the Saudi Ministry of Human Resources (MoHRE) at the Musaned portal or our Dhaka office will assist.</li>
      <li>Health emergency — every worker is enrolled in the mandatory Saudi health insurance. Free treatment at government hospitals.</li>
      <li>Need to return home for family emergency — keep our Dhaka office in the loop. We can assist with employer permission and emergency ticket booking.</li>
    </ul>

    <h2>Sending money home</h2>
    <p>Use only official channels — Western Union, MoneyGram, bank-to-bank transfer, or the apps of Sonali Bank, IBBL or BRAC. Hundi (informal) remittance is illegal, taxable, and risky — both for you and for your family.</p>

    <h2>Stay connected to home</h2>
    <p>Stay in regular touch with your family. Phone call once a week, send remittance regularly. We host a quarterly Saudi-side check-in for every Shahi Air International worker — please join it. If you bring your younger brother or cousin to Saudi later, that is the highest compliment you can give us, and we will look after him exactly the way we looked after you.</p>

    <p>May Allah protect every Bangladeshi worker overseas and reward their hard work. Sehat thakun, niraapad thakun. (Stay healthy, stay safe.)</p>`
  }
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function recentPosts(limit = 3, exclude?: string) {
  return posts
    .filter((p) => p.slug !== exclude)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}
