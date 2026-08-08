import type { HTMLAttributes } from "react";
import { colors, radii, spacing, typography } from "./tokens.js";
import type { BadgeTone } from "./Badge.js";

export type ImageBadgeCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface ImageBadgeProps extends HTMLAttributes<HTMLDivElement> {
  tone?: BadgeTone;
  corner?: ImageBadgeCorner;
}

const toneStyles: Record<BadgeTone, { background: string; color: string }> = {
  primary: { background: colors.primary, color: colors.textOnPrimary },
  accent: { background: colors.accent, color: colors.textOnPrimary },
  info: { background: colors.info, color: colors.textOnPrimary },
  warning: { background: colors.warning, color: colors.text },
  neutral: { background: colors.surfaceMuted, color: colors.text },
};

const cornerStyles: Record<ImageBadgeCorner, { top?: string; bottom?: string; left?: string; right?: string }> = {
  "top-left": { top: spacing.sm, left: spacing.sm },
  "top-right": { top: spacing.sm, right: spacing.sm },
  "bottom-left": { bottom: spacing.sm, left: spacing.sm },
  "bottom-right": { bottom: spacing.sm, right: spacing.sm },
};

export function ImageBadge({ tone = "accent", corner = "top-left", style, ...rest }: ImageBadgeProps) {
  const toneStyle = toneStyles[tone];
  return (
    <span
      {...rest}
      style={{
        position: "absolute",
        ...cornerStyles[corner],
        fontFamily: typography.fontFamily,
        fontWeight: typography.weightBold,
        fontSize: "12px",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        padding: `${spacing.xs} ${spacing.sm}`,
        borderRadius: radii.sm,
        backgroundColor: toneStyle.background,
        color: toneStyle.color,
        ...style,
      }}
    />
  );
}
