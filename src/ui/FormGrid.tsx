import type { HTMLAttributes } from "react";
import { spacing } from "./tokens.js";

export interface FormGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
}

export function FormGrid({ columns = 2, style, ...rest }: FormGridProps) {
  return (
    <div
      {...rest}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: spacing.md,
        ...style,
      }}
    />
  );
}
