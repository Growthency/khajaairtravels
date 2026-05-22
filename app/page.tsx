import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { AirlinesStrip } from "@/components/sections/AirlinesStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/schemas";

const HajjFeature = dynamic(() => import("@/components/sections/HajjFeature").then((m) => m.HajjFeature));
const WhyUs = dynamic(() => import("@/components/sections/WhyUs").then((m) => m.WhyUs));
const Stats = dynamic(() => import("@/components/sections/Stats").then((m) => m.Stats));
const BranchesShowcase = dynamic(() => import("@/components/sections/BranchesShowcase").then((m) => m.BranchesShowcase));
const Leadership = dynamic(() => import("@/components/sections/Leadership").then((m) => m.Leadership));
const Process = dynamic(() => import("@/components/sections/Process").then((m) => m.Process));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials));
const BlogPreview = dynamic(() => import("@/components/sections/BlogPreview").then((m) => m.BlogPreview));
const CtaBand = dynamic(() => import("@/components/sections/CtaBand").then((m) => m.CtaBand));

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <Hero />
      <AirlinesStrip />
      <ServicesGrid />
      <HajjFeature />
      <WhyUs />
      <Stats />
      <BranchesShowcase />
      <Leadership compact />
      <Process />
      <Testimonials />
      <BlogPreview />
      <CtaBand />
    </>
  );
}
