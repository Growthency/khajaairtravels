import { SITE } from "@/lib/utils";

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE.name,
  legalName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon.svg`,
  founder: { "@type": "Person", name: SITE.proprietor },
  foundingDate: "2003",
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "House 12, Road 4, Sector 7",
    addressLocality: "Uttara, Dhaka",
    postalCode: "1230",
    addressCountry: "BD"
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.8742, longitude: 90.3909 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:30",
      closes: "20:00"
    }
  ],
  sameAs: [
    SITE.socials.facebook,
    SITE.socials.instagram,
    SITE.socials.youtube,
    SITE.socials.linkedin
  ]
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/blog?q={query}`,
    "query-input": "required name=query"
  }
});

export const breadcrumbSchema = (
  items: { name: string; href: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE.url}${it.href}`
  }))
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a }
  }))
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE.url}#travel-agency`,
  name: SITE.name,
  image: `${SITE.url}/favicon.svg`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House 12, Road 4, Sector 7",
    addressLocality: "Uttara, Dhaka",
    postalCode: "1230",
    addressCountry: "BD"
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.8742, longitude: 90.3909 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "09:30",
    closes: "20:00"
  }
});

export const articleSchema = (post: {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  publishedAt: string;
  author: { name: string };
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: post.cover.startsWith("http") ? post.cover : `${SITE.url}${post.cover}`,
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  author: { "@type": "Person", name: post.author.name },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: { "@type": "ImageObject", url: `${SITE.url}/favicon.svg` }
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/${post.slug}` }
});
