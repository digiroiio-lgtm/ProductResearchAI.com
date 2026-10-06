import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  /** The page's only <h1>. */
  title: string;
  /** Concise direct answer shown immediately beneath the H1. */
  answer: ReactNode;
  answerLabel?: string;
  actions?: ReactNode;
}

export function PageHero({ eyebrow, title, answer, answerLabel = "Short answer", actions }: Props) {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="container hero__inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 id="page-title">{title}</h1>
        <div className="answer">
          <p className="answer__label">{answerLabel}</p>
          <p className="answer__text">{answer}</p>
        </div>
        {actions ? <div className="hero__actions">{actions}</div> : null}
      </div>
    </section>
  );
}
