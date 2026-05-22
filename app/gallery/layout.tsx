import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Moments from our Hajj, Umrah and tour groups",
  description:
    "Photographs from real Khaja Air Travels trips — Hajj seasons at Masjid al-Haram and Madinah, Ramadan Umrah jamaats, Kashmir winter tours and the team at our Dhaka office.",
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery", type: "website" }
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
