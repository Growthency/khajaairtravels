export type Leader = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

// NOTE: Update the CEO and Manager names below with the real names.
// The Managing Director is taken from the founding business card.
export const leadership: Leader[] = [
  {
    id: "ceo",
    name: "Md. Khaja Moinuddin",
    role: "Chief Executive Officer",
    image: "/images/team/ceo.webp",
    bio: "Leads the vision and growth of Khaja International Group across Bangladesh and Saudi Arabia, building partnerships that put the pilgrim and the traveller first."
  },
  {
    id: "md",
    name: "Amdadul Haque Mir",
    role: "Managing Director",
    image: "/images/team/md.webp",
    bio: "Founder of Khaja Air Travels (Hajj Licence No-0252). Two decades of personal khedmat to over eleven thousand pilgrims — and the standard the whole group is measured against."
  },
  {
    id: "manager",
    name: "Md. Saiful Islam",
    role: "General Manager",
    image: "/images/team/manager.webp",
    bio: "Runs day-to-day operations across the Hajj, ticketing, visa and tour desks, making sure every file moves quickly and every traveller is looked after."
  }
];
