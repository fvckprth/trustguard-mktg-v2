<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Learned User Preferences

- Figma-driven marketing pages: match layout, typography, and spacing first; homepage shell aligns to REMEDIATE (`yhdimZp3HHLZDtD1aTymmA`, hero node `305-691`); defer embedded illustration internals, marquee, and non-essential logos until later unless the user says otherwise.
- Primary hero and main marketing headlines: use sentence or title case—avoid all-caps unless the user asks for it.
- Prefer Tailwind-only styling on marketing components rather than Framer Motion.
- Homepage checklist items use plain Remix check icons (`@remixicon/react`) without circular wrappers.
- CTA band: keep generous vertical separation from the footer (user expects ~160px-class spacing on that block).
- When the user pastes Agentation viewport feedback, map each pin to the cited DOM/selectors and adjust gaps, padding, and line breaks accordingly.
- For SEO/Open Graph work, the user may want metadata and canonicals wired first and add a dedicated OG image asset later.
- When overhauling marketing copy, use Drata (`https://drata.com`) and Tiebreaker AI (`https://www.tiebreaker-ai.com`) as primary external references for tone, pacing, and structure.
- Marketing narrative should cover organizational compliance programs and internal audits alongside third-party/vendor risk—not TPRM alone.
- Avoid stacking near-duplicate benefits (especially multiple angles on centralizing vendor evidence or a single vendor risk record); consolidate into one clear claim per idea.
- Pilot and timeline copy: avoid granular day-by-day phases that imply fixed engineering durations (e.g. a set number of days to surface gaps).
- Avoid these phrases unless explicitly approved: "without ripping out your stack"; "Standardize your engineering team on the same tools and best practices."

## Learned Workspace Facts

- TrustGuard marketing site lives at `~/Projects/trustguard-mktg-v2` (Next.js 16, Tailwind 4, App Router).
- Canonical production URL is `https://trustguardai.com` (use for `metadataBase`, canonicals, sitemap, and JSON-LD).
- Product name is TrustGuard AI; Terms/Privacy name OpenAdmin, Inc. as the operator. Footer copyright uses the current year and TrustGuard AI Inc.
- Marketing routes include `/`, `/company`, `/careers`, `/request-demo`, `/terms`, and `/privacy`; `/playground` is internal/draft and should stay non-indexed.
- Primary logo asset is `public/assets/tg-logo.svg` (nav and footer).
- Design direction: warm light background `#FFFEF8`, foreground `#1F3D60`, `bg-surface` cards with rounded corners per existing sections. Primary typeface is Alliance No.2 Regular (Figma styling set 4); monospace is Berkeley Mono—both from `public/fonts/` via `next/font/local`.
- Footer LinkedIn URL is `https://www.linkedin.com/company/trustguardai/` (omit `?viewAsMember=true`); open external footer links in a new tab with `rel="noopener noreferrer"`.
- Request demo form builds a `mailto:` to `elena@trustguardai.com`.
- Marketing navigation omits a login link.
- Company story: emphasize founders and investors; omit a broad named-team section unless the user asks to restore it.

## Copy Style Guide

- **Voice:** Formal-neutral, active voice, solution-first. Third-person for enterprise framing ("teams," "organizations").
- **Headlines:** 2-7 words, title case, noun phrases or verb-led.
- **Descriptions:** 1-2 sentences max, 10-20 words per sentence, cap 35 words per block.
- **Sentence structure:** Action > Object > Outcome. One idea per sentence.
- **Signature patterns:** Tricolon for flow headings ("Verb X. Verb Y. Verb Z."), em-dash pivots, "audit-ready" as the coined compound adjective.
- **Framework mentions:** Full list at most once on homepage (Feature Showcase). Elsewhere say "any framework" or "your chosen frameworks."
- **Forbidden:** Filler adverbs (easily, quickly, seamlessly, dramatically), filler adjectives (comprehensive, complete, robust, powerful), "real" more than once per paragraph, paragraphs over 2 sentences in marketing sections.
- **CTA labels:** "Request a demo" (nav/hero) or "Request Demo" (buttons). Never "Get started today."
