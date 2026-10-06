export type PageKey =
  | "home"
  | "whatIsProductResearch"
  | "aiProductResearch"
  | "productResearchTools"
  | "productResearchProcess"
  | "useCases";

export interface PageMeta {
  key: PageKey;
  path: string;
  /** <title> and Open Graph / Twitter title. Kept near 50-60 characters. */
  title: string;
  /** Meta description and Open Graph / Twitter description. */
  description: string;
  h1: string;
  navLabel: string;
  /** One-line summary used in link cards and llms.txt. */
  summary: string;
  /** Search intent this page owns, used to keep pages from cannibalizing each other. */
  intent: string;
}

export const pages: Record<PageKey, PageMeta> = {
  home: {
    key: "home",
    path: "/",
    title: "AI Product Research | ProductResearchAI.com",
    description:
      "Learn how AI can help research product demand, competitors, reviews, pricing, customer needs and market opportunities before making product decisions.",
    h1: "AI Product Research for Better Product Decisions",
    navLabel: "Home",
    summary: "An overview of AI-powered product research and where it fits in product decisions.",
    intent: "Broad category: product research AI",
  },
  whatIsProductResearch: {
    key: "whatIsProductResearch",
    path: "/what-is-product-research",
    title: "What Is Product Research? Process, Methods & Examples",
    description:
      "Learn what product research is, why it matters and how businesses analyze customers, competitors, demand, pricing and product opportunities.",
    h1: "What Is Product Research?",
    navLabel: "What Is Product Research?",
    summary: "A definition of product research, what it includes and how it differs from market research and product discovery.",
    intent: "Informational definition",
  },
  aiProductResearch: {
    key: "aiProductResearch",
    path: "/ai-product-research",
    title: "AI Product Research: Methods, Use Cases & Limitations",
    description:
      "Explore how AI can accelerate product research through competitor analysis, review mining, demand signals, pricing research and opportunity discovery.",
    h1: "AI Product Research: How Artificial Intelligence Supports Product Discovery",
    navLabel: "AI Product Research",
    summary: "How AI methods such as NLP, clustering and summarization support product research, and where they fall short.",
    intent: "Technology and AI methodology",
  },
  productResearchTools: {
    key: "productResearchTools",
    path: "/product-research-tools",
    title: "Product Research Tools: Features & Evaluation Guide",
    description:
      "Learn how to evaluate product research tools for demand analysis, competitor tracking, customer reviews, pricing, trends and AI-powered insights.",
    h1: "Product Research Tools: Features, Data and Evaluation Criteria",
    navLabel: "Product Research Tools",
    summary: "The features, data sources and evaluation criteria that matter when comparing product research software.",
    intent: "Commercial investigation",
  },
  productResearchProcess: {
    key: "productResearchProcess",
    path: "/product-research-process",
    title: "Product Research Process: A Step-by-Step Framework",
    description:
      "Follow a practical product research process covering demand, competitors, reviews, pricing, differentiation and product validation.",
    h1: "Product Research Process: From Market Signal to Product Decision",
    navLabel: "Research Process",
    summary: "A 12-step framework that moves from target customer to a documented product decision.",
    intent: "How-to and methodology",
  },
  useCases: {
    key: "useCases",
    path: "/use-cases",
    title: "AI Product Research Use Cases for Modern Businesses",
    description:
      "Explore AI product research use cases for e-commerce, Amazon, SaaS, DTC brands, competitor analysis, review mining and product discovery.",
    h1: "AI Product Research Use Cases",
    navLabel: "Use Cases",
    summary: "Twelve practical use cases, each broken into goal, data, AI-assisted analysis, human decision and output.",
    intent: "Solutions and vertical use cases",
  },
};

/** Order used by navigation, the footer, the sitemap and llms.txt. */
export const pageOrder: PageKey[] = [
  "home",
  "whatIsProductResearch",
  "aiProductResearch",
  "productResearchTools",
  "productResearchProcess",
  "useCases",
];

export const pillarPages: PageMeta[] = pageOrder.filter((k) => k !== "home").map((k) => pages[k]);
