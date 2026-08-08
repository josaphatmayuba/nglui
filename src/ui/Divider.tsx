import type { CSSProperties, HTMLAttributes } from "react";
import { colors } from "./tokens.js";

export type DividerVariant = "line" | "tricolor";

const DEFAULT_BAND_COLORS: readonly string[] = [colors.info, colors.accent, colors.warning];

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: DividerVariant;
  /** Band colors for the "tricolor" variant. Any length works — not limited to three. */
  colors?: string[];
  /** CSS gradient for the "tricolor" variant, e.g. "linear-gradient(90deg, red, blue)". Overrides `colors`. */
  gradient?: string;
  height?: number;
}

export function Divider({ variant = "line", colors: bandColors, gradient, height = 4, style, ...rest }: DividerProps) {
  if (variant === "tricolor") {
    const bands = gradient ? null : (bandColors ?? DEFAULT_BAND_COLORS);
    const barStyle: CSSProperties = {
      display: "flex",
      height,
      width: "100%",
      ...(gradient ? { background: gradient } : {}),
      ...style,
    };

    return (
      <div {...rest} style={barStyle}>
        {bands?.map((color, index) => (
          <div key={`${color}-${index}`} style={{ flex: 1, backgroundColor: color }} />
        ))}
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
