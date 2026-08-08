import type { InputHTMLAttributes } from "react";
import { useId, useState } from "react";
import { colors, radii, spacing, typography } from "./tokens.js";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, style, onFocus, onBlur, ...rest }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: spacing.xs, fontFamily: typography.fontFamily }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{ fontSize: "14px", fontWeight: typography.weightBold, color: colors.text }}
        >
          {label}
        </label>
      )}
      <input
        {...rest}
        id={inputId}
        onFocus={(event) => {
          setFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          onBlur?.(event);
        }}
        style={{
          fontFamily: typography.fontFamily,
          fontSize: "16px",
          padding: `${spacing.sm} ${spacing.md}`,
          borderRadius: radii.sm,
          border: `1px solid ${focused ? colors.primary : colors.border}`,
          outline: "none",
          color: colors.text,
          backgroundColor: colors.surface,
          ...style,
        }}
      />
    </div>
  );
}
