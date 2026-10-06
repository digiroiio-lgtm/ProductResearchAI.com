import { pageOrder, pages } from "@/lib/pages";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

// Plain-text site summary for AI retrieval systems (llms.txt convention).
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    "> An independent educational resource about AI-powered product research: how AI can help analyze markets, competitors, customer demand, reviews, pricing, product gaps and product opportunities. The site does not operate proprietary software, datasets or AI models.",
    "",
    "## Guides",
    "",
    ...pageOrder.map((k) => `- [${pages[k].h1}](${absoluteUrl(pages[k].path)}): ${pages[k].summary}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
