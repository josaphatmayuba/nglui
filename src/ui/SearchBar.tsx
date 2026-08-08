import type { InputHTMLAttributes } from "react";
import { colors, radii, spacing, typography } from "./tokens.js";

export type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function SearchBar({ style, ...rest }: SearchBarProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: spacing.sm,
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: radii.pill,
        padding: `${spacing.sm} ${spacing.md}`,
      }}
    >
      <span style={{ color: colors.textMuted, display: "flex" }}>
        <SearchIcon />
      </span>
      <input
        type="search"
        {...rest}
        style={{
          border: "none",
          outline: "none",
          flex: 1,
          fontFamily: typography.fontFamily,
          fontSize: "15px",
          color: colors.text,
          backgroundColor: "transparent",
          ...style,
        }}
      />
    </div>
  );
}
