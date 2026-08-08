import type { HTMLAttributes, ReactNode } from "react";
import { colors, spacing, typography } from "./tokens.js";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
}

export function Navbar({ logo, children, style, ...rest }: NavbarProps) {
  return (
    <header
      {...rest}
      style={{
        backgroundColor: colors.primary,
        color: colors.textOnPrimary,
        fontFamily: typography.fontFamily,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `${spacing.md} ${spacing.lg}`,
        ...style,
      }}
    >
      {logo && (
        <div style={{ display: "flex", alignItems: "center", gap: spacing.sm }}>
          {logo}
        </div>
      )}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: spacing.lg,
          fontWeight: typography.weightRegular,
        }}
      >
        {children}
      </nav>
    </header>
  );
}
