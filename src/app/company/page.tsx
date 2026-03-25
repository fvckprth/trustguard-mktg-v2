import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Company — TrustGuard AI",
  description:
    "Built by practitioners, for practitioners. We've spent decades managing third-party risk at Fortune 500 companies.",
};

const STATS = [
  {
    value: "98%",
    label: "of orgs have vendor relationships that have been breached",
  },
  {
    value: "40+",
    label:
      "hours invested toward completing a single vendor security assessment",
  },
  {
    value: "$4.5M+",
    label: "average cost of a third-party data breach",
  },
] as const;

const APPROACH = [
  {
    title: "Depth Over Speed",
    description:
      "AI that reads every page of every SOC report, cross-references claims against evidence, and surfaces what actually matters\u2014not just what\u2019s easy to find.",
  },
  {
    title: "Confidence Over Coverage",
    description:
      "Every finding comes with evidence citations. Know exactly why something is flagged, with direct links to the source documentation.",
  },
  {
    title: "Speed That Scales",
    description:
      "Reduce assessment time by 90% without sacrificing thoroughness. Process hundreds of vendor documents in the time it takes to review one manually.",
  },
  {
    title: "Practitioner-Built",
    description:
      "Designed by CISOs and risk managers who\u2019ve assessed thousands of vendors. Every feature exists because we needed it ourselves.",
  },
] as const;

const LEADERS = [
  {
    name: "Elena Kvochko",
    role: "Founder & CEO",
    bio: "Building an AI-first platform to transform third-party risk. Adjunct professor at Cornell. Previously CISO at SAP, led cybersecurity at Barclays and Bank of America.",
  },
  {
    name: "Subbu Kandikattu",
    role: "Head of Technology",
    bio: "Leads TrustGuard\u2019s technology vision and engineering. Previously VP of Engineering at Hearst, Sr Engineering Manager at Amazon. Built systems at Microsoft and Expedia.",
  },
  {
    name: "Rajiv Pant",
    role: "Advisor to CEO & CTO",
    bio: "President at Flatiron Software and Snapshot AI. Practitioner of synthesis engineering\u2014AI-augmented software development. Former CTO of The New York Times, Chief Product & Technology Officer at Hearst and WSJ.",
  },
] as const;

export default function CompanyPage() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      {/* Hero */}
      <section className="pt-32 md:pt-52 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-2 text-2xl md:text-[2rem] tracking-tight">
            <p className="leading-tight text-foreground">
              Built by Practitioners, for Practitioners
            </p>
            <p className="leading-snug text-muted w-full md:w-1/2">
              We&apos;ve spent decades managing third-party risk at Fortune 500
              companies.
            </p>
          </div>
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

      {/* Why we exist */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          <h2 className="text-2xl md:text-[2rem] tracking-tight leading-tight">
            Why we exist
          </h2>

          <div className="grid md:grid-cols-3 gap-1">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="bg-surface rounded min-h-[191px] p-6 md:p-10 flex flex-col justify-between gap-6"
              >
                <p className="text-5xl md:text-[4rem] tracking-tighter leading-tight text-foreground">
                  {stat.value}
                </p>
                <p className="text-xl leading-snug text-muted max-w-full md:max-w-[75%]">
                  {stat.label}
                </p>
              </div>
            ))}
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
            {APPROACH.map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded min-h-[178px] p-6 md:p-10"
              >
                <p className="text-xl tracking-tight leading-tight text-foreground">
                  {item.title}
                </p>
                <p className="mt-1 text-xl leading-snug text-muted max-w-full md:max-w-[75%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open letter */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-surface p-6 md:p-16 lg:p-40 flex flex-col gap-10 md:gap-20">
            <h2 className="text-2xl md:text-[2rem] tracking-tight leading-snug">
              An open letter to CISOs,
              <br />
              CROs, and Risk Professionals
            </h2>

            <div className="text-xl md:text-[2rem] tracking-tight leading-snug text-muted space-y-6 md:space-y-8">
              <p>
                Over my career&mdash;from leading cybersecurity at Barclays and
                Bank of America, to serving as the first Chief Trust Officer at
                SAP&mdash;I&apos;ve seen firsthand how trust is built, broken,
                and rebuilt in complex organizations.
              </p>
              <p>
                Today, companies grapple with sprawling supply chains and
                evolving cyber risks. Manual assessments are slow, siloed, and
                often outdated.
              </p>
              <p>
                TrustGuard is designed to change that: an AI-first platform that
                helps you continuously assess, collaborate, and close compliance
                gaps&mdash;all within a single, interactive workflow.
              </p>
              <p className="text-foreground">
                We built TrustGuard with two core principles in mind:
              </p>
              <ol className="list-decimal pl-6 md:pl-12 space-y-4 text-foreground marker:text-foreground">
                <li>
                  <span className="text-foreground">
                    Transparency at scale
                  </span>{" "}
                  <span className="text-muted">
                    &mdash; from the dashboard to evidence sharing, nothing is
                    hidden. You&apos;ll see compliance status clearly, at every
                    vendor and control level.
                  </span>
                </li>
                <li>
                  <span className="text-foreground">
                    Actionable momentum
                  </span>{" "}
                  <span className="text-muted">
                    &mdash; it&apos;s not enough to show risk, we help you move
                    on it. With proactive triage, reminders, and AI-driven
                    insights, progress becomes visible and measurable.
                  </span>
                </li>
              </ol>
              <p>
                As an adjunct professor at Cornell, I teach the next generation
                of security leaders. They remind me every day that cybersecurity
                and trust are dynamic processes&mdash;not checklists.
              </p>
              <p>
                That&apos;s why we built TrustGuard: to make trust operational
                and clear, not theoretical.
              </p>
              <p>
                If you&apos;re responsible for managing third-party risk, I
                invite you to explore how TrustGuard can support your mission.
                Together, we can turn compliance into confidence.
              </p>
              <p>Sincerely,</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="shrink-0 size-12 rounded-sm bg-muted/25" />
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl tracking-tight leading-tight text-foreground">
                  Elena K.
                </p>
                <p className="text-xl tracking-tight leading-tight text-muted">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          <h2 className="text-2xl md:text-[2rem] tracking-tight leading-tight text-center">
            Leadership
          </h2>

          <div className="grid md:grid-cols-3 gap-1">
            {LEADERS.map((leader) => (
              <div
                key={leader.name}
                className="bg-surface rounded p-6 md:p-10 flex flex-col gap-10"
              >
                <div className="flex items-center gap-6">
                  <div className="shrink-0 size-12 rounded-sm bg-muted/25" />
                  <div className="flex flex-col gap-1">
                    <p className="text-xl tracking-tight leading-tight text-foreground">
                      {leader.name}
                    </p>
                    <p className="text-xl tracking-tight leading-tight text-muted">
                      {leader.role}
                    </p>
                  </div>
                </div>
                <p className="text-xl leading-snug text-muted">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
