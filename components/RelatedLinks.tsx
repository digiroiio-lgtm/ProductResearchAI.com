import Link from "next/link";
import { pages, type PageKey } from "@/lib/pages";
import { Section } from "./Section";

/** Internal links to other pillar pages with one-line descriptions. */
export function RelatedLinks({
  keys,
  title = "Continue Exploring",
  id = "related",
}: {
  keys: PageKey[];
  title?: string;
  id?: string;
}) {
  return (
    <Section id={id} title={title} tone="alt">
      <ul className="cards">
        {keys.map((k) => (
          <li key={k}>
            <Link href={pages[k].path} className="card">
              <span className="card__title">{pages[k].navLabel === "Home" ? "AI Product Research Overview" : pages[k].navLabel}</span>
              <span className="card__text">{pages[k].summary}</span>
              <span className="card__go" aria-hidden="true">
                Read the guide →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
