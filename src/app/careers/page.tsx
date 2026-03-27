import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team building AI-driven compliance assessment. Open roles at TrustGuard AI.",
  alternates: { canonical: "https://trustguardai.com/careers" },
};

const VALUES = [
  {
    title: "Transparency at scale",
    description:
      "We believe in clear communication, honest feedback, and visible progress\u2014internally and with customers.",
  },
  {
    title: "Actionable momentum",
    description:
      "It\u2019s not enough to identify problems. We move on them. Progress is visible and measurable.",
  },
  {
    title: "Operator mentality",
    description:
      "We build for people who do the work. Every feature comes from understanding real operational pressure.",
  },
  {
    title: "Trust as a process",
    description:
      "Cybersecurity and trust are dynamic\u2014not checklists. We embrace continuous learning and adaptation.",
  },
] as const;

export default function CareersPage() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      {/* Hero */}
      <section className="pt-16 md:pt-32 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <h1 className="text-lg md:text-[2rem] tracking-tight leading-tight">
              Help us shape the future of compliance assessment
            </h1>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent text-white h-10 px-5 text-sm md:text-base tracking-tight leading-tight hover:bg-[#152E6B]"
              >
                Contact us
              </Link>
            </div>
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

          <div className="w-full grid md:grid-cols-2 gap-6">
            {VALUES.map((value, i) => (
              <FadeUp key={value.title} delay={i * 60}>
                <div
                  className="bg-[#F3F3F3] shadow-2xl min-h-[151px] p-6 md:p-10 flex flex-col gap-2"
                >
                  <p className="text-base md:text-xl tracking-tight leading-tight font-mono text-accent">
                    {value.title}
                  </p>
                  <p className="text-sm md:text-xl leading-snug text-black">
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
            <div className="bg-accent shadow-2xl px-6 py-16 md:px-60 md:py-40 flex flex-col gap-10 md:gap-20">
              <h2 className="text-lg md:text-[2rem] tracking-tight leading-snug text-white">
                Why join us
              </h2>

              <div className="text-base md:text-[2rem] tracking-tight leading-snug text-white/50 space-y-6 md:space-y-8">
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
                Founded by security veterans who&apos;ve led trust and security
                at scale&mdash;from Barclays and Bank of America to
                SAP&mdash;we understand the problem from the inside.
              </p>
              <p>
                We&apos;re looking for people who want to solve real operational
                problems, not chase hype.
              </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Open positions */}
      <section className="px-6 md:px-10 pb-20 md:pb-40">
        <FadeUp>
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1 flex flex-col gap-1 text-lg md:text-[2rem] tracking-tight">
              <p className="leading-tight text-foreground">Open positions</p>
              <p className="leading-snug text-muted w-full md:w-1/2">
                We&apos;re always looking for exceptional people. Even if you
                don&apos;t see a role that fits, we&apos;d love to hear from you.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center bg-accent text-white h-10 px-5 text-sm md:text-base tracking-tight leading-tight hover:bg-[#152E6B]"
            >
              Contact us
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
