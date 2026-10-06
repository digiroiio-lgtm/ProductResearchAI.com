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
import { processSteps } from "@/lib/content/process-steps";
import { pages } from "@/lib/pages";
import { breadcrumbsFor, buildMetadata, pageJsonLd, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("productResearchProcess");

const faqs: FaqItem[] = [
  {
    q: "How do you do product research?",
    a: "Define the target customer and problem, estimate demand, analyze search behavior, map competitors, analyze reviews, identify feature gaps, compare pricing, estimate unit economics, evaluate differentiation, validate demand with real customers and record a product decision.",
  },
  {
    q: "How long does the product research process take?",
    a: "It varies with the product and the data available. A simple screening can be done in days, while a new product with physical sourcing or software development usually needs longer. The deciding factor is how quickly you can validate demand with real customers.",
  },
  {
    q: "Which step in the product research process matters most?",
    a: "Validating demand with real customer actions is usually the strongest evidence, but earlier steps decide what to validate. Skipping early steps risks testing the wrong idea, and skipping validation risks trusting analysis that was never tested.",
  },
  {
    q: "Can I skip steps in the product research process?",
    a: "You can shorten steps for low-risk decisions, but skipping unit economics or demand validation is a common cause of costly mistakes. Scale the depth of each step to the size of the investment.",
  },
  {
    q: "Where does AI help most in the process?",
    a: "AI helps most with the data-heavy steps: demand and trend analysis, search behavior, competitor mapping, review analysis and feature extraction. Defining the customer, judging economics, evaluating differentiation and making the decision need human judgment.",
  },
];

export default function Page() {
  const p = pages;
  return (
    <>
      <JsonLd data={pageJsonLd("productResearchProcess", faqs)} />
      <div className="container">
        <Breadcrumbs crumbs={breadcrumbsFor("productResearchProcess")} />
      </div>
      <PageHero
        eyebrow="How-to framework"
        title={p.productResearchProcess.h1}
        answer="The product research process is a sequence of steps that turns market signals into a documented decision. Define the target customer and problem, estimate demand, map competitors, analyze reviews and pricing, test unit economics and differentiation, validate demand with real customers, then decide whether to build, change or stop."
      />

      <Section
        id="overview"
        title="The Product Research Process at a Glance"
        short="Twelve steps, each answering one question with data, analysis and a decision."
      >
        <p>
          Every step below follows the same pattern: a <strong>question</strong> to answer, the{" "}
          <strong>data</strong> to use, the <strong>analysis</strong> to run and the{" "}
          <strong>decision</strong> it should produce. Use the links to jump to any step.
        </p>
        <nav className="toc" aria-label="Steps in this process">
          <p className="toc__title">Steps</p>
          <ol>
            {processSteps.map((s) => (
              <li key={s.slug}>
                <a href={`#step-${s.slug}`}>{s.title}</a>
              </li>
            ))}
          </ol>
          <p className="small muted" style={{ margin: "12px 0 0" }}>
            Also: <a href="#ai-assisted-workflow">AI-assisted workflow</a> ·{" "}
            <a href="#decision-gates">Decision gates</a> · <a href="#common-mistakes">Common mistakes</a> ·{" "}
            <a href="#faq">FAQ</a>
          </p>
        </nav>
      </Section>

      <Section
        id="steps"
        title="The 12 Steps of Product Research"
        short="Work through the steps in order, but expect to loop back when evidence changes your view."
        tone="alt"
      >
        {processSteps.map((s, i) => (
          <article className="step" id={`step-${s.slug}`} key={s.slug}>
            <h3>
              <span className="step__num">{i + 1}</span>
              {s.title}
            </h3>
            <dl className="flow flow--4">
              <div className="flow__item">
                <dt>Question</dt>
                <dd>{s.question}</dd>
              </div>
              <div className="flow__item">
                <dt>Data</dt>
                <dd>{s.data}</dd>
              </div>
              <div className="flow__item">
                <dt>Analysis</dt>
                <dd>{s.analysis}</dd>
              </div>
              <div className="flow__item">
                <dt>Decision</dt>
                <dd>{s.decision}</dd>
              </div>
            </dl>
            <p className="step__ai">
              <strong>Where AI helps:</strong> {s.ai}
            </p>
          </article>
        ))}
      </Section>

      <Section
        id="ai-assisted-workflow"
        title="AI-Assisted Product Research Workflow"
        short="AI accelerates the data-heavy steps, while people verify results and own every decision."
      >
        <DataTable
          caption="Where AI accelerates each step and what people must verify"
          columns={["Step", "Where AI can accelerate it", "What a person must verify"]}
          rows={processSteps.map((s, i) => [
            <a key={s.slug} href={`#step-${s.slug}`}>
              {i + 1}. {s.title}
            </a>,
            s.ai,
            s.human,
          ])}
        />
        <p>
          For the methods behind these tasks, see{" "}
          <Link href={p.aiProductResearch.path}>AI product research</Link>. For practical
          scenarios, see <Link href={p.useCases.path}>AI product research use cases</Link>.
        </p>
      </Section>

      <Section
        id="decision-gates"
        title="What Decision Gates Should the Process Include?"
        short="Set pass or stop criteria before you collect the data, so the evidence decides rather than enthusiasm."
        tone="alt"
      >
        <DataTable
          caption="Suggested decision gates"
          columns={["Gate", "After step", "Pass when", "If it fails"]}
          rows={[
            ["Problem gate", "2", "The problem is specific, frequent and painful", "Revisit the customer or stop"],
            ["Demand gate", "3–4", "Demand is large enough and lasting, not just a spike", "Narrow the niche or stop"],
            ["Opportunity gate", "5–8", "Competitors leave a real, addressable gap at a workable price", "Change the concept or stop"],
            ["Economics gate", "9", "Margins hold under realistic assumptions", "Rework cost, price or scope"],
            ["Validation gate", "11", "Customers take real action above your pre-set threshold", "Iterate, retest or stop"],
          ]}
        />
        <p>
          Thresholds depend on your business and risk tolerance, so set your own before testing and
          record them with the decision.
        </p>
      </Section>

      <Section
        id="common-mistakes"
        title="What Are Common Product Research Mistakes?"
        short="The most common mistakes are trusting a single data source, ignoring negative evidence and skipping validation."
      >
        <ul>
          <li><strong>Confusing interest with demand.</strong> Clicks and likes are not purchases.</li>
          <li><strong>Reading only successes.</strong> Survivorship bias hides products that failed for the same reasons.</li>
          <li><strong>Trusting manipulated signals.</strong> Fake or incentivized reviews distort review analysis.</li>
          <li><strong>Skipping unit economics.</strong> A popular product can still lose money.</li>
          <li><strong>Treating AI output as fact.</strong> Verify important claims against sources.</li>
          <li><strong>Not recording the decision.</strong> Without a written rationale, teams repeat the same research.</li>
        </ul>
        <Callout title="Keep it honest" variant="warning">
          <p>
            Record the evidence that argues against a product as carefully as the evidence for it.
            See the <Link href={p.aiProductResearch.path}>limitations of AI product research</Link>.
          </p>
        </Callout>
        <p>
          Trend data deserves particular care: tools such as Google Trends show a normalized sample
          of searches rather than absolute volume.{" "}
          <a href={SRC.trends.url} rel="noopener noreferrer" target="_blank">
            See the Google Trends FAQ
          </a>
          . To compare software that supports these steps, read{" "}
          <Link href={p.productResearchTools.path}>how to evaluate product research tools</Link>.
        </p>
      </Section>

      <Faq items={faqs} />

      <RelatedLinks keys={["whatIsProductResearch", "aiProductResearch", "productResearchTools", "useCases"]} />

      <Sources items={[SRC.trends]} />
    </>
  );
}
