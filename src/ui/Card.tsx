import type { HTMLAttributes } from "react";
import { colors, radii, shadows, spacing } from "./tokens.js";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ style, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: radii.lg,
        boxShadow: shadows.sm,
        padding: spacing.lg,
        ...style,
      }}
    />
  );
}
