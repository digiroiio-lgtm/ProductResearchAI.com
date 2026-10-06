import Link from "next/link";
import { pageOrder, pages } from "@/lib/pages";
import { DOMAIN_PAGE_PATH, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">{site.name}</p>
          <p className="muted">
            An independent educational resource about AI-powered product research. It explains
            methods, data and evaluation criteria for product decisions.
          </p>
          <p className="muted small">
            ProductResearchAI.com does not currently operate proprietary product research
            software, datasets or AI models. Articles are general information, not business,
            legal or investment advice.
          </p>
        </div>
        <nav aria-label="Guides">
          <p className="site-footer__title">Guides</p>
          <ul>
            {pageOrder.map((k) => (
              <li key={k}>
                <Link href={pages[k].path}>{k === "home" ? "AI Product Research Overview" : pages[k].navLabel}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Domain">
          <p className="site-footer__title">Domain</p>
          <ul>
            <li>
              <Link href={DOMAIN_PAGE_PATH}>Acquire ProductResearchAI.com</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container site-footer__legal small muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
