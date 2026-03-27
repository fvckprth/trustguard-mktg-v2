import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/json-ld";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Built by practitioners who spent decades managing compliance and risk at Fortune 500 companies.",
  alternates: { canonical: "https://trustguardai.com/company" },
};

const STATS = [
  {
    value: "98%",
    label: "of orgs have a breached vendor relationship",
  },
  {
    value: "40+",
    label:
      "hours per vendor security assessment",
  },
  {
    value: "$4.5M+",
    label: "average cost of a third-party data breach",
  },
] as const;

const APPROACH = [
  {
    title: "Every page, every claim",
    description:
      "Cross-references claims against evidence across every document. Surfaces what matters.",
  },
  {
    title: "Findings you can cite",
    description:
      "Every finding comes with evidence citations and direct links to source documentation. Know exactly why something is flagged.",
  },
  {
    title: "90% faster, same rigor",
    description:
      "Process hundreds of documents in the time it takes to review one manually. Assessment speed scales with your portfolio.",
  },
  {
    title: "Practitioner-built",
    description:
      "Built by CISOs and risk managers who\u2019ve run thousands of assessments. Every feature exists because we needed it.",
  },
] as const;

const FOUNDER = {
  name: "Elena Kvochko",
  role: "Founder & CEO",
  photo: "/assets/elena-kvochko.jpeg",
  bio: "Building an AI-first platform to transform third-party risk. Previously CISO at SAP, led cybersecurity at Barclays and Bank of America.",
} as const;

const INVESTORS = [
  {
    name: "Jess Leão",
    role: "Decibel VC",
    photo: "/assets/jessica-leao.png",
    bio: "Partner at Decibel investing in AI-native infrastructure. Previously at Maverick Ventures, led early investments including MosaicML. Former forward deployed engineer at Palantir.",
  },
] as const;

const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TrustGuard AI",
  legalName: "OpenAdmin, Inc.",
  url: "https://trustguardai.com",
  logo: "https://trustguardai.com/assets/tg-logo.svg",
  description:
    "AI-driven compliance assessment platform built by practitioners who spent decades managing risk at Fortune 500 companies.",
  email: "contact@trustguardai.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Elena Kvochko",
    jobTitle: "Founder & CEO",
    description:
      "Previously CISO at SAP, led cybersecurity at Barclays and Bank of America.",
  },
  employee: [
    {
      "@type": "Person" as const,
      name: FOUNDER.name,
      jobTitle: FOUNDER.role,
      description: FOUNDER.bio,
    },
  ],
};

export default function CompanyPage() {
  return (
    <>
    <JsonLd data={companySchema} />
    <div className="flex flex-col gap-20 md:gap-40">
      {/* Hero */}
      <section className="pt-16 md:pt-32 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <FadeUp>
            <h1 className="text-[40px] md:text-[64px] leading-tight tracking-tight text-foreground text-center">
              Built by Practitioners,
              <br />
              for Practitioners
            </h1>
          </FadeUp>
          <FadeUp delay={100}>
            <Link
              href="/request-demo"
              className="mt-16 font-mono bg-[#191919] text-white h-14 md:h-[64px] px-8 md:px-[40px] inline-flex items-center justify-center text-base md:text-[24px] tracking-[-0.04em] shadow-[2px_2px_7px_0px_rgba(0,0,0,0.08),8px_9px_13px_0px_rgba(0,0,0,0.07)] hover:bg-background hover:text-accent transition-colors"
            >
              Request a demo
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Why we exist */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto bg-[#191919]/5 px-20 py-40 flex flex-col gap-8">
          <FadeUp>
            <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight">
              Why we exist
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <FadeUp key={stat.value} delay={i * 80}>
                <div
                  className="bg-accent shadow-2xl min-h-[191px] p-6 md:p-10 flex flex-col justify-between gap-6"
                >
                  <p className="text-3xl md:text-[4rem] tracking-tighter leading-tight text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-xl leading-snug text-white/50">
                    {stat.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
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
            {APPROACH.map((item, i) => (
              <FadeUp key={item.title} delay={i * 60}>
                <div
                  className="bg-background shadow-2xl min-h-[178px] p-6 md:p-10 flex flex-col gap-2"
                >
                  <p className="text-base md:text-xl tracking-tight leading-tight font-mono text-accent">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-xl leading-snug text-[#191919] max-w-full md:max-w-[75%]">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Open letter */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <div className="bg-accent shadow-2xl p-6 md:p-16 lg:px-60 lg:py-40 flex flex-col gap-10 md:gap-20">
              <Image
                src="/assets/tg-logo.svg"
                alt="TrustGuard AI"
                width={89}
                height={24}
                className="h-6 w-auto brightness-0 invert opacity-25 self-start"
              />
              <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-white">
                An open letter to CISOs,
                <br />
                CROs, and Risk Professionals
              </h2>

              <div className="text-base md:text-[24px] tracking-tight leading-snug text-white/50 space-y-6 md:space-y-8">
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
                <p className="text-white">
                  We built TrustGuard with two core principles in mind:
                </p>
                <ol className="list-decimal pl-6 md:pl-12 space-y-4 text-white marker:text-white">
                  <li>
                    <span className="text-white">
                      Transparency at scale
                    </span>{" "}
                    <span className="text-white/50">
                      &mdash; from the dashboard to evidence sharing, nothing is
                      hidden. You&apos;ll see compliance status clearly, at every
                      vendor and control level.
                    </span>
                  </li>
                  <li>
                    <span className="text-white">
                      Actionable momentum
                    </span>{" "}
                    <span className="text-white/50">
                      &mdash; it&apos;s not enough to show risk, we help you move
                      on it. With proactive triage, reminders, and AI-driven
                      insights, progress becomes visible and measurable.
                    </span>
                  </li>
                </ol>
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

              <div className="flex items-start gap-6">
                <Image
                  src="/assets/elena-kvochko.jpeg"
                  alt="Elena Kvochko"
                  width={48}
                  height={48}
                  className="shrink-0 size-12 object-cover"
                />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-base md:text-xl tracking-tight leading-tight text-white">
                    Elena K.
                  </p>
                  <p className="text-sm md:text-xl tracking-tight leading-tight text-white/50">
                    Founder &amp; CEO
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Founder & Investors */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          <FadeUp>
            <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-center">
              Founder &amp; Investors
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeUp delay={60}>
              <div className="bg-background shadow-2xl p-6 md:p-10 flex flex-col gap-10 h-full">
                <div className="flex items-center gap-6">
                  <Image
                    src={FOUNDER.photo}
                    alt={FOUNDER.name}
                    width={48}
                    height={48}
                    className="shrink-0 size-12 object-cover"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-base md:text-xl tracking-tight leading-tight text-foreground">
                      {FOUNDER.name}
                    </p>
                    <p className="text-sm md:text-xl tracking-tight leading-tight text-muted">
                      {FOUNDER.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-xl leading-snug text-muted">
                  {FOUNDER.bio}
                </p>
              </div>
            </FadeUp>

            {INVESTORS.map((investor, i) => (
              <FadeUp key={investor.name} delay={(i + 1) * 60 + 60}>
                <div className="bg-background shadow-2xl p-6 md:p-10 flex flex-col gap-10 h-full">
                  <div className="flex items-center gap-6">
                    <Image
                      src={investor.photo}
                      alt={investor.name}
                      width={48}
                      height={48}
                      className="shrink-0 size-12 object-cover"
                    />
                    <div className="flex flex-col items-start gap-1">
                      <p className="text-base md:text-xl tracking-tight leading-tight text-foreground">
                        {investor.name}
                      </p>
                      <p className="text-sm md:text-xl tracking-tight leading-tight text-muted">
                        {investor.role}
                      </p>
                    </div>
                  </div>
                  {investor.bio && (
                    <p className="text-sm md:text-xl leading-snug text-muted">
                      {investor.bio}
                    </p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
    </>
  );
}
