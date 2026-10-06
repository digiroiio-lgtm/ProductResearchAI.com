export interface ProcessStep {
  slug: string;
  title: string;
  question: string;
  data: string;
  analysis: string;
  decision: string;
  /** Where AI can accelerate this step. */
  ai: string;
  /** What a person must still verify. */
  human: string;
}

export const processSteps: ProcessStep[] = [
  {
    slug: "define-the-target-customer",
    title: "Define the Target Customer",
    question: "Who exactly is this product for, and in what situation do they need it?",
    data: "Existing customer data, interviews, survey responses, community and forum discussions, category demographics.",
    analysis: "Describe one or two specific customer segments by situation, goal and constraint, not just demographics.",
    decision: "Choose the primary customer segment the research will focus on.",
    ai: "Summarize interview notes and forum threads; cluster customers by stated goals.",
    human: "Choose the segment and check that the sample represents real buyers.",
  },
  {
    slug: "identify-the-problem-or-need",
    title: "Identify the Problem or Need",
    question: "What problem does this customer have, and how painful and frequent is it?",
    data: "Customer interviews, support tickets, reviews of related products, forum posts, search queries phrased as problems.",
    analysis: "List the problems in the customer’s own words, then rank by frequency, severity and current workarounds.",
    decision: "Select the problem worth solving, or stop if the pain is weak.",
    ai: "Extract recurring pain points from large volumes of text and group them by theme.",
    human: "Judge severity and whether customers would pay to solve it.",
  },
  {
    slug: "estimate-market-demand",
    title: "Estimate Market Demand",
    question: "Are enough people looking for a solution, and is interest stable, growing or fading?",
    data: "Search and trend data, category listings, sales or rank estimates, waitlists, public industry reports.",
    analysis: "Compare interest over time, check seasonality and separate lasting demand from short spikes.",
    decision: "Decide whether demand is large and durable enough to continue.",
    ai: "Detect trends and seasonality across multiple data series; flag unusual spikes.",
    human: "Check data sources and definitions; trend tools often report relative interest, not absolute sales.",
  },
  {
    slug: "analyze-search-behavior",
    title: "Analyze Search Behavior",
    question: "What words and questions do customers use, and what do they intend to do?",
    data: "Keyword and query data, autocomplete suggestions, related searches, marketplace search terms.",
    analysis: "Group queries by intent (learn, compare, buy) and note the language customers use for the problem.",
    decision: "Choose the terms and messages the product and its content should address.",
    ai: "Cluster keywords by intent and topic; summarize recurring phrasing.",
    human: "Confirm intent by reviewing real results, since similar words can mean different things.",
  },
  {
    slug: "map-competitors",
    title: "Map Competitors",
    question: "Who else solves this problem, directly or indirectly, and how are they positioned?",
    data: "Competitor product pages, feature lists, marketplace listings, pricing pages, brand messaging, substitutes and workarounds.",
    analysis: "Build a map of direct competitors, indirect alternatives and non-consumption (doing nothing), with positioning and target customer for each.",
    decision: "Decide whether the market is too crowded, adequately open or underserved.",
    ai: "Collect and summarize competitor pages; build side-by-side comparison tables.",
    human: "Add competitors the data missed and judge which are true alternatives for your customer.",
  },
  {
    slug: "analyze-customer-reviews",
    title: "Analyze Customer Reviews",
    question: "What do customers repeatedly praise and complain about in existing products?",
    data: "Marketplace, retailer and app-store reviews, ratings distribution, review dates, Q&A sections.",
    analysis: "Tag reviews by topic and sentiment, quantify how often each theme appears and compare across products.",
    decision: "Shortlist the complaints and unmet needs that are frequent, specific and addressable.",
    ai: "Review mining: cluster themes, run sentiment analysis, pull representative quotes.",
    human: "Read samples to verify themes and screen for fake, incentivized or off-topic reviews.",
  },
  {
    slug: "identify-feature-gaps",
    title: "Identify Feature Gaps",
    question: "Which needs do current products fail to meet well?",
    data: "Competitor feature lists, review themes, feature requests, support and roadmap discussions.",
    analysis: "Cross-reference what customers ask for with what competitors offer; mark gaps as missing, weak or poorly communicated.",
    decision: "Select the gaps that could form the core of a differentiated product.",
    ai: "Extract features from descriptions and reviews; flag mismatches between requests and offerings.",
    human: "Judge whether a gap is feasible to build and valuable enough to matter.",
  },
  {
    slug: "compare-pricing",
    title: "Compare Pricing",
    question: "What do customers currently pay, and what price can this product support?",
    data: "Competitor price points, tiers, discounts, price history, willingness-to-pay survey results.",
    analysis: "Map the price bands, link price to features and quality, and find where a differentiated product could sit.",
    decision: "Set a target price range for the economics step.",
    ai: "Collect price data, detect price bands and outliers, track changes over time.",
    human: "Interpret price positioning and check that data is current and in the right currency and region.",
  },
  {
    slug: "estimate-unit-economics",
    title: "Estimate Unit Economics",
    question: "At the target price, can this product earn an acceptable margin?",
    data: "Cost estimates (materials, manufacturing, development, fulfillment), fees, acquisition cost assumptions, return rates.",
    analysis: "Build a simple model of revenue, costs and contribution margin per unit or customer, and test the assumptions that matter most.",
    decision: "Proceed only if realistic assumptions still leave a viable margin.",
    ai: "Draft scenario tables and sensitivity analysis from assumptions you provide.",
    human: "Own the assumptions; obtain real quotes and costs, since AI cannot know your supplier or cost structure.",
  },
  {
    slug: "evaluate-differentiation",
    title: "Evaluate Differentiation",
    question: "Why would a customer choose this over existing options?",
    data: "Gap analysis, competitor positioning, customer feedback on early concepts, brand and sourcing advantages.",
    analysis: "Write a clear value proposition and check it against competitor claims for uniqueness and credibility.",
    decision: "Confirm a defensible reason to exist, or revise the concept.",
    ai: "Compare positioning statements and suggest overlaps with competitor messaging.",
    human: "Judge whether the difference is meaningful to customers, not just technically new.",
  },
  {
    slug: "validate-demand",
    title: "Validate Demand",
    question: "Will real customers take a concrete action, such as signing up, pre-ordering or paying?",
    data: "Landing page conversions, waitlist sign-ups, pre-orders, small test campaigns, prototype feedback.",
    analysis: "Compare action rates against a threshold set in advance, and record what customers said and did.",
    decision: "Treat validated demand as the gate for investment; otherwise iterate or stop.",
    ai: "Summarize feedback and open-text survey responses; help draft test materials.",
    human: "Run the test with real customers; behavior is stronger evidence than opinion.",
  },
  {
    slug: "make-a-product-decision",
    title: "Make a Product Decision",
    question: "Should we build or sell this product, change it or stop?",
    data: "Everything gathered in steps 1 to 11, plus risks, resources and strategic fit.",
    analysis: "Summarize evidence for and against, note the largest remaining risks and compare with alternative opportunities.",
    decision: "Record one of three outcomes: go, change (with specific changes) or stop, with the reasons.",
    ai: "Assemble a draft evidence summary with sources for the team to review.",
    human: "Make the decision and own the risk; AI supports the case but cannot make it.",
  },
];
