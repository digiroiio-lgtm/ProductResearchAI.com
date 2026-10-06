// Post-build SEO checks against the prerendered HTML in .next/server/app.
// Usage: npm run build && npm run verify
import { readFileSync, existsSync } from "node:fs";

const dir = ".next/server/app";
const indexable = {
  "index.html": "/",
  "what-is-product-research.html": "/what-is-product-research",
  "ai-product-research.html": "/ai-product-research",
  "product-research-tools.html": "/product-research-tools",
  "product-research-process.html": "/product-research-process",
  "use-cases.html": "/use-cases",
};

let failures = 0;
const fail = (file, msg) => {
  failures++;
  console.error(`FAIL ${file}: ${msg}`);
};
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const text = (html) => decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const meta = (html, attr, name) => {
  const m = html.match(new RegExp(`<meta[^>]+${attr}="${name}"[^>]*content="([^"]*)"`)) ||
    html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]*${attr}="${name}"`));
  return m ? decode(m[1]) : null;
};

const titles = new Set();
const descs = new Set();

for (const [file, path] of Object.entries(indexable)) {
  const p = `${dir}/${file}`;
  if (!existsSync(p)) { fail(file, "missing build output"); continue; }
  const html = readFileSync(p, "utf8");

  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] ?? "");
  const desc = meta(html, "name", "description") ?? "";
  if (!title) fail(file, "no <title>");
  if (titles.has(title)) fail(file, "duplicate title");
  if (descs.has(desc)) fail(file, "duplicate description");
  titles.add(title); descs.add(desc);
  if (title.length > 62) fail(file, `title too long (${title.length}): ${title}`);
  if (desc.length < 120 || desc.length > 165) fail(file, `description length ${desc.length}`);

  const canonical = (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/) || [])[1];
  if (!canonical || !canonical.endsWith(path === "/" ? "" : path)) fail(file, `bad canonical ${canonical}`);

  for (const n of ["og:title", "og:description", "og:image"]) if (!meta(html, "property", n)) fail(file, `missing ${n}`);
  for (const n of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) if (!meta(html, "name", n)) fail(file, `missing ${n}`);
  if (meta(html, "property", "og:title") !== title) fail(file, "og:title differs from title");
  const robots = meta(html, "name", "robots");
  if (robots && /noindex/.test(robots)) fail(file, "indexable page is noindex");

  const body = html.slice(html.indexOf("<body"));
  const headings = [...body.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const h1s = headings.filter((h) => h === 1).length;
  if (h1s !== 1) fail(file, `expected exactly one H1, found ${h1s}`);
  let prev = 0;
  headings.forEach((h) => { if (prev && h > prev + 1) fail(file, `heading level skipped: h${prev} -> h${h}`); prev = h; });

  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (ld.length === 0) fail(file, "no JSON-LD");
  ld.forEach((m) => { try { JSON.parse(m[1]); } catch { fail(file, "invalid JSON-LD"); } });

  if (!/Skip to main content/.test(html) || !/for sale/.test(html)) fail(file, "banner/skip link missing");

  const answer = (body.match(/class="answer__text">([\s\S]*?)<\/p>/) || [])[1];
  const words = answer ? text(answer).split(" ").length : 0;
  if (path === "/" && (words < 40 || words > 80)) fail(file, `home direct answer is ${words} words`);
  console.log(`ok   ${path.padEnd(28)} title=${title.length} desc=${desc.length} h1=${h1s} headings=${headings.length} answerWords=${words}`);
}

// /domain: noindex, follow, and not in sitemap
const domain = readFileSync(`${dir}/domain.html`, "utf8");
const dr = meta(domain, "name", "robots") ?? "";
if (!/noindex/.test(dr) || !/follow/.test(dr) || /nofollow/.test(dr)) fail("domain.html", `robots meta is "${dr}"`);
if ((domain.match(/<h1[\s>]/g) || []).length !== 1) fail("domain.html", "expected one H1");
const sitemapPath = `${dir}/sitemap.xml.body`;
if (existsSync(sitemapPath)) {
  const sm = readFileSync(sitemapPath, "utf8");
  if (/\/domain/.test(sm)) fail("sitemap.xml", "contains /domain");
  const n = (sm.match(/<loc>/g) || []).length;
  if (n !== 6) fail("sitemap.xml", `expected 6 URLs, found ${n}`);
  console.log(`ok   sitemap.xml                  urls=${n}, excludes /domain`);
} else fail("sitemap.xml", "build output not found");

if (failures) { console.error(`\n${failures} check(s) failed`); process.exit(1); }
console.log("\nAll SEO checks passed");
