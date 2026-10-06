import type { MetadataRoute } from "next";
import { pageOrder, pages } from "@/lib/pages";
import { absoluteUrl, site } from "@/lib/site";

// Only the six indexable pages. /domain is noindex and deliberately excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  return pageOrder.map((key) => ({
    url: absoluteUrl(pages[key].path),
    lastModified: new Date(site.dateModified),
    changeFrequency: key === "home" ? "weekly" : "monthly",
    priority: key === "home" ? 1 : 0.8,
  }));
}
