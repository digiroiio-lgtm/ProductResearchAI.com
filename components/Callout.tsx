import type { ReactNode } from "react";

export function Callout({
  title,
  children,
  variant = "note",
}: {
  title: string;
  children: ReactNode;
  variant?: "note" | "warning";
}) {
  return (
    <aside className={`callout callout--${variant}`}>
      <p className="callout__title">{title}</p>
      <div>{children}</div>
    </aside>
  );
}
