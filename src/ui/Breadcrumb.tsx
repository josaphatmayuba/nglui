import type { HTMLAttributes } from "react";
import { colors, spacing, typography } from "./tokens.js";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items, style, ...rest }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      {...rest}
      style={{
        display: "flex",
        alignItems: "center",
        gap: spacing.xs,
        fontFamily: typography.fontFamily,
        fontSize: "14px",
        color: colors.textMuted,
        ...style,
      }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span
            key={`${item.label}-${index}`}
            style={{ display: "flex", alignItems: "center", gap: spacing.xs }}
          >
            {item.href && !isLast ? (
              <a
                href={item.href}
                style={{ color: colors.primary, textDecoration: "none" }}
              >
                {item.label}
              </a>
            ) : (
              <span
                style={{
                  color: isLast ? colors.text : colors.textMuted,
                  fontWeight: isLast
                    ? typography.weightBold
                    : typography.weightRegular,
                }}
              >
                {item.label}
              </span>
            )}
            {!isLast && <span aria-hidden="true">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
