import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team building AI-driven compliance assessment. Open roles at TrustGuard AI.",
  alternates: { canonical: "https://trustguardai.com/careers" },
};

const VALUES = [
  {
    title: "Built for scale",
    description:
      "Architecture designed to process thousands of assessments without compromising depth or accuracy.",
  },
  {
    title: "Precision and elegance",
    description:
      "Every interaction is intentional. Clean outputs, clear findings, no noise.",
  },
  {
    title: "Operator mentality",
    description:
      "We build for people who do the work. Every feature comes from understanding real operational pressure.",
  },
  {
    title: "Continuous deep monitoring",
    description:
      "Ongoing assessment of your compliance posture — not a point-in-time snapshot.",
  },
  {
    title: "Surface what reviews can't",
    description:
      "AI that reads every page and cross-references claims across documents — gaps that humans miss become visible.",
  },
  {
    title: "One engine, any framework",
    description:
      "SOC 2, ISO, FedRAMP, NIST, or your own custom framework.",
  },
] as const;

export default function CareersPage() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      {/* Hero */}
      <section className="pt-16 md:pt-32 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <FadeUp>
            <h1 className="text-[32px] md:text-[64px] leading-tight tracking-tight text-foreground text-center text-balance">
              Shape the Future of{" "}
              <br className="hidden md:block" />
              Compliance Assessment
            </h1>
          </FadeUp>
          <FadeUp delay={100}>
            <Link
              href="/request-demo"
              className="mt-16 font-mono bg-[#191919] text-white h-14 md:h-[64px] px-8 md:px-[40px] inline-flex items-center justify-center text-base md:text-[24px] tracking-[-0.04em] shadow-[2px_2px_7px_0px_rgba(0,0,0,0.08),8px_9px_13px_0px_rgba(0,0,0,0.07)] hover:bg-background hover:text-accent transition-colors"
            >
              Contact us
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Our approach */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8 items-center">
          <FadeUp>
            <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-center">
              Our approach
            </h2>
          </FadeUp>

          <div className="w-full grid md:grid-cols-3 md:auto-rows-[1fr] gap-6">
            {VALUES.map((value, i) => (
              <FadeUp
                key={value.title}
                delay={i * 60}
                className="h-full"
              >
                <div
                  className="bg-background shadow-2xl h-full p-6 md:p-10 flex flex-col gap-2"
                >
                  <p className="text-base md:text-xl tracking-tight leading-tight font-mono text-accent">
                    {value.title}
                  </p>
                  <p className="text-sm md:text-xl leading-snug text-[#191919]">
                    {value.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why join us */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <div className="bg-[#191919] shadow-2xl p-6 md:p-16 lg:px-60 lg:py-20 flex flex-col gap-10 md:gap-20">
              <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-white">
                Why join us
              </h2>

              <div className="text-base md:text-[24px] tracking-tight leading-snug text-white/50 space-y-6 md:space-y-8">
              <p>
                We&apos;re building an AI-first platform that turns compliance
                into confidence for organizations managing complex risk
                programs.
              </p>
              <p>
                We operate with urgency and care about the details that matter
                to auditors.
              </p>
              <p>
                Founded by security and engineering veterans from SAP, Bank of America, Barclays, AWS, and Microsoft.
              </p>
              <p>
                We look for people with deep security and engineering expertise.
              </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Open positions */}
      <section className="px-6 md:px-10">
        <FadeUp>
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1 flex flex-col gap-1 text-lg md:text-[2rem] tracking-tight">
              <p className="leading-tight text-foreground">Open positions</p>
              <p className="leading-snug text-muted w-full md:w-2/3">
                We&apos;re always looking for exceptional people. Even if you
                don&apos;t see a role that fits, we&apos;d love to hear from you.
              </p>
            </div>
            <Link
              href="/request-demo"
              className="shrink-0 font-mono bg-[#191919] text-white h-14 md:h-[64px] px-8 md:px-[40px] inline-flex items-center justify-center text-base md:text-[24px] tracking-[-0.04em] shadow-[2px_2px_7px_0px_rgba(0,0,0,0.08),8px_9px_13px_0px_rgba(0,0,0,0.07)] hover:bg-background hover:text-accent transition-colors"
            >
              Contact us
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
