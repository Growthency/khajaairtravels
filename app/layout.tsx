import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SITE } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  keywords: [
    "Khaja Air Travels",
    "Hajj Bangladesh",
    "Umrah Bangladesh",
    "Hajj agency Dhaka",
    "Air ticket Dhaka",
    "Visa processing Bangladesh",
    "Tour packages Bangladesh",
    "Saudi visa",
    "UAE visa",
    "Kashmir tour"
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
        <ScrollToTop />
      </body>
    </html>
  );
}
