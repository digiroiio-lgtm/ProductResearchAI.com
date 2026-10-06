import type { Metadata } from "next";
import Link from "next/link";
import { pillarPages } from "@/lib/pages";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | ProductResearchAI.com" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container hero__inner prose">
        <h1>Page not found</h1>
        <p>The page you requested does not exist. These guides may help:</p>
        <ul>
          {pillarPages.map((p) => (
            <li key={p.key}>
              <Link href={p.path}>{p.navLabel}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
