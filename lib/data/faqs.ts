export type FAQ = { q: string; a: string; category: string };

export const faqs: FAQ[] = [
  {
    category: "About the agency",
    q: "Is Khaja Air Travels a Government Approved Hajj agency?",
    a: "Yes. We carry Hajj Licence No-0252 issued by the Ministry of Religious Affairs, Government of the People's Republic of Bangladesh. The licence is renewed every season and is visible at our Uttara office reception."
  },
  {
    category: "About the agency",
    q: "How long have you been in business?",
    a: "Khaja Air Travels was founded in 2003 by Mr. Amdadul Haque Mir. We have continuously operated for more than two decades and have served upwards of 11,000 pilgrims and 60,000 travellers."
  },
  {
    category: "About the agency",
    q: "Where is your office?",
    a: "Our corporate office is at House 12, Road 4, Sector 7, Uttara, Dhaka 1230. We are open Saturday to Thursday, 9:30 AM to 8:00 PM. Friday is closed except by appointment."
  },
  {
    category: "Hajj & Umrah",
    q: "When should I book Hajj?",
    a: "We recommend booking by Muharram or Safar at the latest. Quotas fill quickly and early booking gives the widest choice of hotel distance and flight timing."
  },
  {
    category: "Hajj & Umrah",
    q: "Do Umrah packages run year round?",
    a: "Yes. We dispatch Umrah groups every week throughout the year, with longer 21 and 30 day stays available during Ramadan and the months of Rabi al-Awwal and Sha'ban."
  },
  {
    category: "Hajj & Umrah",
    q: "What is the minimum age for Umrah?",
    a: "Saudi Arabia does not have a minimum age requirement for Umrah, but children must hold their own passport and visa. For the elderly, we arrange wheelchair-friendly transport and hotels close to the Haram."
  },
  {
    category: "Hajj & Umrah",
    q: "What documents are required for Hajj?",
    a: "Passport valid for at least 8 months, four passport-size photographs (white background, 6×4 cm), a vaccination card with meningitis ACWY and seasonal influenza shots, a bank solvency certificate, and a national ID copy."
  },
  {
    category: "Air tickets",
    q: "Do you charge extra over the airline fare?",
    a: "Our service fee is a small, fixed amount and is clearly shown on every invoice. All government and airline taxes are passed through at cost."
  },
  {
    category: "Air tickets",
    q: "Can I pay by bKash or card?",
    a: "Yes. We accept bKash, Nagad, Rocket, all major bank transfers, Visa, MasterCard and American Express. Cash payments are accepted in our office only."
  },
  {
    category: "Air tickets",
    q: "What is your refund policy?",
    a: "Refunds follow the airline's fare rules. We deduct only the airline penalty and a small service charge. Refunds are processed within 7 to 21 working days depending on the airline."
  },
  {
    category: "Visa",
    q: "How long does a UAE tourist visa take?",
    a: "A 30-day UAE tourist visa is normally issued in 48–72 working hours once we receive your passport copy and photographs. Express processing in 24 hours is available for a higher service fee."
  },
  {
    category: "Visa",
    q: "Do I need a bank statement for a Schengen visa?",
    a: "Yes. Most Schengen embassies require a bank statement covering the last 6 months and a minimum daily balance equivalent to roughly 60 EUR per day of your stay. We will review your statement before you apply."
  },
  {
    category: "Visa",
    q: "Can you help if my visa was previously refused?",
    a: "Yes. Refused applications need careful re-presentation of the same documents with a clear cover letter addressing the previous refusal. We have helped many travellers turn around an earlier refusal."
  },
  {
    category: "Tours",
    q: "Are your tours Halal-friendly?",
    a: "Every tour is built around prayer times, Halal restaurants and modest accommodation choices. Hotels are pre-checked for a Qibla sign, prayer mats on request and a nearby mosque or musalla."
  },
  {
    category: "Tours",
    q: "Can you arrange a tour for my company?",
    a: "We organise corporate offsites, vendor reward trips and family days for teams of 8 to 250. Custom itineraries, branded merchandise and dedicated bus and guide are included."
  },
  {
    category: "Payments",
    q: "Can I pay in instalments for a Hajj package?",
    a: "Yes — we accept a 30% deposit at booking, 40% three months before departure, and the balance one month before flight. For corporate jamaats and group bookings, we are open to custom schedules."
  },
  {
    category: "Payments",
    q: "Do you issue a proper invoice for tax purposes?",
    a: "Every transaction is followed by a printed tax invoice with our TIN, BIN and licence numbers. We can also issue a foreign currency endorsement certificate for your passport on request."
  }
];

export const faqCategories = Array.from(new Set(faqs.map((f) => f.category)));
