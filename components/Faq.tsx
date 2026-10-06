import { Section } from "./Section";
import type { FaqItem } from "@/lib/seo";

/** Visible FAQ. The same items feed the FAQPage JSON-LD via pageJsonLd. */
export function Faq({ items, id = "faq", title = "Frequently Asked Questions" }: { items: FaqItem[]; id?: string; title?: string }) {
  return (
    <Section id={id} title={title}>
      <div className="faq">
        {items.map((item) => (
          <div key={item.q} className="faq__item">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
