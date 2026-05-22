import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Khaja Air Travels",
  short: "KAT",
  tagline: "Govt. Approved Hajj Agency — Licence No-0252",
  description:
    "Khaja Air Travels is a Government Approved Hajj agency (Licence No-0252) offering Hajj, Umrah, air ticketing, visa processing, hotel booking and tour packages from Bangladesh.",
  proprietor: "Amdadul Haque Mir",
  group: "Khaja International Group",
  groupTagline: "Excellence · Integrity · Trust",
  licence: "0252",
  caab: "0014496",
  saudiCr: "7054132522",
  phone: "+8801711338261",
  phoneAlt: "+8801779734415",
  phoneSaudi: "+966508785198",
  whatsapp: "8801714839873",
  email: "khajaair03@gmail.com",
  emailAlt: "info@khajainternational.com",
  address: "61 Nikethon Mulla Complex, Dhaka 1000, Bangladesh",
  hours: "Saturday — Thursday, 9:30 AM — 8:00 PM",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://khajaairtravels.com",
  offices: [
    {
      city: "Dhaka",
      label: "Dhaka Head Office",
      address: "61 Nikethon Mulla Complex, Dhaka 1000",
      phone: "+8801711338261",
      country: "BD"
    },
    {
      city: "Sylhet",
      label: "Sylhet Office",
      address: "907 Surma Tower (Level 8), Taltola Road, Sylhet",
      phone: "+8801779734415",
      country: "BD"
    },
    {
      city: "Makkah",
      label: "Saudi Arabia Office",
      address: "Ajyad Rea Bakhsh, Makkah, Kingdom of Saudi Arabia",
      phone: "+966508785198",
      country: "SA"
    }
  ],
  socials: {
    facebook: "https://facebook.com/khajaairtravels",
    instagram: "https://instagram.com/khajaairtravels",
    youtube: "https://youtube.com/@khajaairtravels",
    linkedin: "https://linkedin.com/company/khaja-air-travels"
  }
};

export function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export const WA = {
  general: waLink("Assalamu Alaikum, I would like to know more about Khaja Air Travels services."),
  hajj: waLink("Assalamu Alaikum, I am interested in your Hajj package. Please send me details."),
  umrah: waLink("Assalamu Alaikum, I am interested in your Umrah package. Please send me details."),
  ticket: waLink("Assalamu Alaikum, I need help with an air ticket booking."),
  visa: waLink("Assalamu Alaikum, I need help with visa processing."),
  tour: waLink("Assalamu Alaikum, I am interested in your tour packages."),
  hotel: waLink("Assalamu Alaikum, I need help with hotel booking.")
};

export function formatDate(input: string | Date) {
  const date = typeof input === "string" ? new Date(input) : input;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

export function readingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(2, Math.round(words / 220));
  return `${minutes} min read`;
}
