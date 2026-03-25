import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the TrustGuard AI platform, operated by OpenAdmin, Inc.",
  alternates: { canonical: "https://trustguardai.com/terms" },
};

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using TrustGuard AI (\u201cthe Service\u201d), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these terms. If you do not agree, do not use the Service.",
    ],
  },
  {
    heading: "Description of Service",
    paragraphs: [
      "TrustGuard AI is a SaaS platform operated by OpenAdmin, Inc. that uses artificial intelligence to analyze vendor security documentation, generate risk assessments, and streamline third-party risk management workflows.",
      "We may modify, suspend, or discontinue any part of the Service at any time. We will provide reasonable notice for material changes that affect your use.",
    ],
  },
  {
    heading: "Accounts",
    paragraphs: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at support@trustguard.ai if you suspect unauthorized access.",
      "We reserve the right to suspend or terminate accounts that violate these terms or that we reasonably believe pose a security risk.",
    ],
  },
  {
    heading: "Acceptable Use",
    paragraphs: [
      "You agree not to: upload malicious code or attempt to compromise the platform\u2019s security; use the Service to process data you do not have the right to process; reverse-engineer, decompile, or attempt to extract the source code of any part of the Service; resell or sublicense access without our written consent.",
      "You are solely responsible for the content you upload. We do not pre-screen uploaded documents but reserve the right to remove content that violates these terms.",
    ],
  },
  {
    heading: "Your Data",
    paragraphs: [
      "You retain all rights to the data you upload to TrustGuard AI. We do not claim ownership of your vendor documents, assessment results, or any other content you create within the platform.",
      "You grant us a limited license to process your data solely to provide and improve the Service. We will not use your data to train models accessible to other customers or share it with third parties except as described in our Privacy Policy.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "The Service \u2014 including its AI models, interface, documentation, and underlying code \u2014 is owned by OpenAdmin, Inc. and protected by intellectual property laws. These terms do not grant you any rights to our trademarks, logos, or brand assets.",
      "Feedback you voluntarily provide about the Service may be used by us without obligation or compensation to you.",
    ],
  },
  {
    heading: "Confidentiality",
    paragraphs: [
      "Each party agrees to keep the other\u2019s confidential information private and to use it only as necessary to fulfill obligations under these terms. Confidential information does not include anything that is publicly available, independently developed, or rightfully received from a third party.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, OpenAdmin, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability for any claim related to the Service is limited to the amount you paid us in the twelve months preceding the claim.",
      "The Service provides AI-generated risk assessments as a tool to support human decision-making. It is not a substitute for professional security, legal, or compliance advice.",
    ],
  },
  {
    heading: "Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless OpenAdmin, Inc., its officers, employees, and agents from any claims, losses, or damages \u2014 including reasonable attorney\u2019s fees \u2014 arising from your use of the Service, your violation of these terms, or your violation of any third-party rights.",
    ],
  },
  {
    heading: "Termination",
    paragraphs: [
      "Either party may terminate this agreement at any time by providing written notice. Upon termination, your right to access the Service ends immediately. We will make your data available for export for 30 days following termination, after which it will be deleted.",
      "Provisions that by their nature should survive termination \u2014 including intellectual property, limitation of liability, and indemnification \u2014 will remain in effect.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These terms are governed by and construed in accordance with the laws of the State of New York, without regard to conflict-of-law principles. Any disputes arising under these terms shall be resolved in the state or federal courts located in New York County, New York.",
    ],
  },
  {
    heading: "Modifications",
    paragraphs: [
      "We may update these terms from time to time. When we make material changes, we will notify you by email or through the platform at least 30 days before the changes take effect. Continued use of the Service after the effective date constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about these terms? Reach us at legal@trustguard.ai or write to: OpenAdmin, Inc., Attn: Legal, New York, NY.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      <section className="pt-32 md:pt-52 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-2xl md:text-[2rem] tracking-tight leading-tight text-foreground">
            Terms of Service
          </h1>
          <p className="mt-2 text-base tracking-tight leading-tight text-muted">
            Effective March 1, 2025
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20 md:pb-40">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl flex flex-col gap-14">
            {SECTIONS.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4">
                <h2 className="text-xl tracking-tight leading-tight text-foreground">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg leading-relaxed text-muted"
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
