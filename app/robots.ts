import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// /domain is intentionally NOT disallowed: crawlers must be able to fetch it to see its noindex tag.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
