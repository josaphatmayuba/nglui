import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { colors, radii, spacing, typography } from "./tokens.js";

export type ButtonVariant = "primary" | "accent" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: colors.primary,
    color: colors.textOnPrimary,
    border: "1px solid transparent",
  },
  accent: {
    backgroundColor: colors.accent,
    color: colors.textOnPrimary,
    border: "1px solid transparent",
  },
  outline: {
    backgroundColor: "transparent",
    color: colors.primary,
    border: `1px solid ${colors.primary}`,
  },
};

export function Button({ variant = "primary", style, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      style={{
        fontFamily: typography.fontFamily,
        fontWeight: typography.weightBold,
        fontSize: "16px",
        padding: `${spacing.sm} ${spacing.lg}`,
        borderRadius: radii.pill,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: spacing.xs,
        ...variantStyles[variant],
        ...style,
      }}
    />
  );
}
