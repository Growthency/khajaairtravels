export type Testimonial = {
  name: string;
  role: string;
  city: string;
  quote: string;
  service: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Md. Mahbubur Rahman",
    role: "Imam, Baitul Mukarram-area Masjid",
    city: "Dhaka",
    quote:
      "I performed Hajj with Khaja Air Travels in 2023. Our Mu'allim spoke flawless Bangla and explained every step of the rituals. The hotel in Makkah was 250 metres from Marwah gate. Alhamdulillah, a journey I will remember for life.",
    service: "Hajj 2023 — Standard Package",
    rating: 5
  },
  {
    name: "Farhana Akhter",
    role: "Schoolteacher",
    city: "Cumilla",
    quote:
      "My husband and I went for Umrah in Ramadan. Khaja Air Travels arranged everything — visa, hotel near Haram, sehri and iftar in Bangladeshi taste. Felt safe travelling as a couple for the first time abroad.",
    service: "Umrah — 14 day Ramadan Package",
    rating: 5
  },
  {
    name: "Tanvir Hossain",
    role: "Business Owner",
    city: "Dhaka",
    quote:
      "I book all my Dubai and Singapore tickets through Khaja Air Travels. Their fares match the airline website and the WhatsApp support has never failed me, even at midnight before an early-morning flight.",
    service: "Air Ticketing — Corporate",
    rating: 5
  },
  {
    name: "Anika Tasnim",
    role: "MBA Student",
    city: "Dhaka",
    quote:
      "Got my Schengen visa from their Uttara office for a 14-day Turkey + Greece trip. They prepared a clear cover letter and itinerary — interview was easier than I expected. Visa stamped in 9 working days.",
    service: "Schengen Visa Processing",
    rating: 5
  },
  {
    name: "Rezaul Karim",
    role: "Returning Migrant Worker",
    city: "Saudi Arabia / Brahmanbaria",
    quote:
      "Shahi Air International arranged my second contract in Riyadh. Salary was exactly what was promised. When my company delayed two months of wages, the Dhaka office actually picked up the phone and resolved it within a week.",
    service: "Shahi Air International — Recruitment",
    rating: 5
  },
  {
    name: "Sajjad Sarker",
    role: "Investor",
    city: "Cumilla",
    quote:
      "Bought two plots at Khaja Sebuj Palli for my children. Registration was clean and on time. The project mosque was already standing when I made my second payment. That is the kind of trust we want from a developer.",
    service: "Chandina Village Housing",
    rating: 5
  }
];
