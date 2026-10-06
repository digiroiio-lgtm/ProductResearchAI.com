import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";
import { pages, type PageKey } from "./pages";

export function ogImagePath(key: PageKey): string {
  return `/og/${key}.png`;
}

export function buildMetadata(key: PageKey): Metadata {
  const page = pages[key];
  const image = {
    url: ogImagePath(key),
    width: 1200,
    height: 630,
    alt: `${page.h1} | ${site.name}`,
  };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: page.path,
      title: page.title,
      description: page.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image.url],
    },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbsFor(key: PageKey): Crumb[] {
  if (key === "home") return [{ name: "Home", path: "/" }];
  return [
    { name: "Home", path: "/" },
    { name: pages[key].navLabel, path: pages[key].path },
  ];
}

export interface FaqItem {
  q: string;
  a: string;
}

/** Builds the JSON-LD graph for an indexable page. All data comes from visible page content. */
export function pageJsonLd(key: PageKey, faqs?: FaqItem[]) {
  const page = pages[key];
  const url = absoluteUrl(page.path);
  const crumbs = breadcrumbsFor(key);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl("/")}#website`,
      url: absoluteUrl("/"),
      name: site.name,
      description: site.tagline,
      inLanguage: "en-US",
    },
    {
      "@type": key === "home" ? "WebPage" : "Article",
      "@id": `${url}#page`,
      url,
      name: page.title,
      headline: page.h1,
      description: page.description,
      inLanguage: "en-US",
      datePublished: site.datePublished,
      dateModified: site.dateModified,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      publisher: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
      image: absoluteUrl(ogImagePath(key)),
      mainEntityOfPage: url,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: absoluteUrl(c.path),
      })),
    },
  ];
  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
