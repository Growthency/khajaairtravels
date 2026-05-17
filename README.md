# Khaja Air Travels

Official website of **Khaja Air Travels** — a Government Approved Hajj agency (Licence No-0252) and full-service travel house headquartered in Uttara, Dhaka.

The site presents the agency's services (Hajj, Umrah, air ticketing, visa processing, hotel booking, tour packages), the four sister concerns under the group, a travel journal, gallery and the team's contact channels.

## Stack

- **Next.js 14** with the App Router and TypeScript
- **Tailwind CSS** for the design system, with a custom gradient + animation layer
- **Framer Motion** for entrance, parallax and scroll-linked animations
- **Supabase** (Postgres) for contact leads, newsletter subscribers and (optionally) CMS-managed blog content
- **Lucide React** for icons
- Locally drawn SVG illustrations — no third-party CDN dependency

## Local development

```bash
cp .env.local.example .env.local   # then fill in Supabase keys
npm install
npm run dev
```

The dev server runs at <http://localhost:3000>.

## Useful scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm start` — start the production server
- `npm run lint` — run ESLint
- `npm run typecheck` — TypeScript strict mode check

## Project structure

```
app/                Pages and layouts (Home, About, Services, Branches, Blog, Contact, Gallery, FAQ, API routes)
components/
  layout/           Header, Footer, WhatsApp FAB, ScrollToTop
  sections/         Home/About building blocks (Hero, ServicesGrid, HajjFeature, ...)
  shared/           Logo, Container, Button, Badge, PageHero, SectionHeader
  effects/          GradientBlob, TypeWriter, GlobeOrbit, MagneticButton, Reveal, Marquee, CountUp, ParallaxFloater
  forms/            ContactForm
lib/
  utils.ts          Site metadata and helpers
  data/             Real content for services, branches, posts, testimonials, FAQ, gallery
  supabase/         Browser + server Supabase clients
public/             Favicon and static assets
supabase/           SQL schema for posts, leads, subscribers
```

## Sister concerns

- **Khaja Air Travels** — flagship travel agency, est. 2003
- **Shahi Air International** — manpower export, est. 2011
- **Chandina Village Housing Ltd.** — planned plots in Cumilla, est. 2016
- **Abibil Trading Food Products Ltd.** — pantry essentials, est. 2019

## Supabase

Run the SQL in `supabase/schema.sql` once to create the `posts`, `leads` and `subscribers` tables with sensible row-level security policies. The contact API route (`app/api/contact/route.ts`) writes to `leads` using the service-role key.

The blog currently reads from `lib/data/posts.ts`. To switch to Supabase-driven content, point the blog page handlers at `select * from posts where published = true order by published_at desc`.

## Deployment

The project is statically rendered where possible and deploys cleanly to Vercel or any Node 18+ host. Configure the environment variables from `.env.local.example` in your hosting dashboard before the first deploy.

## License

© Khaja Air Travels. All rights reserved.
