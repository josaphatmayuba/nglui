import type { HTMLAttributes } from "react";
import { colors, spacing, typography } from "./tokens.js";

export type HeroProps = HTMLAttributes<HTMLElement>;

export function Hero({ style, ...rest }: HeroProps) {
  return (
    <section
      {...rest}
      style={{
        backgroundColor: colors.primary,
        color: colors.textOnPrimary,
        fontFamily: typography.fontFamily,
        padding: `${spacing.xl} ${spacing.lg}`,
        display: "flex",
        flexDirection: "column",
        gap: spacing.md,
        ...style,
      }}
    />
  );
}
