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
import { useCases } from "@/lib/content/use-cases";
import { pages } from "@/lib/pages";
import { breadcrumbsFor, buildMetadata, pageJsonLd, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("useCases");

const faqs: FaqItem[] = [
  {
    q: "What are the main use cases for AI product research?",
    a: "The main use cases are e-commerce and Amazon product research, DTC and SaaS product research, new product development, competitor analysis, customer review mining, pricing research, product feature research, market gap discovery, trend research and product validation.",
  },
  {
    q: "Which use case should I start with?",
    a: "Start with the decision you need to make soonest. If you are choosing what to sell, begin with e-commerce or marketplace research. If you are improving an existing product, begin with customer review mining. If you already have an idea, begin with product validation.",
  },
  {
    q: "Does AI product research work for software and services?",
    a: "Yes. For SaaS, the data sources shift to interviews, support tickets, app reviews and competitor pricing pages, but the same methods of summarizing, clustering and comparing apply.",
  },
  {
    q: "Is AI-assisted analysis enough to make a product decision?",
    a: "No. In every use case the AI-assisted analysis informs a human decision. People verify the data, weigh strategy and risk, and test demand with real customers.",
  },
];

export default function Page() {
  const p = pages;
  return (
    <>
      <JsonLd data={pageJsonLd("useCases", faqs)} />
      <div className="container">
        <Breadcrumbs crumbs={breadcrumbsFor("useCases")} />
      </div>
      <PageHero
        eyebrow="Practical applications"
        title={p.useCases.h1}
        answer="AI product research is used to choose products to sell, analyze marketplaces and competitors, mine customer reviews, research pricing and features, find market gaps, track trends and validate demand. In each case, AI helps analyze large amounts of data, and a person makes the decision."
      />

      <Section
        id="overview"
        title="Which Use Cases Does AI Product Research Support?"
        short="Twelve practical use cases, each described as goal, data sources, AI-assisted analysis, human decision and output."
      >
        <p>
          Each use case follows the same structure: <strong>Goal → Data Sources → AI-Assisted
          Analysis → Human Decision → Output</strong>. These are general descriptions, not case
          studies of specific companies. For the underlying methods, see{" "}
          <Link href={p.aiProductResearch.path}>AI product research</Link>.
        </p>
        <DataTable
          caption="AI product research use cases"
          columns={["Use case", "Summary"]}
          rows={useCases.map((u) => [
            <a key={u.slug} href={`#${u.slug}`}>
              {u.title}
            </a>,
            u.summary,
          ])}
        />
      </Section>

      <Section
        id="use-case-details"
        title="AI Product Research Use Cases in Detail"
        short="Use these as templates and adapt the data sources to your market."
        tone="alt"
      >
        {useCases.map((u) => (
          <article className="step" id={u.slug} key={u.slug}>
            <h3>{u.title}</h3>
            <dl className="flow">
              <div className="flow__item">
                <dt>Goal</dt>
                <dd>{u.goal}</dd>
              </div>
              <div className="flow__item">
                <dt>Data Sources</dt>
                <dd>{u.data}</dd>
              </div>
              <div className="flow__item">
                <dt>AI-Assisted Analysis</dt>
                <dd>{u.ai}</dd>
              </div>
              <div className="flow__item">
                <dt>Human Decision</dt>
                <dd>{u.human}</dd>
              </div>
              <div className="flow__item">
                <dt>Output</dt>
                <dd>{u.output}</dd>
              </div>
            </dl>
          </article>
        ))}
      </Section>

      <Section
        id="choosing-a-use-case"
        title="How Do You Choose Where to Start?"
        short="Start with the decision you must make next, and use the smallest amount of research that can answer it."
      >
        <ul>
          <li><strong>Choosing what to sell:</strong> e-commerce, marketplace and trend research.</li>
          <li><strong>Improving an existing product:</strong> customer review mining, feature research and pricing research.</li>
          <li><strong>Planning something new:</strong> market gap discovery, new product development and validation.</li>
          <li><strong>Defending your position:</strong> competitor analysis and pricing research.</li>
        </ul>
        <Callout title="Always validate" variant="warning">
          <p>
            AI-assisted analysis can be wrong or based on manipulated data, such as fake reviews.
            Use the <Link href={p.productResearchProcess.path}>product research process</Link> to
            verify findings and validate demand before investing, and see{" "}
            <Link href={p.productResearchTools.path}>how to evaluate product research tools</Link>{" "}
            when choosing software to support these use cases.
          </p>
        </Callout>
        <p>
          New to the topic? Start with{" "}
          <Link href={p.whatIsProductResearch.path}>What Is Product Research?</Link>
        </p>
      </Section>

      <Faq items={faqs} />

      <RelatedLinks keys={["productResearchProcess", "aiProductResearch", "productResearchTools", "whatIsProductResearch"]} />

    </>
  );
}
