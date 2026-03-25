<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Learned User Preferences

- Figma-driven marketing pages: match layout, typography, and spacing first; defer embedded illustration internals, marquee, and non-essential logos until later unless the user says otherwise.
- Prefer Tailwind-only styling on marketing components rather than Framer Motion.
- Homepage checklist items use plain Remix check icons (`@remixicon/react`) without circular wrappers.
- CTA band: keep generous vertical separation from the footer (user expects ~160px-class spacing on that block).
- When the user pastes Agentation viewport feedback, map each pin to the cited DOM/selectors and adjust gaps, padding, and line breaks accordingly.
- For SEO/Open Graph work, the user may want metadata and canonicals wired first and add a dedicated OG image asset later.

## Learned Workspace Facts

- TrustGuard marketing site lives at `~/Projects/trustguard-mktg-v2` (Next.js 16, Tailwind 4, App Router).
- Canonical production URL is `https://trustguardai.com` (use for `metadataBase`, canonicals, sitemap, and JSON-LD).
- Legal entity in site copy is OpenAdmin, Inc.; the product is TrustGuard AI.
- Marketing routes include `/`, `/company`, `/careers`, `/request-demo`, `/terms`, and `/privacy`; `/playground` is internal/draft and should stay non-indexed.
- Primary logo asset is `public/assets/tg-logo.svg` (nav and footer).
- Design direction: warm light background `#FFFEF8`, foreground `#1F3D60`, FK Grotesk via `next/font/local`, `bg-surface` cards with rounded corners per existing sections.
- Footer LinkedIn URL is `https://www.linkedin.com/company/trustguardai/` (omit `?viewAsMember=true`); open external footer links in a new tab with `rel="noopener noreferrer"`.
- Request demo form builds a `mailto:` to `elena@trustguardai.com`.
