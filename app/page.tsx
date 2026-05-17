import { Hero } from "@/components/sections/Hero";
import { AirlinesStrip } from "@/components/sections/AirlinesStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HajjFeature } from "@/components/sections/HajjFeature";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { BranchesShowcase } from "@/components/sections/BranchesShowcase";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AirlinesStrip />
      <ServicesGrid />
      <HajjFeature />
      <WhyUs />
      <Stats />
      <BranchesShowcase />
      <Process />
      <Testimonials />
      <BlogPreview />
      <CtaBand />
    </>
  );
}
