import type { SelectHTMLAttributes } from "react";
import { colors, radii, spacing, typography } from "./tokens.js";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ style, children, ...rest }: SelectProps) {
  return (
    <select
      {...rest}
      style={{
        fontFamily: typography.fontFamily,
        fontSize: "15px",
        color: colors.text,
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: radii.sm,
        padding: `${spacing.sm} ${spacing.md}`,
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </select>
  );
}
