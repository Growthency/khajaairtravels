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
    src: "/images/gallery/haram-night.webp",
    alt: "Masjid al-Haram illuminated at night with the Kaaba in the centre"
  },
  {
    id: "madinah-roza",
    title: "Madinah Munawwarah",
    caption: "Group photo in front of Masjid an-Nabawi after Fajr.",
    category: "Hajj",
    src: "/images/gallery/madinah-roza.webp",
    alt: "Masjid an-Nabawi in Madinah with green dome"
  },
  {
    id: "mina-tent",
    title: "Mina Mu'allim tents",
    caption: "Our Maktab in Mina, Hajj season 1444.",
    category: "Hajj",
    src: "/images/gallery/mina-tent.webp",
    alt: "White Mina tents under sunlight"
  },
  {
    id: "umrah-group",
    title: "Ramadan Umrah jamaat",
    caption: "21-day Ramadan group at Hilton Suites, Makkah.",
    category: "Umrah",
    src: "/images/gallery/umrah-group.webp",
    alt: "Family group at the lobby of a Makkah hotel"
  },
  {
    id: "kashmir-shikara",
    title: "Shikara ride on Dal Lake",
    caption: "Kashmir 6N family tour, October 2024.",
    category: "Tours",
    src: "/images/gallery/kashmir-shikara.webp",
    alt: "Shikara boats on Dal Lake, Srinagar"
  },
  {
    id: "turkey-cappadocia",
    title: "Cappadocia balloons",
    caption: "Honeymoon couple at sunrise, Goreme valley, Turkey.",
    category: "Tours",
    src: "/images/gallery/turkey-cappadocia.webp",
    alt: "Hot air balloons over Cappadocia at sunrise"
  },
  {
    id: "bali-temple",
    title: "Bali temple visit",
    caption: "5-night Bali tour, October 2024.",
    category: "Tours",
    src: "/images/gallery/bali-temple.webp",
    alt: "Traditional Balinese temple by the sea"
  },
  {
    id: "office-team",
    title: "Our Uttara office",
    caption: "The Khaja Air Travels team after morning briefing.",
    category: "Office",
    src: "/images/gallery/office-team.webp",
    alt: "Travel agency team at office"
  },
  {
    id: "office-counter",
    title: "Ticket counter",
    caption: "Issuing a confirmed ticket on the Amadeus terminal.",
    category: "Office",
    src: "/images/gallery/office-counter.webp",
    alt: "Customer being served at an airline ticket counter"
  }
];

export const galleryCategories = ["All", "Hajj", "Umrah", "Tours", "Office"] as const;
