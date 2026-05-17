import type { GalleryItem } from "./gallery";

export const galleryBn: GalleryItem[] = [
  {
    id: "haram-night",
    title: "রাতে মসজিদ আল-হারাম",
    caption: "আগস্ট ২০২৪-এ তাওয়াফের পর মারওয়াহ গেটে আমাদের ২০২৪ হজ গ্রুপ।",
    category: "Hajj",
    src: "/images/gallery/haram-night.webp",
    alt: "কেন্দ্রে কাবা শরীফসহ রাতে আলোকিত মসজিদ আল-হারাম"
  },
  {
    id: "madinah-roza",
    title: "মদিনা মুনাওয়ারাহ",
    caption: "ফজরের পর মসজিদ আন-নববীর সামনে গ্রুপ ফটো।",
    category: "Hajj",
    src: "/images/gallery/madinah-roza.webp",
    alt: "সবুজ গম্বুজসহ মদিনার মসজিদ আন-নববী"
  },
  {
    id: "mina-tent",
    title: "মিনার মুয়াল্লিম তাঁবু",
    caption: "১৪৪৪ হজ মৌসুমে মিনায় আমাদের মাকতাব।",
    category: "Hajj",
    src: "/images/gallery/mina-tent.webp",
    alt: "সূর্যালোকে সাদা মিনার তাঁবু"
  },
  {
    id: "umrah-group",
    title: "রমজানের উমরাহ জামাত",
    caption: "মক্কার হিলটন সুইটসে ২১-দিনের রমজান গ্রুপ।",
    category: "Umrah",
    src: "/images/gallery/umrah-group.webp",
    alt: "মক্কার হোটেলের লবিতে পারিবারিক গ্রুপ"
  },
  {
    id: "kashmir-shikara",
    title: "ডাল লেকে শিকারা রাইড",
    caption: "অক্টোবর ২০২৪-এ কাশ্মীর ৬N পারিবারিক ট্যুর।",
    category: "Tours",
    src: "/images/gallery/kashmir-shikara.webp",
    alt: "শ্রীনগরের ডাল লেকে শিকারা নৌকা"
  },
  {
    id: "turkey-cappadocia",
    title: "কাপাডোসিয়া বেলুন",
    caption: "তুরস্কের গোরেমে উপত্যকায় সূর্যোদয়ে হানিমুন দম্পতি।",
    category: "Tours",
    src: "/images/gallery/turkey-cappadocia.webp",
    alt: "সূর্যোদয়ে কাপাডোসিয়ার উপর গরম বায়ু বেলুন"
  },
  {
    id: "bali-temple",
    title: "বালি মন্দির পরিদর্শন",
    caption: "অক্টোবর ২০২৪-এর ৫-রাতের বালি ট্যুর।",
    category: "Tours",
    src: "/images/gallery/bali-temple.webp",
    alt: "সমুদ্রের পাশে ঐতিহ্যবাহী বালিনিজ মন্দির"
  },
  {
    id: "office-team",
    title: "আমাদের উত্তরা অফিস",
    caption: "সকালের ব্রিফিংয়ের পর খাজা এয়ার ট্র্যাভেলস টিম।",
    category: "Office",
    src: "/images/gallery/office-team.webp",
    alt: "অফিসে ট্রাভেল এজেন্সি টিম"
  },
  {
    id: "office-counter",
    title: "টিকিট কাউন্টার",
    caption: "Amadeus টার্মিনালে কনফার্ম টিকিট ইস্যু করা।",
    category: "Office",
    src: "/images/gallery/office-counter.webp",
    alt: "এয়ারলাইন টিকিট কাউন্টারে গ্রাহককে সেবা দেওয়া"
  }
];

export const galleryCategoriesBn = ["সব", "হজ", "উমরাহ", "ট্যুর", "অফিস"] as const;

export const galleryCategoryMap: Record<string, string> = {
  All: "সব",
  Hajj: "হজ",
  Umrah: "উমরাহ",
  Tours: "ট্যুর",
  Office: "অফিস"
};
