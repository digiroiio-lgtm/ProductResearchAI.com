export interface UseCase {
  slug: string;
  title: string;
  /** One-line summary for the overview table. */
  summary: string;
  goal: string;
  data: string;
  ai: string;
  human: string;
  output: string;
}

export const useCases: UseCase[] = [
  {
    slug: "ecommerce-product-research",
    title: "E-Commerce Product Research",
    summary: "Choose which products an online store should sell.",
    goal: "Identify products with steady demand, manageable competition and workable margins for an online store.",
    data: "Search and trend data, competitor store listings, product reviews, price points, supplier cost estimates.",
    ai: "Detect demand trends, compare competing listings, cluster review themes and flag price bands.",
    human: "Decide whether demand is durable, whether the product can be sourced profitably and whether the store can differentiate.",
    output: "Shortlist of product candidates with demand, competition and margin notes.",
  },
  {
    slug: "amazon-product-research",
    title: "Amazon and Marketplace Product Research",
    summary: "Assess category competition and review gaps on marketplaces.",
    goal: "Understand competition, buyer expectations and review gaps in a marketplace category before listing a product.",
    data: "Marketplace listings, ratings and review text, price history, category structure, search terms, listing quality signals.",
    ai: "Summarize competing listings, cluster reviews by topic, extract features and compare price tiers.",
    human: "Judge listing and review authenticity, marketplace rules and whether the category is realistically winnable.",
    output: "Category assessment with competitor profiles, review-gap hypotheses and a go, change or stop recommendation.",
  },
  {
    slug: "dtc-product-research",
    title: "DTC Product Research",
    summary: "Find differentiation and positioning for a direct-to-consumer brand.",
    goal: "Find a differentiated product and positioning for a direct-to-consumer brand.",
    data: "Customer reviews of alternatives, social and community discussions, survey results, competitor brand messaging, pricing.",
    ai: "Extract the language customers use, cluster desires and objections and compare competitor positioning.",
    human: "Choose the brand position, test messaging with real customers and judge repeat-purchase potential.",
    output: "Positioning hypotheses, priority customer needs and a pre-launch test plan.",
  },
  {
    slug: "saas-product-research",
    title: "SaaS Product Research",
    summary: "Validate problems, alternatives and willingness to pay for software.",
    goal: "Validate a software problem, identify alternatives and gauge willingness to pay.",
    data: "Customer interviews, support tickets, app and software reviews, competitor pricing pages, feature lists, community threads.",
    ai: "Summarize interviews and tickets, cluster feature requests, compare competitor features and pricing tiers.",
    human: "Decide whether the problem is severe enough to pay for and whether the team can build a differentiated solution.",
    output: "Problem statement, competitive map and prioritized feature hypotheses.",
  },
  {
    slug: "new-product-development",
    title: "New Product Development",
    summary: "Use evidence to shape what to build first.",
    goal: "Use evidence to decide what a new product should include before development starts.",
    data: "Customer interviews, existing product reviews, support feedback, competitor features, usage data from related products.",
    ai: "Cluster needs and complaints, extract desired features and draft summaries of the evidence.",
    human: "Make trade-offs among customer needs, cost, feasibility and strategy.",
    output: "Prioritized requirements, concept hypotheses and a validation plan.",
  },
  {
    slug: "competitor-analysis",
    title: "Competitor Analysis",
    summary: "Track how alternatives are positioned and how they change.",
    goal: "Understand how competing products are positioned, priced and updated, and where they are weak.",
    data: "Product pages, pricing pages, release notes, reviews, marketplace listings, advertising and messaging.",
    ai: "Collect and compare competitor information, summarize changes over time and extract features and claims.",
    human: "Decide which competitors really matter and how to respond strategically.",
    output: "Competitor profiles, a comparison matrix and a list of positioning opportunities.",
  },
  {
    slug: "customer-review-mining",
    title: "Customer Review Mining",
    summary: "Surface repeated complaints and unmet needs from reviews.",
    goal: "Identify repeated customer complaints and unmet needs.",
    data: "Customer reviews, support feedback, product ratings and competitor reviews.",
    ai: "Cluster recurring themes, extract features and detect sentiment patterns.",
    human: "Determine whether identified problems represent a meaningful product opportunity.",
    output: "Prioritized pain points and product hypotheses.",
  },
  {
    slug: "pricing-research",
    title: "Pricing Research",
    summary: "Understand price bands, tiers and willingness to pay.",
    goal: "Understand the price range customers accept and how price relates to features and quality.",
    data: "Competitor prices and tiers, discount patterns, price history, willingness-to-pay surveys, cost data.",
    ai: "Map price bands, detect outliers and changes, and compare feature sets across price tiers.",
    human: "Set the price strategy, weigh margin against positioning and validate with customers.",
    output: "Target price range, tier structure hypotheses and margin scenarios.",
  },
  {
    slug: "product-feature-research",
    title: "Product Feature Research",
    summary: "Decide which features matter most to buyers.",
    goal: "Determine which features customers value most and which are missing or poorly executed.",
    data: "Feature lists, review text, support tickets, feature requests, usage data, competitor release notes.",
    ai: "Extract features, count mentions by sentiment and highlight requested features competitors lack.",
    human: "Decide which features justify development cost and fit the product strategy.",
    output: "Ranked feature list with supporting evidence.",
  },
  {
    slug: "market-gap-discovery",
    title: "Market Gap Discovery",
    summary: "Find needs that current products do not serve well.",
    goal: "Find customer needs that existing products serve poorly or not at all.",
    data: "Category listings, reviews, forum questions, search queries, competitor positioning, price tiers.",
    ai: "Compare what customers ask for with what products offer, cluster unmet needs and detect empty price or feature segments.",
    human: "Decide whether a gap is a real opportunity or exists because demand is too small or serving it is too costly.",
    output: "List of candidate gaps with evidence, size indications and open questions.",
  },
  {
    slug: "trend-research",
    title: "Trend Research",
    summary: "Separate lasting trends from short-lived spikes.",
    goal: "Distinguish lasting trends and seasonal patterns from short-lived spikes.",
    data: "Search trend data, social and community conversation, category listings over time, news and industry reports.",
    ai: "Detect rising and seasonal patterns, group related topics and flag sudden spikes.",
    human: "Judge whether a trend will persist, how it fits the brand and whether timing allows a launch.",
    output: "Trend summary with time horizon, confidence level and recommended watch list.",
  },
  {
    slug: "product-validation",
    title: "Product Validation",
    summary: "Test whether real customers will take action before investing.",
    goal: "Test whether real customers will take a meaningful action, such as sign up, pre-order or pay, before heavy investment.",
    data: "Landing page results, waitlist sign-ups, pre-orders, prototype feedback, survey and interview responses.",
    ai: "Summarize open-text feedback, group objections and draft test materials such as landing page variants.",
    human: "Set success thresholds in advance, run the test with real customers and decide to build, change or stop.",
    output: "Validation results against pre-set thresholds and a recorded product decision.",
  },
];
