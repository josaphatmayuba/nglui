import type { ReactNode } from "react";
import { colors, typography, spacing, radii } from "nglui/ui";

export interface DemoProps {
  name: string;
  description: string;
  children: ReactNode;
}

export function Demo({ name, description, children }: DemoProps) {
  return (
    <div style={{ fontFamily: typography.fontFamily }}>
      <h1 style={{ color: colors.primary, marginBottom: spacing.xs }}>
        {name}
      </h1>
      <p
        style={{
          color: colors.textMuted,
          maxWidth: "560px",
          marginBottom: spacing.lg,
        }}
      >
        {description}
      </p>
      <div
        style={{
          border: `1px solid ${colors.border}`,
          borderRadius: radii.lg,
          padding: spacing.xl,
          backgroundColor: colors.surfaceSubtle,
        }}
      >
        {children}
      </div>
    </div>
  );
}
