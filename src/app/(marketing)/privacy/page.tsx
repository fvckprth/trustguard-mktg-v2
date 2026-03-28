import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How OpenAdmin, Inc. collects, uses, and protects your information when you use TrustGuard AI.",
  alternates: { canonical: "https://trustguardai.com/privacy" },
};

const SECTIONS = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "When you create an account or use TrustGuard AI, we collect information you provide directly: your name, email address, company name, job title, and any vendor-assessment data you upload to the platform.",
      "We also collect usage data automatically — pages visited, features used, browser type, IP address, and device identifiers. This helps us understand how the platform is used and where it breaks.",
      "If you contact us for support or sales, we keep records of that correspondence.",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: [
      "We use your information to operate, maintain, and improve TrustGuard AI. That includes processing vendor assessments, generating risk reports, training and refining our AI models on aggregate (non-identifiable) patterns, and sending you service-related communications.",
      "We do not sell your personal information. We do not use your uploaded vendor documents to train models accessible to other customers. Your assessment data stays yours.",
    ],
  },
  {
    heading: "Data Sharing",
    paragraphs: [
      "We share information with third-party service providers who help us run the platform — cloud hosting, analytics, email delivery. These providers are contractually bound to use your data only for the services they perform on our behalf.",
      "We may disclose information if required by law, subpoena, or court order, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
      "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "We implement industry-standard technical and organizational safeguards — encryption in transit and at rest, access controls, regular penetration testing, and SOC 2 compliance processes. No system is perfectly secure, but we treat your data with the same rigor we help you apply to your vendors.",
    ],
  },
  {
    heading: "Cookies and Tracking",
    paragraphs: [
      "We use cookies and similar technologies for authentication, preferences, and analytics. Essential cookies are required for the platform to function. Analytics cookies help us understand usage patterns — you can disable these in your browser settings, though some features may not work as expected.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We retain your account information for as long as your account is active or as needed to provide services. Assessment data is retained according to your organization\u2019s configured retention policy. When you delete your account, we remove your personal information within 30 days, except where retention is required by law.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "Depending on your jurisdiction, you may have rights to access, correct, delete, or export your personal data. You may also have the right to object to or restrict certain processing. To exercise these rights, contact us at privacy@trustguard.ai.",
      "If you are located in the European Economic Area, United Kingdom, or California, additional protections apply under GDPR, UK GDPR, and CCPA respectively. We will respond to verified requests within the timeframes required by applicable law.",
    ],
  },
  {
    heading: "Children\u2019s Privacy",
    paragraphs: [
      "TrustGuard AI is not directed at anyone under 18. We do not knowingly collect personal information from children. If we learn we have collected data from a child, we will delete it promptly.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this policy from time to time. When we make material changes, we will notify you by email or through the platform before the changes take effect. Your continued use after the effective date constitutes acceptance.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions or concerns about this policy? Reach us at privacy@trustguard.ai or write to: OpenAdmin, Inc., Attn: Privacy, New York, NY.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      <section className="pt-16 md:pt-32 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-lg md:text-[2rem] tracking-tight leading-tight text-foreground">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20 md:pb-40">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl flex flex-col gap-14">
            {SECTIONS.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4">
                <h2 className="text-base md:text-xl tracking-tight leading-tight text-foreground">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-lg leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
