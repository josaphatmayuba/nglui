import type { HTMLAttributes } from "react";
import { colors, spacing, typography } from "./tokens.js";

export interface TabItem {
  key: string;
  label: string;
}

export interface TabsProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

export function Tabs({
  items,
  activeKey,
  onChange,
  style,
  ...rest
}: TabsProps) {
  return (
    <div
      role="tablist"
      {...rest}
      style={{
        display: "flex",
        gap: spacing.lg,
        borderBottom: `1px solid ${colors.border}`,
        fontFamily: typography.fontFamily,
        ...style,
      }}
    >
      {items.map((item) => {
        const active = item.key === activeKey;
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.key)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: `${spacing.sm} 0`,
              fontFamily: typography.fontFamily,
              fontWeight: active
                ? typography.weightBold
                : typography.weightRegular,
              fontSize: "15px",
              color: active ? colors.primary : colors.textMuted,
              borderBottom: `2px solid ${active ? colors.primary : "transparent"}`,
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
