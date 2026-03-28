import type { Metadata } from "next";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with TrustGuard AI for questions, partnerships, or demo requests.",
  alternates: { canonical: "https://trustguardai.com/contact" },
};

const REASONS = [
  { label: "Product & demos", description: "See TrustGuard in action" },
  { label: "Partnerships", description: "Integration and channel inquiries" },
  { label: "General", description: "Everything else" },
] as const;

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-20 md:gap-[80px]">
      <section className="pt-16 md:pt-32 px-6 md:px-10 pb-20 md:pb-40">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-16">
          <FadeUp>
            <h1 className="text-[32px] md:text-[64px] leading-tight tracking-tight text-foreground">
              Get in touch
            </h1>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeUp delay={100}>
              <div className="bg-[#191919] shadow-2xl p-6 md:p-10 flex flex-col gap-10 h-full justify-between">
                <div className="flex flex-col gap-4">
                  <p className="text-sm md:text-xl leading-snug text-white/50">
                    For questions, partnerships, or anything else
                    <br />
                    — reach out directly.
                  </p>
                </div>
                <a
                  href="mailto:contact@trustguardai.com"
                  className="font-mono text-base md:text-[24px] tracking-[-0.04em] text-white hover:text-white/70 transition-colors"
                >
                  contact@trustguardai.com
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="flex flex-col gap-6 h-full">
                {REASONS.map((reason, i) => (
                  <div key={i} className="bg-background shadow-2xl p-6 md:p-10 flex flex-col gap-2 flex-1">
                    <p className="font-mono text-base md:text-xl tracking-tight leading-tight text-accent">
                      {reason.label}
                    </p>
                    <p className="text-sm md:text-xl leading-snug text-[#191919]">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
