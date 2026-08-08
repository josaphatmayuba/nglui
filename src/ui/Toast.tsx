import type { HTMLAttributes } from "react";
import { colors, radii, shadows, spacing, typography } from "./tokens.js";
import type { AlertTone } from "./Alert.js";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone;
  onDismiss?: () => void;
}

const toneAccents: Record<AlertTone, string> = {
  info: colors.info,
  success: "rgb(21, 128, 61)",
  warning: colors.warning,
  error: colors.accentDark,
};

export function Toast({ tone = "info", onDismiss, style, children, ...rest }: ToastProps) {
  return (
    <div
      role="status"
      {...rest}
      style={{
        display: "flex",
        alignItems: "center",
        gap: spacing.md,
        backgroundColor: colors.surface,
        color: colors.text,
        borderLeft: `4px solid ${toneAccents[tone]}`,
        borderRadius: radii.md,
        boxShadow: shadows.md,
        padding: `${spacing.sm} ${spacing.md}`,
        fontFamily: typography.fontFamily,
        fontSize: "14px",
        maxWidth: "360px",
        ...style,
      }}
    >
      <div style={{ flex: 1 }}>{children}</div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Fermer"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: colors.textMuted,
            fontSize: "16px",
            lineHeight: 1,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
