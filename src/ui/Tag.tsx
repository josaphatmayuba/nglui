import type { ButtonHTMLAttributes } from "react";
import { colors, radii, spacing, typography } from "./tokens.js";

export interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function Tag({ selected = false, style, ...rest }: TagProps) {
  return (
    <button
      type="button"
      {...rest}
      style={{
        fontFamily: typography.fontFamily,
        fontWeight: typography.weightRegular,
        fontSize: "13px",
        padding: `${spacing.xs} ${spacing.sm}`,
        borderRadius: radii.pill,
        border: `1px solid ${selected ? colors.primary : colors.border}`,
        backgroundColor: selected ? colors.primary : colors.surface,
        color: selected ? colors.textOnPrimary : colors.text,
        cursor: "pointer",
        ...style,
      }}
    />
  );
}
