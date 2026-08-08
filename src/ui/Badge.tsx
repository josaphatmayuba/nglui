import type { HTMLAttributes } from "react";
import { colors, radii, spacing, typography } from "./tokens.js";

export type BadgeTone = "primary" | "accent" | "info" | "warning" | "neutral";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const toneStyles: Record<BadgeTone, { background: string; color: string }> = {
  primary: { background: colors.primary, color: colors.textOnPrimary },
  accent: { background: colors.accent, color: colors.textOnPrimary },
  info: { background: colors.info, color: colors.textOnPrimary },
  warning: { background: colors.warning, color: colors.text },
  neutral: { background: colors.surfaceMuted, color: colors.text },
};

export function Badge({ tone = "neutral", style, ...rest }: BadgeProps) {
  const toneStyle = toneStyles[tone];
  return (
    <span
      {...rest}
      style={{
        display: "inline-block",
        fontFamily: typography.fontFamily,
        fontWeight: typography.weightBold,
        fontSize: "12px",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        padding: `${spacing.xs} ${spacing.sm}`,
        borderRadius: radii.pill,
        backgroundColor: toneStyle.background,
        color: toneStyle.color,
        ...style,
      }}
    />
  );
}
