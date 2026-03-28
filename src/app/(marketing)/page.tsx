import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { Integrations } from "@/components/sections/integrations";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { UseCases } from "@/components/sections/use-cases";
import { ReviewVelocity } from "@/components/sections/review-velocity";
import { Platform } from "@/components/sections/platform";
import { Benefits } from "@/components/sections/benefits";
import { Mission } from "@/components/sections/mission";
import { PilotTimeline } from "@/components/sections/pilot-timeline";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/json-ld";
import { getContent } from "@/lib/content";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TrustGuard AI",
  url: "https://trustguardai.com",
  logo: "https://trustguardai.com/assets/tg-logo.svg",
  description:
    "AI-driven compliance assessment platform for third-party risk, organizational compliance, and internal audits.",
  email: "contact@trustguardai.com",
  founder: {
    "@type": "Person",
    name: "Elena Kvochko",
    jobTitle: "Founder & CEO",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TrustGuard AI",
  url: "https://trustguardai.com",
};

export default async function Home() {
  const c = await getContent();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            { ...organizationSchema, "@context": undefined },
            { ...webSiteSchema, "@context": undefined },
          ],
        }}
      />
      <div className="flex flex-col gap-20 md:gap-[120px]">
        <Hero
          headline={c("home.hero.headline")}
          subhead={c("home.hero.subhead")}
          cta={c("home.hero.cta")}
        />
        <Overview />
        <Integrations />
        <FeatureShowcase />
        <UseCases />
        <ReviewVelocity />
        <Platform />
        <Benefits />
        <PilotTimeline />
        <Mission />
        <CtaBanner />
      </div>
    </>
  );
}
