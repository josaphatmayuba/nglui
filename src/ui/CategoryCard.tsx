import type { HTMLAttributes, ReactNode } from "react";
import { colors, radii, shadows, spacing, typography } from "./tokens.js";

export interface CategoryCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  category: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  downloadHref?: string;
  detailHref?: string;
}

export function CategoryCard({
  category,
  title,
  meta,
  downloadHref,
  detailHref,
  style,
  ...rest
}: CategoryCardProps) {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${colors.border}`,
        borderRadius: radii.lg,
        boxShadow: shadows.sm,
        overflow: "hidden",
        fontFamily: typography.fontFamily,
        backgroundColor: colors.surface,
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: colors.primary,
          color: colors.textOnPrimary,
          padding: spacing.lg,
          fontWeight: typography.weightBold,
          fontSize: "13px",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {category}
      </div>
      <div
        style={{
          padding: spacing.lg,
          display: "flex",
          flexDirection: "column",
          gap: spacing.sm,
          flex: 1,
        }}
      >
        <h3 style={{ margin: 0, fontSize: "16px", color: colors.text }}>
          {title}
        </h3>
        {meta && (
          <p style={{ margin: 0, fontSize: "13px", color: colors.textMuted }}>
            {meta}
          </p>
        )}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: spacing.sm,
            paddingTop: spacing.sm,
          }}
        >
          {downloadHref && (
            <a
              href={downloadHref}
              style={{
                textAlign: "center",
                backgroundColor: colors.accent,
                color: colors.textOnPrimary,
                borderRadius: radii.pill,
                padding: `${spacing.sm} ${spacing.lg}`,
                fontWeight: typography.weightBold,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Télécharger
            </a>
          )}
          {detailHref && (
            <a
              href={detailHref}
              style={{
                textAlign: "center",
                backgroundColor: "transparent",
                color: colors.primary,
                border: `1px solid ${colors.primary}`,
                borderRadius: radii.pill,
                padding: `${spacing.sm} ${spacing.lg}`,
                fontWeight: typography.weightBold,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Voir le détail
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
