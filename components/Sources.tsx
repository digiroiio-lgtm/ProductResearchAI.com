export interface Source {
  label: string;
  url: string;
  note?: string;
}

/** Citations for externally verifiable claims made on the page. */
export function Sources({ items }: { items: Source[] }) {
  if (items.length === 0) return null;
  return (
    <section className="section" aria-labelledby="sources-heading">
      <div className="container prose">
        <h2 id="sources-heading">Sources and Further Reading</h2>
        <ol className="sources">
          {items.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="noopener noreferrer" target="_blank">
                {s.label}
              </a>
              {s.note ? <span className="muted"> {s.note}</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export const SRC = {
  nist: {
    label: "NIST AI 600-1: Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (2024)",
    url: "https://doi.org/10.6028/NIST.AI.600-1",
    note: "Describes “confabulation” and other risks specific to generative AI.",
  },
  ftc: {
    label: "U.S. Code of Federal Regulations, 16 CFR Part 465: Use of Consumer Reviews and Testimonials",
    url: "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465",
    note: "The FTC rule that restricts fake and manipulated consumer reviews.",
  },
  andreessen: {
    label: "Marc Andreessen, “The Only Thing That Matters” (PMarca Guide to Startups, Part 4)",
    url: "https://pmarchive.com/guide_to_startups_part4.html",
    note: "Defines product/market fit as being in a good market with a product that can satisfy that market.",
  },
  trends: {
    label: "Google Trends Help: FAQ about Google Trends data",
    url: "https://support.google.com/trends/answer/4365533",
    note: "Explains that Trends data is a sample and is normalized to relative popularity.",
  },
} satisfies Record<string, Source>;
