# ProductResearchAI.com

An independent, educational resource about **AI-powered product research**, built with Next.js (App Router, TypeScript) and fully statically generated.

The site does **not** claim to operate proprietary software, datasets, AI models, customers, revenue, integrations or case studies, and it must not be edited to imply otherwise. The domain is for sale (see `/domain`).

## Pages

| Route | Intent | Indexed |
| --- | --- | --- |
| `/` | Broad category: product research AI | yes |
| `/what-is-product-research` | Informational definition | yes |
| `/ai-product-research` | AI methodology | yes |
| `/product-research-tools` | Commercial investigation (features and evaluation criteria, no vendor rankings) | yes |
| `/product-research-process` | How-to framework (12 steps: Question → Data → Analysis → Decision) | yes |
| `/use-cases` | 12 use cases (Goal → Data Sources → AI-Assisted Analysis → Human Decision → Output) | yes |
| `/domain` | Domain acquisition page | **noindex, follow**, not in sitemap |

Also generated: `/sitemap.xml` (the six indexable pages only), `/robots.txt`, `/llms.txt`, and per-page Open Graph images at `/og/<page>.png`.

## Configuration

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for canonicals, sitemap, OG and JSON-LD (default `https://productresearchai.com`). |
| `NEXT_PUBLIC_DOMAIN_SALE_URL` | Where the sitewide `DomainSaleBanner` links. If unset or invalid, it links to `/domain`. |
| `NEXT_PUBLIC_DOMAIN_CONTACT_URL` | Target of "Make an Inquiry" on `/domain` (`https:` or `mailto:`). Falls back to the sale URL. If neither is set the button is disabled; no contact details are invented. |

These are inlined at build time, so rebuild after changing them.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run verify     # post-build SEO checks (run after `npm run build`)
npm run typecheck
```

`npm run verify` checks, for every indexable page: unique title and description (length bounds), canonical, Open Graph and Twitter tags, exactly one H1, no skipped heading levels, valid JSON-LD, and the home page's 40–80 word direct answer. It also checks that `/domain` is `noindex, follow` and absent from the sitemap.

## Structure

- `lib/pages.ts`: single registry of page titles, descriptions, H1s and intents (drives metadata, nav, sitemap, `llms.txt`, OG images).
- `lib/seo.ts`: metadata and JSON-LD builders. `lib/site.ts`: site config and sale/contact URL handling.
- `lib/content/`: the 12 process steps and 12 use cases as data.
- `components/`: `DomainSaleBanner`, header/footer, `PageHero` (the only H1 plus direct answer), `Section`, `DataTable`, `Faq`, `Sources`, etc.

## Content rules

- Cite a source for externally verifiable claims (see `components/Sources.tsx`); do not add statistics without one.
- No fabricated users, customers, datasets, pricing, vendor rankings or case studies. Examples are labelled illustrative.
- Bump `dateModified` in `lib/site.ts` when copy changes materially.
