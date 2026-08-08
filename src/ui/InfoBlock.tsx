import type { HTMLAttributes, ReactNode } from "react";
import { colors, radii, spacing, typography } from "./tokens.js";

export interface InfoBlockProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  icon: ReactNode;
  title: ReactNode;
}

export function InfoBlock({
  icon,
  title,
  children,
  style,
  ...rest
}: InfoBlockProps) {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        gap: spacing.md,
        fontFamily: typography.fontFamily,
        ...style,
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: "36px",
          height: "36px",
          borderRadius: radii.md,
          backgroundColor: colors.surfaceMuted,
          color: colors.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontWeight: typography.weightBold,
            color: colors.text,
            marginBottom: spacing.xs,
          }}
        >
          {title}
        </div>
        <div style={{ color: colors.textMuted, fontSize: "14px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
