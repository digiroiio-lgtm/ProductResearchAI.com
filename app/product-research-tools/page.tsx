import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Callout } from "@/components/Callout";
import { DataTable } from "@/components/DataTable";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { Sources, SRC } from "@/components/Sources";
import { pages } from "@/lib/pages";
import { breadcrumbsFor, buildMetadata, pageJsonLd, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("productResearchTools");

const faqs: FaqItem[] = [
  {
    q: "What are product research tools?",
    a: "Product research tools are software products that help collect and analyze information about demand, competitors, customer reviews, pricing and trends so teams can evaluate product opportunities. They range from search trend tools to marketplace analytics and review analysis software.",
  },
  {
    q: "What features matter most in product research software?",
    a: "It depends on the business, but the most important are reliable and current data, coverage of the markets and marketplaces you sell in, review and competitor analysis, transparent pricing and exportable results. AI summaries are useful only if you can trace them to source data.",
  },
  {
    q: "How do I compare product research tools fairly?",
    a: "Define your use case first, list the questions the tool must answer, then test each candidate on the same product you already understand well. Compare data sources, freshness, coverage, transparency, export options, pricing and integrations using the same checklist.",
  },
  {
    q: "Are AI product research tools more accurate?",
    a: "Not automatically. AI features can speed up summarizing and pattern detection, but accuracy still depends on the underlying data and on how the AI is applied. Ask how outputs are generated and whether they link back to evidence.",
  },
  {
    q: "Does this site rank or recommend specific tools?",
    a: "No. This guide explains features and evaluation criteria and does not rank vendors or make claims about specific products. Check each vendor’s current documentation and pricing directly.",
  },
];

export default function Page() {
  const p = pages;
  return (
    <>
      <JsonLd data={pageJsonLd("productResearchTools", faqs)} />
      <div className="container">
        <Breadcrumbs crumbs={breadcrumbsFor("productResearchTools")} />
      </div>
      <PageHero
        eyebrow="Commercial investigation"
        title={p.productResearchTools.h1}
        answer="A product research tool should help answer concrete questions about demand, competitors, customer reviews, pricing and trends, using data you can verify. When evaluating product research software, compare data sources, freshness, coverage, transparency of AI features, export options, integrations, pricing and reliability against your own use case."
      />

      <Section
        id="what-should-a-product-research-tool-do"
        title="What Should a Product Research Tool Do?"
        short="A good tool turns raw market and customer data into evidence for a product decision, and shows where that evidence came from."
      >
        <p>
          Product research tools fall into a few broad categories: search and trend tools,
          marketplace and category analytics, competitor tracking, review and feedback analysis,
          and general AI or analytics assistants. Many products combine several. The table lists
          features you may see and what each should help you decide. Not every business needs every
          feature.
        </p>
        <DataTable
          caption="Product research tool features and what to check"
          columns={["Feature", "What it should help you decide", "What to check"]}
          rows={[
            ["Demand analysis", "Whether enough people want this type of product", "How demand is estimated and what it is based on"],
            ["Search-volume analysis", "How many people search for related terms", "Whether values are absolute estimates or relative; the source and region"],
            ["Competitor tracking", "How alternatives change over time", "What is tracked, how often and for which marketplaces"],
            ["Review mining", "What buyers repeatedly praise or dislike", "Review sources, volume limits and whether you can read the underlying reviews"],
            ["Sentiment analysis", "How customers feel about specific topics", "Whether sentiment is by topic and how mixed reviews are handled"],
            ["Pricing history", "How price points and discounts have moved", "Length of history and update frequency"],
            ["Trend detection", "Whether interest is rising, steady or seasonal", "Time range, granularity and handling of one-off spikes"],
            ["Category analysis", "How crowded and competitive a category is", "How categories are defined and how product counts are derived"],
            ["Keyword discovery", "Which terms and intents customers use", "Data source, geography and language coverage"],
            ["Customer pain-point extraction", "Which problems recur in feedback", "Whether themes link to example quotes you can verify"],
            ["Product feature comparison", "Where competitors differ and where gaps exist", "How features are extracted and how accurate that extraction is"],
            ["Opportunity scoring", "Which ideas deserve attention first", "The scoring method, whether weights are visible and adjustable"],
            ["Exports", "Whether you can use results elsewhere", "Formats, limits and whether raw data is included"],
            ["Collaboration", "How a team shares and reviews findings", "Shared workspaces, comments, permissions and audit history"],
            ["API and data integration", "Whether the tool connects to your stack", "Documented API, rate limits, supported integrations"],
            ["AI summaries", "A fast overview of long or large data", "Whether summaries cite sources and can be traced to the underlying data"],
          ]}
        />
      </Section>

      <Section
        id="how-to-evaluate-product-research-software"
        title="How Do You Evaluate Product Research Software?"
        short="Evaluate each tool on the same criteria: data sources, freshness, coverage, history, AI transparency, exportability, pricing, integrations and reliability."
        tone="alt"
      >
        <DataTable
          caption="Evaluation criteria for product research software"
          columns={["Criterion", "Question to ask", "Warning sign"]}
          rows={[
            ["Data sources", "Where does the data come from, and is it collected, licensed or estimated?", "Sources are not disclosed"],
            ["Freshness", "How often is data updated, and can you see the last update date?", "No update date, or long gaps"],
            ["Geographic coverage", "Which countries and languages are covered?", "Only partial coverage of the markets you sell in"],
            ["Marketplace coverage", "Which marketplaces, retailers and app stores are included?", "Your key channels are missing"],
            ["Historical data", "How far back does history go?", "Too short to see seasonality"],
            ["AI transparency", "Can you see how AI outputs were produced and trace them to source data?", "Confident conclusions with no way to verify them"],
            ["Exportability", "Can you export raw data and results in standard formats?", "Locked into the tool’s interface"],
            ["Pricing", "What does your usage level cost, and what limits apply?", "Unclear limits, or costs that scale unpredictably"],
            ["Integrations", "Does it connect to your spreadsheets, BI tools and workflow?", "No API or export path"],
            ["Reliability", "Is the service stable, supported and documented?", "Frequent errors, thin documentation or no support"],
          ]}
        />
        <p>
          Confirm pricing, limits and capabilities directly with the vendor. They change, and this
          guide does not publish or assume them.
        </p>
      </Section>

      <Section
        id="how-to-test-a-tool"
        title="How Can You Test a Product Research Tool Before Buying?"
        short="Run it on a product or category you already know well, and check whether its answers match what you know."
      >
        <ol>
          <li><strong>Write your questions first.</strong> For example: Is demand growing? Which complaints recur? What is the typical price band?</li>
          <li><strong>Pick a known benchmark.</strong> Use a product or category where you already understand the market.</li>
          <li><strong>Compare outputs with ground truth.</strong> Spot-check reviews, prices and trends manually.</li>
          <li><strong>Test an edge case.</strong> Try a niche or new category to see how it behaves with sparse data.</li>
          <li><strong>Check traceability.</strong> Confirm that each AI summary can be traced to underlying data.</li>
          <li><strong>Check the exit path.</strong> Make sure you can export your data if you leave.</li>
        </ol>
      </Section>

      <Section
        id="needs-by-business-model"
        title="Which Features Matter for Which Business Model?"
        short="Priorities differ: marketplace sellers lean on category and review data, while SaaS teams lean on feedback and competitor positioning."
        tone="alt"
      >
        <DataTable
          caption="Feature priorities by business model"
          columns={["Business model", "Features that often matter most", "Why"]}
          rows={[
            ["E-commerce and marketplace sellers", "Category analysis, review mining, pricing history, trend detection", "Product selection depends on competition, margins and review gaps"],
            ["DTC brands", "Review mining, sentiment analysis, trend detection, keyword discovery", "Differentiation and customer language drive positioning"],
            ["SaaS teams", "Pain-point extraction, competitor tracking, feature comparison, exports", "Roadmap decisions depend on customer feedback and alternatives"],
            ["Consumer product teams", "Review mining, feature comparison, pricing history", "Unmet needs and price points shape development"],
          ]}
        />
        <p>
          For worked examples by business type, see{" "}
          <Link href={p.useCases.path}>AI product research use cases</Link>.
        </p>
      </Section>

      <Section
        id="ai-features"
        title="What Should You Look for in AI-Powered Product Research Features?"
        short="Look for AI features that show their evidence, since AI summaries without sources are hard to trust."
      >
        <ul className="checklist">
          <li>Links from each summary or theme to the underlying reviews or data</li>
          <li>A clear statement of which data sources feed the AI</li>
          <li>Visible dates and limitations on the data</li>
          <li>Ways to correct, filter or exclude suspect data such as likely fake reviews</li>
          <li>Documentation of what the AI does and does not do</li>
        </ul>
        <p>
          Generative AI can state invented details with confidence, a risk NIST describes as
          confabulation.{" "}
          <a href={SRC.nist.url} rel="noopener noreferrer" target="_blank">
            See NIST AI 600-1
          </a>
          . Read about this and other risks in{" "}
          <Link href={p.aiProductResearch.path}>limitations of AI product research</Link>.
        </p>
        <p>
          Be careful with search volume in particular. Some sources report relative interest rather
          than absolute counts; Google Trends, for example, normalizes a sample of searches.{" "}
          <a href={SRC.trends.url} rel="noopener noreferrer" target="_blank">
            See the Google Trends FAQ
          </a>
          .
        </p>
      </Section>

      <Section
        id="no-rankings"
        title="Why This Page Does Not Rank Product Research Tools"
        short="This guide explains how to evaluate software; it does not rank vendors."
        tone="alt"
      >
        <Callout title="Independent and educational">
          <p>
            ProductResearchAI.com does not currently operate product research software, and this
            page makes no claims about the features, data or pricing of specific vendors. Use the
            criteria above to compare current options directly from each vendor.
          </p>
        </Callout>
        <p>
          A tool is only one part of the work. Pair it with a clear method, such as the{" "}
          <Link href={p.productResearchProcess.path}>product research process</Link>, and with
          human validation.
        </p>
      </Section>

      <Faq items={faqs} />

      <RelatedLinks keys={["aiProductResearch", "productResearchProcess", "useCases", "whatIsProductResearch"]} />

      <Sources items={[SRC.nist, SRC.trends]} />
    </>
  );
}
