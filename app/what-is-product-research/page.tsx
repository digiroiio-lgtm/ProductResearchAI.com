import Link from "next/link";
import type { Metadata } from "next";
import { Callout } from "@/components/Callout";
import { DataTable } from "@/components/DataTable";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section, Sub } from "@/components/Section";
import { Sources, SRC } from "@/components/Sources";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pages } from "@/lib/pages";
import { breadcrumbsFor, buildMetadata, pageJsonLd, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("whatIsProductResearch");

const faqs: FaqItem[] = [
  {
    q: "What is product research in simple terms?",
    a: "Product research is the work of finding out whether people want a product, what they already use instead, what they would pay and how a new product could be better. It happens before launch to reduce risk and continues after launch to guide improvements.",
  },
  {
    q: "What are the main types of product research?",
    a: "The main types are customer research, competitor research, market demand analysis, pricing analysis and review analysis. Teams usually combine several of them rather than relying on one method.",
  },
  {
    q: "When should product research be done?",
    a: "Before committing to build or source a product, and again regularly after launch. Markets, competitors and customer expectations change, so research is an ongoing practice rather than a one-time task.",
  },
  {
    q: "Is product research the same as market research?",
    a: "No. Market research looks at an entire market, including its size, segments and trends. Product research focuses on a specific product or idea and the customers, competitors and economics around it. Market research is often one input to product research.",
  },
  {
    q: "Can small businesses do product research without a big budget?",
    a: "Yes. Customer conversations, public reviews, search trend data, competitor product pages and simple pricing comparisons cost little. Paid tools can speed the work up but are not required to start.",
  },
];

export default function Page() {
  const p = pages;
  return (
    <>
      <JsonLd data={pageJsonLd("whatIsProductResearch", faqs)} />
      <div className="container">
        <Breadcrumbs crumbs={breadcrumbsFor("whatIsProductResearch")} />
      </div>
      <PageHero
        eyebrow="Definition and methods"
        title={p.whatIsProductResearch.h1}
        answer="Product research is the process of gathering and analyzing evidence about customers, competitors, market demand, pricing and reviews to decide whether a product should exist and how it should be positioned. Businesses do it before launch to reduce risk, and after launch to keep improving the product."
      />

      <Section
        id="definition"
        title="What Is Product Research? A Definition"
        short="Product research is evidence gathering about a specific product opportunity."
      >
        <p>
          Product research answers practical questions: <em>Who needs this? What do they use now?
          Why is it not good enough? How much will they pay? Can we make something meaningfully
          better and still earn a margin?</em> It draws on <strong>customer research</strong>,{" "}
          <strong>competitor research</strong>, <strong>market demand</strong> data,{" "}
          <strong>pricing analysis</strong> and <strong>review analysis</strong>, and it feeds{" "}
          <strong>product discovery</strong> and <strong>product validation</strong>.
        </p>
        <p>
          The term is used in several settings. E-commerce sellers use it to choose what to sell.
          Software teams use it to decide which features to build. Consumer brands use it to find
          unmet needs. The methods overlap even when the data differs.
        </p>
      </Section>

      <Section
        id="why-is-product-research-important"
        title="Why Is Product Research Important?"
        short="It lowers the risk of building or stocking something nobody wants, and it focuses limited time and money on the best opportunities."
        tone="alt"
      >
        <p>
          Building a product is expensive and slow to reverse. Research gives a team evidence
          before that commitment. It helps to:
        </p>
        <ul className="checklist">
          <li>confirm that a customer problem is real, frequent and costly enough to solve;</li>
          <li>see whether <strong>market demand</strong> is large enough and stable;</li>
          <li>understand the <strong>competitive landscape</strong> and where it is crowded or thin;</li>
          <li>set a defensible price and check <strong>margins</strong> early;</li>
          <li>choose features and messaging that address what buyers actually say they want;</li>
          <li>decide when to stop, which is as valuable as deciding when to proceed.</li>
        </ul>
        <p>
          <a href={SRC.andreessen.url} rel="noopener noreferrer" target="_blank">Marc Andreessen</a> frames the underlying goal as product/market fit: being in a good market with
          a product that can satisfy that market. Research is how teams test whether they are
          close to that condition.
        </p>
      </Section>

      <Section
        id="what-does-product-research-include"
        title="What Does Product Research Include?"
        short="Product research usually includes customer problems, market demand, the competitive landscape, pricing, reviews, differentiation and signals of product-market fit."
      >
        <DataTable
          caption="Components of product research"
          columns={["Component", "Question it answers", "Typical evidence"]}
          rows={[
            ["Customer problems", "Who has the problem and how painful is it?", "Interviews, surveys, support tickets, forum threads"],
            ["Market demand", "Is interest large enough and is it growing or fading?", "Search and trend data, category sales estimates, waitlist sign-ups"],
            ["Competitive landscape", "What alternatives exist and how are they positioned?", "Competitor product pages, feature lists, market maps"],
            ["Pricing", "What do customers pay and what margin is possible?", "Competitor price points, discount patterns, cost estimates"],
            ["Reviews", "What do buyers praise, and what do they complain about?", "Marketplace, app-store and retailer reviews"],
            ["Product differentiation", "Why would someone choose this over alternatives?", "Feature gap analysis, positioning statements"],
            ["Product-market fit signals", "Do real customers show they want it?", "Pre-orders, retention, repeat purchase, referrals"],
          ]}
        />
        <Sub title="What data is used in product research?">
          <p>
            Data falls into two groups. <strong>Primary data</strong> is collected directly from
            customers, such as interviews, surveys and test sales. <strong>Secondary data</strong>{" "}
            already exists, such as public reviews, search trends, competitor listings and
            industry reports. Strong research combines both, because secondary data shows what
            happened at scale while primary data explains why.
          </p>
        </Sub>
      </Section>

      <Section
        id="what-is-the-product-research-process"
        title="What Is the Product Research Process?"
        short="The process moves from defining the customer and problem, through demand, competitor, review and pricing analysis, to validation and a documented decision."
        tone="alt"
      >
        <ol>
          <li>Define the target customer and the problem or need.</li>
          <li>Estimate market demand and analyze search behavior.</li>
          <li>Map competitors and analyze customer reviews.</li>
          <li>Identify feature gaps, compare pricing and estimate unit economics.</li>
          <li>Evaluate differentiation and validate demand.</li>
          <li>Make and record the product decision.</li>
        </ol>
        <p>
          Each step is expanded into a question, data, analysis and decision in the{" "}
          <Link href={p.productResearchProcess.path}>step-by-step product research process</Link>.
        </p>
      </Section>

      <Section
        id="before-and-after-launch"
        title="Product Research Before Launch and After Launch"
        short="Research before launch decides whether to build; research after launch decides what to improve."
      >
        <DataTable
          caption="Pre-launch and post-launch product research"
          columns={["", "Before launch", "After launch"]}
          rows={[
            ["Main goal", "Decide whether and what to build or sell", "Improve, reprice or reposition what exists"],
            ["Key questions", "Is there demand? Who are the alternatives? Can we differentiate?", "Why do customers stay or leave? Which features matter? How are competitors changing?"],
            ["Typical data", "Search trends, competitor listings, reviews of alternatives, interviews", "Own reviews and ratings, usage and retention data, support tickets, competitor changes"],
            ["Typical output", "Go, change or stop decision", "Prioritized improvements and updated positioning"],
          ]}
        />
      </Section>

      <Section
        id="product-opportunity-identification"
        title="How Does Product Research Identify Product Opportunities?"
        short="An opportunity appears where demand is real, existing solutions leave a visible gap, and the economics still work."
        tone="alt"
      >
        <p>
          <strong>Product opportunity research</strong> looks for three things in the same place: a
          customer problem that comes up repeatedly, evidence of demand, and a weakness in current
          products such as repeated complaints, missing features or a mismatch between price and
          quality. When all three line up, the idea becomes a hypothesis worth validating.
        </p>
        <Sub title="Product-market fit signals">
          <p>
            Signals that an idea is close to fit include customers buying without heavy
            persuasion, strong repeat purchase or retention, and referrals. Weak signals include
            polite interest in interviews that never turns into purchases or sign-ups.
          </p>
        </Sub>
      </Section>

      <Section
        id="product-research-vs-market-research"
        title="Product Research vs Market Research"
        short="Market research studies the market; product research studies a specific product within it."
      >
        <DataTable
          caption="Product research compared with market research"
          columns={["", "Product research", "Market research"]}
          rows={[
            ["Scope", "One product, feature or idea", "An entire market, segment or industry"],
            ["Central question", "Should we build or sell this, and how?", "How large and attractive is this market?"],
            ["Typical inputs", "Reviews, competitor products, pricing, customer problems", "Market size estimates, segmentation, industry trends, demographics"],
            ["Typical output", "Product decision and positioning", "Market sizing and segment priorities"],
            ["Relationship", "Uses market research as one input", "Provides context for product decisions"],
          ]}
        />
      </Section>

      <Section
        id="product-research-vs-product-discovery"
        title="Product Research vs Product Discovery"
        short="Product research gathers evidence; product discovery uses evidence, plus experiments, to decide what is worth building."
        tone="alt"
      >
        <DataTable
          caption="Product research compared with product discovery"
          columns={["", "Product research", "Product discovery"]}
          rows={[
            ["Focus", "Understanding customers, competitors, demand and pricing", "Finding and testing solutions worth building"],
            ["Method", "Data gathering and analysis", "Prototypes, experiments and validation with users"],
            ["Question", "What is true about the market and customers?", "Which solution should we build, and does it work?"],
            ["Relationship", "Informs discovery with evidence", "Applies research and tests ideas in practice"],
          ]}
        />
        <p>
          In practice the two overlap and feed each other. AI mostly accelerates the research side,
          as described in <Link href={p.aiProductResearch.path}>AI product research</Link>.
        </p>
      </Section>

      <Section
        id="product-research-examples"
        title="Product Research Examples"
        short="These are illustrative scenarios, not real case studies. They show how the same questions apply across business types."
      >
        <Sub title="Example 1: A kitchen product for an online store">
          <p>
            A seller considers a compact food storage container. They check search trends for
            steady interest, list competing products and prices, and read negative reviews. If
            many reviews cite leaking lids, the seller has a specific hypothesis: a better seal
            could differentiate the product. Next they check that the unit cost leaves a margin at
            the market price.
          </p>
        </Sub>
        <Sub title="Example 2: A feature for a software product">
          <p>
            A SaaS team debating a reporting feature reviews support tickets, competitor pricing
            pages and customer interviews. If several customers describe the same manual workaround,
            the team has evidence of a real need and can test willingness to pay with a prototype.
          </p>
        </Sub>
        <Sub title="Example 3: A direct-to-consumer skincare line">
          <p>
            A brand studies reviews of existing products and finds repeated mentions of
            irritation from fragrance. It tests a fragrance-free positioning with a landing page
            and a small pre-order campaign before committing to a production run.
          </p>
        </Sub>
        <Callout title="Where AI fits" variant="note">
          <p>
            In each example, AI can speed up reading reviews, grouping complaints and comparing
            competitor features. A person still decides whether the finding is a real opportunity.
            See <Link href={p.useCases.path}>AI product research use cases</Link> for more.
          </p>
        </Callout>
      </Section>

      <Faq items={faqs} />

      <RelatedLinks keys={["productResearchProcess", "aiProductResearch", "productResearchTools", "useCases"]} />

      <Sources items={[SRC.andreessen]} />
    </>
  );
}
