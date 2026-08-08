import type { InputHTMLAttributes } from "react";
import { useId } from "react";
import { colors, spacing, typography } from "./tokens.js";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Radio({ label, id, style, ...rest }: RadioProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label
      htmlFor={inputId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: spacing.sm,
        fontFamily: typography.fontFamily,
        fontSize: "14px",
        color: colors.text,
        cursor: "pointer",
      }}
    >
      <input
        id={inputId}
        type="radio"
        {...rest}
        style={{
          width: "16px",
          height: "16px",
          accentColor: colors.primary,
          ...style,
        }}
      />
      {label}
    </label>
  );
}
