import type { HTMLAttributes } from "react";
import { colors, radii, spacing, typography } from "./tokens.js";

export type AlertTone = "info" | "success" | "warning" | "error";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone;
}

const toneStyles: Record<AlertTone, { background: string; border: string; color: string }> = {
  info: { background: "rgb(224, 242, 254)", border: colors.info, color: "rgb(12, 74, 110)" },
  success: { background: "rgb(220, 252, 231)", border: "rgb(21, 128, 61)", color: "rgb(20, 83, 45)" },
  warning: { background: "rgb(254, 249, 195)", border: colors.warning, color: "rgb(113, 63, 18)" },
  error: { background: "rgb(254, 226, 226)", border: colors.accentDark, color: "rgb(127, 29, 29)" },
};

export function Alert({ tone = "info", style, ...rest }: AlertProps) {
  const toneStyle = toneStyles[tone];
  return (
    <div
      role="alert"
      {...rest}
      style={{
        fontFamily: typography.fontFamily,
        fontSize: "14px",
        fontWeight: typography.weightRegular,
        backgroundColor: toneStyle.background,
        color: toneStyle.color,
        borderLeft: `4px solid ${toneStyle.border}`,
        borderRadius: radii.sm,
        padding: `${spacing.sm} ${spacing.md}`,
        ...style,
      }}
    />
  );
}
