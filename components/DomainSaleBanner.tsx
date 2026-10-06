import Link from "next/link";
import { domainSaleHref } from "@/lib/site";

/**
 * Slim sitewide banner. Points to NEXT_PUBLIC_DOMAIN_SALE_URL when set, otherwise to /domain.
 */
export function DomainSaleBanner() {
  const { href, external } = domainSaleHref;
  const content = (
    <>
      <span className="banner__desktop">ProductResearchAI.com is available for acquisition</span>
      <span className="banner__mobile">This domain is for sale</span>
      <span className="banner__cta">
        <span className="banner__desktop">View Domain Details</span>
        <span aria-hidden="true"> →</span>
      </span>
    </>
  );
  return (
    <aside className="banner" aria-label="Domain for sale">
      {external ? (
        <a className="banner__link" href={href} target="_blank" rel="noopener noreferrer nofollow">
          {content}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <Link className="banner__link" href={href}>
          {content}
        </Link>
      )}
    </aside>
  );
}
