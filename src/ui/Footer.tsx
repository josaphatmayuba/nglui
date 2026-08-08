import type { HTMLAttributes } from "react";
import { colors, spacing, typography } from "./tokens.js";

export type FooterProps = HTMLAttributes<HTMLElement>;

export function Footer({ style, ...rest }: FooterProps) {
  return (
    <footer
      {...rest}
      style={{
        backgroundColor: colors.primary,
        color: colors.textOnPrimary,
        fontFamily: typography.fontFamily,
        fontWeight: typography.weightRegular,
        fontSize: "14px",
        padding: `${spacing.xl} ${spacing.lg}`,
        display: "flex",
        flexDirection: "column",
        gap: spacing.md,
        ...style,
      }}
    />
  );
}
