import type { Metadata } from "next";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with TrustGuard AI for questions, partnerships, or demo requests.",
  alternates: { canonical: "https://trustguardai.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-20 md:gap-[80px]">
      <section className="pt-16 md:pt-32 px-6 md:px-10 pb-20 md:pb-40">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-16">
          <FadeUp>
            <h1 className="text-[32px] md:text-[64px] leading-tight tracking-tight text-foreground">
              Contact
            </h1>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="flex flex-col gap-8 max-w-[540px]">
              <p className="text-sm md:text-xl leading-snug text-muted">
                For questions, partnerships, or anything else
                <br />
                — reach out directly.
              </p>
              <a
                href="mailto:contact@trustguardai.com"
                className="font-mono text-base md:text-[24px] tracking-[-0.04em] text-accent hover:opacity-80 transition-opacity"
              >
                contact@trustguardai.com
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
