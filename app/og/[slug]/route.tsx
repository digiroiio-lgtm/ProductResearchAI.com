import { ImageResponse } from "next/og";
import { pageOrder, pages, type PageKey } from "@/lib/pages";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return pageOrder.map((key) => ({ slug: `${key}.png` }));
}

export async function GET(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const key = slug.replace(/\.png$/, "") as PageKey;
  const page = pages[key] ?? pages.home;
  const title = page.h1;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0e1726 0%, #12315c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 32, fontWeight: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#3b82f6",
              marginRight: 18,
              fontSize: 26,
            }}
          >
            PR
          </div>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 54 : 68, fontWeight: 800, lineHeight: 1.12 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9fb7dc" }}>{site.tagline}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
