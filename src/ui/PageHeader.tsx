import type { HTMLAttributes, ReactNode } from "react";
import { colors, spacing, typography } from "./tokens.js";

export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title: ReactNode;
  subtitle?: ReactNode;
}

export function PageHeader({ title, subtitle, style, ...rest }: PageHeaderProps) {
  return (
    <header
      {...rest}
      style={{
        backgroundColor: colors.primary,
        color: colors.textOnPrimary,
        fontFamily: typography.fontFamily,
        textAlign: "center",
        padding: `${spacing.xl} ${spacing.lg}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: spacing.md,
        ...style,
      }}
    >
      <h1 style={{ margin: 0, fontSize: "36px", fontWeight: typography.weightBold }}>{title}</h1>
      {subtitle && (
        <p style={{ margin: 0, fontSize: "16px", fontWeight: typography.weightRegular, maxWidth: "640px" }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
