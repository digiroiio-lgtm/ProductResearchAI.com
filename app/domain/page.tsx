import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { DOMAIN_PAGE_PATH, inquiryHref, site } from "@/lib/site";

const title = "Acquire ProductResearchAI.com | Domain Details";
const description =
  "ProductResearchAI.com is available for acquisition. Review what the domain name and associated website asset include and how to make an inquiry.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: DOMAIN_PAGE_PATH },
  robots: { index: false, follow: true },
};

const categories = [
  "AI product research",
  "Product discovery",
  "E-commerce intelligence",
  "Consumer intelligence",
  "Competitive intelligence",
  "Product analytics",
  "Marketplace research",
];

export default function DomainPage() {
  const external = inquiryHref?.startsWith("http") ?? false;
  return (
    <>
      <PageHero
        eyebrow="Domain acquisition"
        title="Acquire ProductResearchAI.com"
        answerLabel="Summary"
        answer="ProductResearchAI.com is a premium, category-defining domain name for businesses building in AI-powered product research. A buyer would acquire the domain name and the associated website asset, not an operating software company."
        actions={
          inquiryHref ? (
            <a
              className="button"
              href={inquiryHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
            >
              Make an Inquiry
            </a>
          ) : (
            <span className="button" role="link" aria-disabled="true">
              Make an Inquiry
            </span>
          )
        }
      />

      <Section id="why" title="Why This Domain Fits the Category">
        <p>
          The name states the category plainly: <strong>product research</strong> plus{" "}
          <strong>AI</strong>. It is easy to say, spell and remember, and it describes the work
          buyers search for rather than a brand invented around it.
        </p>
        <p>The domain suits businesses building in areas such as:</p>
        <ul className="checklist">
          {categories.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      <Section id="what-is-included" title="What a Buyer Would Acquire" tone="alt">
        <p>
          A buyer would acquire the <strong>ProductResearchAI.com domain name</strong> and the{" "}
          <strong>associated website asset</strong>: the informational site published at this
          address, including its content and structure, as defined in a purchase agreement.
        </p>
        <p>
          ProductResearchAI.com is <strong>not an existing operating SaaS company</strong>. It
          does not currently provide proprietary software, datasets, AI models, customers or
          revenue. Any business, technology or customer relationship would be a matter for
          separate agreement.
        </p>
      </Section>

      <Section id="inquire" title="Make an Inquiry">
        <p>
          Use the button below to start a conversation about acquiring {site.name}.
        </p>
        <p>
          {inquiryHref ? (
            <a
              className="button"
              href={inquiryHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
            >
              Make an Inquiry
            </a>
          ) : (
            <>
              <span className="button" role="link" aria-disabled="true">
                Make an Inquiry
              </span>
              <span className="muted small">
                {" "}
                The inquiry link is not published yet. Please check back soon.
              </span>
            </>
          )}
        </p>
      </Section>
    </>
  );
}
