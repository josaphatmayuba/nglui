import type { HTMLAttributes } from "react";
import { colors } from "./tokens.js";

export type DividerVariant = "line" | "tricolor";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: DividerVariant;
}

export function Divider({ variant = "line", style, ...rest }: DividerProps) {
  if (variant === "tricolor") {
    return (
      <div
        {...rest}
        style={{
          display: "flex",
          height: "4px",
          width: "100%",
          ...style,
        }}
      >
        <div style={{ flex: 1, backgroundColor: colors.info }} />
        <div style={{ flex: 1, backgroundColor: colors.accent }} />
        <div style={{ flex: 1, backgroundColor: colors.warning }} />
      </div>
    );
  }

  return (
    <hr
      {...rest}
      style={{
        border: "none",
        borderTop: `1px solid ${colors.border}`,
        margin: 0,
        width: "100%",
        ...style,
      }}
    />
  );
}
