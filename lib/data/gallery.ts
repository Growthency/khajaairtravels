export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  category: "Hajj" | "Umrah" | "Tours" | "Office";
  src: string;
  alt: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "haram-night",
    title: "Masjid al-Haram at night",
    caption: "Our 2024 Hajj group at Marwah gate after Tawaf, August 2024.",
    category: "Hajj",
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
    alt: "Masjid al-Haram illuminated at night with the Kaaba in the centre"
  },
  {
    id: "madinah-roza",
    title: "Madinah Munawwarah",
    caption: "Group photo in front of Masjid an-Nabawi after Fajr.",
    category: "Hajj",
    src: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=1200&q=80",
    alt: "Masjid an-Nabawi in Madinah with green dome"
  },
  {
    id: "mina-tent",
    title: "Mina Mu'allim tents",
    caption: "Our Maktab in Mina, Hajj season 1444.",
    category: "Hajj",
    src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=80",
    alt: "White Mina tents under sunlight"
  },
  {
    id: "umrah-group",
    title: "Ramadan Umrah jamaat",
    caption: "21-day Ramadan group at Hilton Suites, Makkah.",
    category: "Umrah",
    src: "https://images.unsplash.com/photo-1646567620566-78cf1cd5f2a3?auto=format&fit=crop&w=1200&q=80",
    alt: "Family group at the lobby of a Makkah hotel"
  },
  {
    id: "kashmir-shikara",
    title: "Shikara ride on Dal Lake",
    caption: "Kashmir 6N family tour, October 2024.",
    category: "Tours",
    src: "https://images.unsplash.com/photo-1620766182966-c1b6a0c6a8b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Shikara boats on Dal Lake, Srinagar"
  },
  {
    id: "turkey-cappadocia",
    title: "Cappadocia balloons",
    caption: "Honeymoon couple at sunrise, Goreme valley, Turkey.",
    category: "Tours",
    src: "https://images.unsplash.com/photo-1641985657281-e6e83ce9c184?auto=format&fit=crop&w=1200&q=80",
    alt: "Hot air balloons over Cappadocia at sunrise"
  },
  {
    id: "bali-temple",
    title: "Bali temple visit",
    caption: "5-night Bali tour, October 2024.",
    category: "Tours",
    src: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional Balinese temple by the sea"
  },
  {
    id: "office-team",
    title: "Our Uttara office",
    caption: "The Khaja Air Travels team after morning briefing.",
    category: "Office",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Travel agency team at office"
  },
  {
    id: "office-counter",
    title: "Ticket counter",
    caption: "Issuing a confirmed ticket on the Amadeus terminal.",
    category: "Office",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    alt: "Customer being served at an airline ticket counter"
  }
];

export const galleryCategories = ["All", "Hajj", "Umrah", "Tours", "Office"] as const;
