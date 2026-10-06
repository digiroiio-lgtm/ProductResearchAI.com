import Link from "next/link";
import { pageOrder, pages } from "@/lib/pages";
import { site } from "@/lib/site";

export function SiteHeader() {
  const links = pageOrder.filter((k) => k !== "home").map((k) => pages[k]);
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand__mark" aria-hidden="true">PR</span>
          <span className="brand__name">
            ProductResearch<span className="brand__ai">AI</span>
          </span>
        </Link>
        <nav className="nav nav--desktop" aria-label="Primary">
          <ul>
            {links.map((p) => (
              <li key={p.key}>
                <Link href={p.path}>{p.navLabel}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className="nav-mobile">
          <summary aria-label="Menu">
            <span className="nav-mobile__icon" aria-hidden="true" />
            <span>Menu</span>
          </summary>
          <nav aria-label="Mobile primary">
            <ul>
              {links.map((p) => (
                <li key={p.key}>
                  <Link href={p.path}>{p.navLabel}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
