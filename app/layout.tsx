import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { SITE } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true
});
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  adjustFontFallback: true
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1426" }
  ],
  colorScheme: "light"
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  applicationName: SITE.name,
  generator: "Next.js",
  keywords: [
    "Khaja Air Travels",
    "Hajj 2026 Bangladesh",
    "Umrah Bangladesh",
    "Hajj agency Dhaka",
    "Govt approved Hajj agency licence 0252",
    "Air ticket Dhaka",
    "Visa processing Bangladesh",
    "Tour packages Bangladesh",
    "Saudi visa Bangladesh",
    "UAE tourist visa",
    "Kashmir tour Bangladesh",
    "Turkey package Dhaka",
    "Dhaka travel agency"
  ],
  authors: [{ name: SITE.proprietor, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: `${SITE.name} — Travel Journal` }] }
  },
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
    description: SITE.description,
    creator: "@khajaairtravels",
    site: "@khajaairtravels"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
    shortcut: ["/favicon.svg"]
  },
  category: "travel",
  formatDetection: { telephone: true, address: true, email: true },
  verification: {
    // Set these via env or update directly once your accounts are verified.
    // google: "your-google-verification-code",
    // yandex: "your-yandex-code",
    // me: "your-me-id"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFab />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
