const DEFAULT_SITE_URL = "https://productresearchai.com";

function cleanOrigin(value: string | undefined): string {
  const raw = (value ?? "").trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return DEFAULT_SITE_URL;
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const site = {
  name: "ProductResearchAI.com",
  shortName: "ProductResearchAI",
  tagline: "AI-powered product research, explained",
  url: cleanOrigin(process.env.NEXT_PUBLIC_SITE_URL),
  locale: "en_US",
  /** ISO date of the last substantive content update. Bump when copy changes. */
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
} as const;

/** Accepts only absolute http(s) URLs, plus mailto: when `allowMailto` is set. */
function cleanExternalUrl(value: string | undefined, allowMailto = false): string | null {
  const raw = (value ?? "").trim();
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol === "https:" || url.protocol === "http:") return url.toString();
    if (allowMailto && url.protocol === "mailto:") return url.toString();
    return null;
  } catch {
    return null;
  }
}

export const DOMAIN_PAGE_PATH = "/domain";

const saleUrl = cleanExternalUrl(process.env.NEXT_PUBLIC_DOMAIN_SALE_URL);
const contactUrl = cleanExternalUrl(process.env.NEXT_PUBLIC_DOMAIN_CONTACT_URL, true);

/** Where the sitewide sale banner points: the configured sale URL, otherwise /domain. */
export const domainSaleHref: { href: string; external: boolean } = saleUrl
  ? { href: saleUrl, external: true }
  : { href: DOMAIN_PAGE_PATH, external: false };

/** Target for the "Make an Inquiry" button. Null when nothing is configured. */
export const inquiryHref: string | null = contactUrl ?? saleUrl;

export function absoluteUrl(path: string): string {
  return path === "/" ? site.url : `${site.url}${path}`;
}
