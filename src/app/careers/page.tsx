import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team building the future of third-party risk management. Open roles at TrustGuard AI.",
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
    title: "Practitioner mindset",
    description:
      "We build for people who do the work. Our solutions come from understanding real operational pain.",
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
      <section className="pt-32 md:pt-52 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-2xl md:text-[2rem] tracking-tight leading-tight">
            Help us shape the future of TPRM
          </h1>
          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-foreground text-background h-10 px-5 rounded-full text-base tracking-tight leading-tight hover:opacity-80 transition-opacity"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8 items-center">
          <h2 className="text-2xl md:text-[2rem] tracking-tight leading-tight text-center">
            Our approach
          </h2>

          <div className="w-full grid md:grid-cols-2 gap-1">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-surface rounded min-h-[151px] p-6 md:p-10"
              >
                <p className="text-xl tracking-tight leading-tight text-foreground">
                  {value.title}
                </p>
                <p className="mt-1 text-xl leading-snug text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why join us */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-surface px-6 py-16 md:px-60 md:py-40 flex flex-col gap-10 md:gap-20">
            <h2 className="text-2xl md:text-[2rem] tracking-tight leading-snug">
              Why join us
            </h2>

            <div className="text-xl md:text-[2rem] tracking-tight leading-snug text-muted space-y-6 md:space-y-8">
              <p>
                We&apos;re building something meaningful: an AI-first platform
                that turns compliance into confidence for organizations managing
                complex vendor ecosystems.
              </p>
              <p>
                Our approach is shaped by real reviews, real audits, and real
                constraints.
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
        </div>
      </section>

      {/* Open positions */}
      <section className="px-6 md:px-10 pb-20 md:pb-40">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1 flex flex-col gap-1 text-2xl md:text-[2rem] tracking-tight">
            <p className="leading-tight text-foreground">Open positions</p>
            <p className="leading-snug text-muted w-full md:w-1/2">
              We&apos;re always looking for exceptional people. Even if you
              don&apos;t see a role that fits, we&apos;d love to hear from you.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center bg-foreground text-background h-10 px-5 rounded-full text-base tracking-tight leading-tight hover:opacity-80 transition-opacity"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
