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
  licence: "0252",
  phone: "+8801743656066",
  phoneAlt: "+8801711122334",
  whatsapp: "8801743656066",
  email: "info@khajaairtravels.com",
  emailAlt: "khajaairtravels@gmail.com",
  address: "House 12, Road 4, Sector 7, Uttara, Dhaka 1230, Bangladesh",
  hours: "Saturday — Thursday, 9:30 AM — 8:00 PM",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://khajaairtravels.com",
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
