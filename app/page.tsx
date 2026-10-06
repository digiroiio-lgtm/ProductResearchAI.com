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
import { pages } from "@/lib/pages";
import { buildMetadata, pageJsonLd, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("home");

const faqs: FaqItem[] = [
  {
    q: "What is AI product research?",
    a: "AI product research is the use of machine learning, natural language processing and related data analysis methods to study customers, competitors, demand, reviews, pricing and product gaps. It helps teams process large amounts of information faster, while people still validate the findings and make the product decision.",
  },
  {
    q: "Can AI tell me which product will succeed?",
    a: "No. AI can surface patterns, demand signals and unmet needs, but it cannot guarantee that a product will sell. Results depend on data quality, the market and execution, so AI output should be treated as a set of hypotheses to test.",
  },
  {
    q: "Is AI product research only for e-commerce?",
    a: "No. E-commerce and marketplace sellers use it heavily, but the same methods apply to DTC brands, SaaS products, consumer goods and new product development. The data sources differ, while the questions about customers, competitors, demand and pricing stay similar.",
  },
  {
    q: "What data does AI product research use?",
    a: "Common inputs include customer reviews, search and trend data, competitor product pages, pricing history, support tickets, survey responses and category sales estimates. The quality, freshness and coverage of this data limit the quality of any conclusion.",
  },
  {
    q: "How is product research different from market research?",
    a: "Market research studies a whole market, such as its size, segments and trends. Product research focuses on a specific product or product idea: who needs it, how competing products perform, what customers complain about and whether the economics work.",
  },
  {
    q: "Does AI replace human product researchers?",
    a: "No. AI automates collection, summarization and pattern detection. Humans define the question, judge whether the data is reliable, weigh strategy and risk, and decide what to build or sell.",
  },
];

export default function HomePage() {
  const p = pages;
  return (
    <>
      <JsonLd data={pageJsonLd("home", faqs)} />
      <PageHero
        eyebrow="AI-powered product research"
        title={p.home.h1}
        answer="AI product research uses machine learning and language models to collect, organize and analyze signals about customers, competitors, demand, reviews and pricing, so teams can evaluate product ideas faster. It speeds up pattern detection across large data sets, but it does not guarantee a winning product. People still need to check the data and make the final decision."
        actions={
          <>
            <Link className="button" href={p.aiProductResearch.path}>
              How AI product research works
            </Link>
            <Link className="button button--ghost" href={p.productResearchProcess.path}>
              See the 12-step process
            </Link>
          </>
        }
      />

      <Section
        id="what-is-product-research"
        title="What Is Product Research?"
        short="Product research is the process of gathering and analyzing evidence about customers, competitors, demand and pricing to decide whether, and how, to build or sell a product."
      >
        <p>
          It connects several kinds of work: <strong>customer research</strong> to understand
          problems, <strong>competitor research</strong> to see what already exists,{" "}
          <strong>market demand</strong> analysis to size interest, <strong>pricing analysis</strong>{" "}
          to test the economics, and <strong>review analysis</strong> to learn what buyers praise
          or dislike. Together they support <strong>product discovery</strong> before launch and{" "}
          <strong>product validation</strong> once an idea takes shape.
        </p>
        <DataTable
          caption="What product research connects to"
          columns={["Related activity", "Role in product research"]}
          rows={[
            ["Customer research", "Identifies who the buyer is and which problems matter to them."],
            ["Competitor research", "Maps existing products, positioning, features and weaknesses."],
            ["Market demand", "Estimates whether enough people want a solution, and whether interest is growing."],
            ["Pricing analysis", "Shows what buyers pay today and whether margins can work."],
            ["Review analysis", "Turns buyer feedback into recurring praise, complaints and unmet needs."],
            ["Product discovery", "Generates and shapes product ideas using research findings."],
            ["Product validation", "Tests whether a specific idea earns real demand before heavy investment."],
          ]}
        />
        <p>
          For a full definition, examples and comparisons, read{" "}
          <Link href={p.whatIsProductResearch.path}>What Is Product Research?</Link>
        </p>
      </Section>

      <Section
        id="how-ai-changes-product-research"
        title="How Does AI Change Product Research?"
        short="AI makes it practical to analyze far more reviews, listings and search data than a person could read, and to find patterns in them quickly."
        tone="alt"
      >
        <p>
          Traditional research often relies on a handful of interviews, a spreadsheet and manual
          browsing. AI-assisted research adds <strong>natural language processing</strong> to read
          thousands of reviews, <strong>data analysis</strong> to compare products and prices at
          scale, and <strong>pattern detection</strong> to group similar complaints or feature
          requests. The practical result is faster <strong>opportunity discovery</strong>: a ranked
          list of themes and hypotheses that people can then test.
        </p>
        <p>
          AI does not remove the need for judgment. The{" "}
          <Link href={p.aiProductResearch.path}>AI product research guide</Link> explains what AI
          automates well and what still needs a human.
        </p>
      </Section>

      <Section
        id="what-can-ai-analyze"
        title="What Can AI Analyze in Product Research?"
        short="AI can analyze any text or numeric signal that describes customers, competitors or the market, as long as the data is available and reliable."
      >
        <DataTable
          caption="Signals AI can help analyze"
          columns={["Signal", "Example data", "AI-assisted task"]}
          rows={[
            ["Customer reviews", "Marketplace and app reviews, ratings", "Theme clustering, sentiment analysis, review mining"],
            ["Search demand", "Keyword and trend data", "Keyword grouping, seasonality and trend detection"],
            ["Competitors", "Product pages, feature lists, positioning", "Feature extraction, side-by-side comparison, summarization"],
            ["Pricing", "Price points, discounts, price history", "Price-band analysis, outlier detection"],
            ["Customer feedback", "Support tickets, surveys, interview notes", "Summarization, tagging, pain-point extraction"],
            ["Market structure", "Category listings, brand counts", "Segmentation, product gap detection"],
          ]}
        />
      </Section>

      <Section
        id="product-research-workflow"
        title="What Does a Product Research Workflow Look Like?"
        short="A good workflow moves from a defined customer and problem, through demand, competitor, review and pricing analysis, to a documented decision."
        tone="alt"
      >
        <ol>
          <li><strong>Define the customer and problem.</strong> Decide who the research is for.</li>
          <li><strong>Estimate demand.</strong> Check search behavior and category interest.</li>
          <li><strong>Map competitors.</strong> List alternatives, features and positioning.</li>
          <li><strong>Mine reviews.</strong> Identify repeated praise, complaints and gaps.</li>
          <li><strong>Compare pricing and economics.</strong> Check whether margins can work.</li>
          <li><strong>Validate and decide.</strong> Test demand, then record a go, change or stop decision.</li>
        </ol>
        <p>
          The complete method, with the question, data, analysis and decision for each step, is in
          the <Link href={p.productResearchProcess.path}>product research process</Link>.
        </p>
      </Section>

      <Section
        id="key-use-cases"
        title="Key Use Cases for AI Product Research"
        short="The most common uses are e-commerce and marketplace product selection, review mining, competitor analysis, pricing research and new product development."
      >
        <ul>
          <li>E-commerce and Amazon product research</li>
          <li>DTC and SaaS product research</li>
          <li>Customer review mining and pain-point discovery</li>
          <li>Competitor and pricing analysis</li>
          <li>Market gap discovery, trend research and product validation</li>
        </ul>
        <p>
          Each is broken into goal, data sources, AI-assisted analysis, human decision and output
          on the <Link href={p.useCases.path}>use cases page</Link>.
        </p>
      </Section>

      <Section
        id="product-research-by-business-model"
        title="How Does Product Research Differ by Business Model?"
        short="The questions are similar across business models, but the data sources and the definition of success change."
        tone="alt"
      >
        <DataTable
          caption="Product research focus by business model"
          columns={["Business model", "Typical focus", "Common data"]}
          rows={[
            ["E-commerce", "Demand, competition, margin and supplier feasibility", "Search trends, competitor listings, reviews, pricing"],
            ["Amazon and marketplaces", "Category competition, review gaps, listing quality", "Marketplace listings, ratings, review text, price history"],
            ["DTC brands", "Differentiation, brand story, repeat purchase potential", "Reviews, social conversation, survey data, customer feedback"],
            ["SaaS", "Problem severity, alternatives, willingness to pay, feature gaps", "Customer interviews, support tickets, competitor pricing pages, app reviews"],
            ["Consumer products", "Unmet needs, usage context, retail price points", "Reviews, retail pricing, category trends, usability feedback"],
          ]}
        />
      </Section>

      <Section
        id="ai-vs-traditional-product-research"
        title="AI vs Traditional Product Research"
        short="AI-assisted research is faster and broader; traditional research is deeper and better at explaining why customers behave as they do. Strong teams combine both."
      >
        <DataTable
          caption="AI-assisted and traditional product research compared"
          columns={["Dimension", "Traditional research", "AI-assisted research"]}
          rows={[
            ["Speed", "Slower; depends on manual collection and reading", "Faster collection, summarization and pattern detection"],
            ["Scale", "Limited by team time; small samples", "Can process thousands of reviews or listings"],
            ["Depth of insight", "Strong on motivation and context (interviews, observation)", "Strong on patterns; weaker on motivation unless paired with qualitative work"],
            ["Consistency", "Varies by researcher", "Repeatable when prompts and sources are documented"],
            ["Main risk", "Small samples and personal bias", "Bad source data, confabulated output and false correlations"],
            ["Best use", "Understanding why customers behave as they do", "Finding where to look and what to test first"],
          ]}
        />
      </Section>

      <Section
        id="what-good-product-research-should-validate"
        title="What Should Good Product Research Validate?"
        short="Good product research should show that a real customer has a real problem, that demand is large enough, that the product can be different, and that the economics work."
        tone="alt"
      >
        <ul className="checklist">
          <li><strong>Customer problem:</strong> the problem is specific, frequent and painful enough to pay to solve.</li>
          <li><strong>Demand:</strong> there is measurable and ideally steady interest, not a short spike.</li>
          <li><strong>Competitive gap:</strong> existing products leave a gap you can credibly fill.</li>
          <li><strong>Pricing:</strong> customers accept a price that leaves a workable margin.</li>
          <li><strong>Differentiation:</strong> there is a clear reason to choose this product over alternatives.</li>
          <li><strong>Evidence of fit:</strong> early signals, such as sign-ups or pre-orders, show real willingness to buy.</li>
        </ul>
        <p>
          Product/market fit, often defined as being in a good market with a product that can
          satisfy that market, is the standard these checks aim toward.{" "}
          <a href={SRC.andreessen.url} rel="noopener noreferrer" target="_blank">
            Source: Marc Andreessen
          </a>
          .
        </p>
      </Section>

      <Section
        id="risks-and-limitations"
        title="What Are the Risks and Limitations of AI Product Research?"
        short="AI output can be wrong, outdated or biased, so it needs verification before anyone commits money to a product."
      >
        <Sub title="Data and model risks">
          <ul>
            <li><strong>Bad source data:</strong> incomplete, biased or manipulated data produces misleading conclusions.</li>
            <li><strong>Hallucinations:</strong> generative AI can state invented facts confidently. The NIST generative AI profile calls this “confabulation.”</li>
            <li><strong>False correlations:</strong> patterns in data do not always reflect cause and effect.</li>
            <li><strong>Outdated information:</strong> markets, prices and competitors change faster than many data sets.</li>
          </ul>
        </Sub>
        <Sub title="Market risks">
          <ul>
            <li><strong>Survivorship bias:</strong> looking only at products that succeeded hides the ones that failed for the same reasons.</li>
            <li><strong>Marketplace manipulation:</strong> fake or incentivized reviews and inflated rankings distort the signals AI reads. In the U.S., the FTC’s consumer reviews rule restricts fake reviews, but manipulated signals can still appear.</li>
          </ul>
        </Sub>
        <Callout title="Treat AI output as a hypothesis" variant="warning">
          <p>
            AI does not identify guaranteed winning products. Verify important findings against
            primary sources and test demand with real customers before investing.
          </p>
        </Callout>
        <p>
          See <Link href={p.aiProductResearch.path}>limitations of AI product research</Link> for
          more detail, and{" "}
          <Link href={p.productResearchTools.path}>how to evaluate product research tools</Link>{" "}
          if you are comparing software.
        </p>
      </Section>

      <Faq items={faqs} />

      <RelatedLinks
        id="guides"
        title="Explore the Product Research Guides"
        keys={[
          "whatIsProductResearch",
          "aiProductResearch",
          "productResearchTools",
          "productResearchProcess",
          "useCases",
        ]}
      />

      <Sources items={[SRC.nist, SRC.ftc, SRC.andreessen]} />
    </>
  );
}
