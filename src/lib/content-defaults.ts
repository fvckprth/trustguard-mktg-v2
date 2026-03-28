/**
 * Default content strings for every editable field in the marketing site.
 * These serve as the fallback when the database is empty or unreachable,
 * and as the seed source for the admin "Seed defaults" button.
 *
 * Key pattern: {page}.{section}.{field}
 */
export const DEFAULTS: Record<string, string> = {
  // ─── Homepage: Hero ───────────────────────────────────────────────
  "home.hero.headline": "Native Agentic AI.\nPrecision and Elegance for\nEvery Security Risk Assessment.",
  "home.hero.subhead": "Vendor risk. Internal audits.\nThird-party risk management.\nOne agentic platform, any framework.",
  "home.hero.cta": "Request a demo",

  // ─── Homepage: Overview ───────────────────────────────────────────
  "home.overview.heading": "Ingest evidence. Analyze risk. Produce audit-ready outputs.",
  "home.overview.0.title": "Evidence ingest",
  "home.overview.0.subtitle": "Policies, attestations, SOC reports, etc.",
  "home.overview.1.title": "AI analytics",
  "home.overview.1.subtitle": "Claims verified against every document",
  "home.overview.2.title": "Audit-ready outputs",
  "home.overview.2.subtitle": "Findings, reports, and evidence trails",

  // ─── Homepage: Integrations ───────────────────────────────────────
  "home.integrations.heading": "700+ integrations",
  "home.integrations.subheading": "Pull evidence from the tools your team already uses.",

  // ─── Homepage: Feature Showcase ───────────────────────────────────
  "home.features.0.label": "Analysis",
  "home.features.0.title": "Analyze evidence",
  "home.features.0.description": "Surface missing proof and inconsistencies automatically.",
  "home.features.1.label": "Frameworks",
  "home.features.1.title": "Map to any framework",
  "home.features.1.description": "SOC 2, ISO 27001, FedRAMP, NIST, SIG, CAIQ.",
  "home.features.2.label": "Remediation",
  "home.features.2.title": "Track remediation to closure",
  "home.features.2.description": "Follow every finding from gap to fix.",
  "home.features.3.label": "Reporting",
  "home.features.3.title": "Produce compliance reports",
  "home.features.3.description": "Summaries, breakdowns, and evidence references \u2014 audit-ready.",

  // ─── Homepage: Use Cases ──────────────────────────────────────────
  "home.useCases.heading": "Built for Every Assessment",
  "home.useCases.0.title": "Third-party risk management",
  "home.useCases.0.description": "Assess vendors against your frameworks. Get findings with evidence citations and track remediation to closure.",
  "home.useCases.1.title": "Organizational compliance",
  "home.useCases.1.description": "Evaluate your compliance posture against any framework. Identify control and evidence gaps before your auditor does.",
  "home.useCases.2.title": "Internal audit programs",
  "home.useCases.2.description": "Run control and policy reviews with consistent scoring. Reporting ready for audit committees and executives.",

  // ─── Homepage: Review Velocity ────────────────────────────────────
  "home.reviewVelocity.heading1": "Review more with the same team.",
  "home.reviewVelocity.heading2": "Broader coverage. Richer findings.",
  "home.reviewVelocity.cta": "Get started",
  "home.reviewVelocity.0.value": "90%",
  "home.reviewVelocity.0.label": "Reduction in review time",
  "home.reviewVelocity.1.value": "10X",
  "home.reviewVelocity.1.label": "More risks surfaced per assessment",
  "home.reviewVelocity.2.value": "100X",
  "home.reviewVelocity.2.label": "Increase in assessment coverage",

  // ─── Homepage: Platform ───────────────────────────────────────────
  "home.platform.heading": "Evidence in. Findings out. Reports ready.",
  "home.platform.0.title": "Organize Evidence",
  "home.platform.0.description": "Version and reuse files across assessments with full audit trails.",
  "home.platform.1.title": "Assess Against Frameworks",
  "home.platform.1.description": "Map evidence to controls for any framework.",
  "home.platform.2.title": "Surface Gaps",
  "home.platform.2.description": "Flag gaps and inconsistencies across your evidence set.",
  "home.platform.3.title": "Generate Findings",
  "home.platform.3.description": "Tie every finding to a control, evidence source, and severity rating.",
  "home.platform.4.title": "Collaborate in Context",
  "home.platform.4.description": "Request evidence, assign owners, and track to closure.",
  "home.platform.5.title": "Produce Reports",
  "home.platform.5.description": "Control breakdowns, summaries, and evidence packages \u2014 export-ready.",

  // ─── Homepage: Benefits ───────────────────────────────────────────
  "home.benefits.heading": "Why Teams Switch to TrustGuard",
  "home.benefits.0": "Cut review cycles from weeks to hours",
  "home.benefits.1": "Consistent methodology across every assessment",
  "home.benefits.2": "Full coverage across vendors, controls, and policies",
  "home.benefits.3": "Audit-ready reports without manual assembly",

  // ─── Homepage: Pilot Timeline ─────────────────────────────────────
  "home.pilotTimeline.heading": "See results in minutes",
  "home.pilotTimeline.0.label": "Upload",
  "home.pilotTimeline.0.description": "Import your evidence",
  "home.pilotTimeline.0.items.0": "Connect evidence sources",
  "home.pilotTimeline.0.items.1": "Import vendors and policies",
  "home.pilotTimeline.0.items.2": "Organize your portfolio",
  "home.pilotTimeline.1.label": "Assess",
  "home.pilotTimeline.1.description": "Frameworks evaluated in minutes",
  "home.pilotTimeline.1.items.0": "Map evidence to controls",
  "home.pilotTimeline.1.items.1": "Surface gaps automatically",
  "home.pilotTimeline.1.items.2": "Generate cited findings",
  "home.pilotTimeline.2.label": "Deliver",
  "home.pilotTimeline.2.description": "Audit-ready outputs",
  "home.pilotTimeline.2.items.0": "Export stakeholder reports",
  "home.pilotTimeline.2.items.1": "Track remediation to closure",
  "home.pilotTimeline.2.items.2": "Reassess and confirm fixes",

  // ─── Homepage: Mission ────────────────────────────────────────────
  "home.mission.paragraph1": "Built for scale. Precision and elegance in every finding. Surface what manual assessments can\u2019t.",
  "home.mission.paragraph2": "Continuous deep monitoring meets operator mentality\u2014built by practitioners who managed risk at Fortune 500 companies.",
  "home.mission.cta": "Learn more",

  // ─── Homepage: CTA Banner ─────────────────────────────────────────
  "home.cta.heading": "Deeper coverage.\nRicher findings.",
  "home.cta.button": "Request a demo",

  // ─── Company: Hero ────────────────────────────────────────────────
  "company.hero.heading": "Built by Practitioners,\nfor Practitioners",
  "company.hero.cta": "Request a demo",

  // ─── Company: Stats ───────────────────────────────────────────────
  "company.stats.heading": "Why we exist",
  "company.stats.0.value": "98%",
  "company.stats.0.label": "of orgs have a breached vendor relationship",
  "company.stats.1.value": "40+",
  "company.stats.1.label": "hours per vendor security assessment",
  "company.stats.2.value": "$4.5M+",
  "company.stats.2.label": "average cost of a third-party data breach",

  // ─── Company: Approach ────────────────────────────────────────────
  "company.approach.heading": "Our approach",
  "company.approach.0.title": "Every page, every claim",
  "company.approach.0.description": "Cross-references claims against evidence across every document. Surfaces what matters.",
  "company.approach.1.title": "Findings you can cite",
  "company.approach.1.description": "Every finding comes with evidence citations and direct links to source documentation. Know exactly why something is flagged.",
  "company.approach.2.title": "90% faster, more precise",
  "company.approach.2.description": "Process hundreds of documents in the time it takes to review one manually. Assessment speed scales with your portfolio.",
  "company.approach.3.title": "Practitioner-built",
  "company.approach.3.description": "Built by CISOs and risk managers who\u2019ve run thousands of assessments. Every feature exists because we needed it.",

  // ─── Company: Open Letter ─────────────────────────────────────────
  "company.letter.heading": "An open letter to CISOs,\nCROs, and Risk Professionals",
  "company.letter.paragraph1": "Over my career\u2014from leading cybersecurity at Barclays and Bank of America, to serving as the first Chief Information Security Officer at SAP\u2014I\u2019ve seen firsthand how trust is built, broken, and rebuilt in complex organizations.",
  "company.letter.paragraph2": "Today, companies grapple with sprawling supply chains and evolving cyber risks. Manual assessments are slow, siloed, and often outdated.",
  "company.letter.paragraph3": "TrustGuard is designed to change that: an AI-first platform that helps you continuously assess, collaborate, and close compliance gaps\u2014all within a single, interactive workflow.",
  "company.letter.paragraph4": "We built TrustGuard with two core principles in mind:",
  "company.letter.principle1.title": "Transparency at scale",
  "company.letter.principle1.description": "\u2014 from the dashboard to evidence sharing, nothing is hidden. You\u2019ll see compliance status clearly, at every vendor and control level.",
  "company.letter.principle2.title": "Actionable momentum",
  "company.letter.principle2.description": "\u2014 it\u2019s not enough to show risk, we help you move on it. With proactive triage, reminders, and AI-driven insights, progress becomes visible and measurable.",
  "company.letter.paragraph5": "That\u2019s why we built TrustGuard: to make trust operational and clear, not theoretical.",
  "company.letter.paragraph6": "If you\u2019re responsible for managing third-party risk, I invite you to explore how TrustGuard can support your mission. Together, we can turn compliance into confidence.",
  "company.letter.closing": "Sincerely,",
  "company.letter.authorName": "Elena Kvochko",
  "company.letter.authorRole": "Founder & CEO",

  // ─── Company: People ──────────────────────────────────────────────
  "company.people.heading": "Founder & Investors",
  "company.founder.name": "Elena Kvochko",
  "company.founder.role": "Founder & CEO",
  "company.founder.bio": "Building an AI-first platform to transform third-party risk. Previously CISO at SAP, held cybersecurity executive leadership roles at Bank of America and Barclays.",
  "company.investors.0.name": "Jess Le\u00e3o",
  "company.investors.0.role": "Decibel VC",
  "company.investors.0.bio": "Partner at Decibel investing in AI-native infrastructure. Previously at Maverick Ventures, led early investments including MosaicML. Former forward deployed engineer at Palantir.",
};
