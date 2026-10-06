import type { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  /** One-sentence factual answer shown before the detail. */
  short?: ReactNode;
  children?: ReactNode;
  tone?: "default" | "alt";
}

/** An H2 section. Use <Sub> inside it for H3s. */
export function Section({ id, title, short, children, tone = "default" }: Props) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-heading`}>
      <div className="container prose">
        <h2 id={`${id}-heading`}>{title}</h2>
        {short ? <p className="short-answer">{short}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function Sub({ id, title, children }: { id?: string; title: string; children?: ReactNode }) {
  return (
    <div className="sub" id={id}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
