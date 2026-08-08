import type { HTMLAttributes } from "react";
import { spacing } from "./tokens.js";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: keyof typeof spacing;
}

export function Grid({ columns = 3, gap = "md", style, ...rest }: GridProps) {
  return (
    <div
      {...rest}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: spacing[gap],
        ...style,
      }}
    />
  );
}
