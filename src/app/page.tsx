import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { UseCases } from "@/components/sections/use-cases";
import { ReviewVelocity } from "@/components/sections/review-velocity";
import { Platform } from "@/components/sections/platform";
import { Benefits } from "@/components/sections/benefits";
import { Mission } from "@/components/sections/mission";
import { PilotTimeline } from "@/components/sections/pilot-timeline";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      <Hero />
      <Overview />
      <FeatureShowcase />
      <UseCases />
      <ReviewVelocity />
      <Platform />
      <Benefits />
      <Mission />
      <PilotTimeline />
      <CtaBanner />
    </div>
  );
}
