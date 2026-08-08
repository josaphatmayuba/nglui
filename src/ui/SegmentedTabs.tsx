import { colors, radii, spacing, typography } from "./tokens.js";
import type { TabItem } from "./Tabs.js";

export interface SegmentedTabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

export function SegmentedTabs({
  items,
  activeKey,
  onChange,
}: SegmentedTabsProps) {
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        backgroundColor: colors.surfaceMuted,
        borderRadius: radii.pill,
        padding: spacing.xs,
        gap: spacing.xs,
        fontFamily: typography.fontFamily,
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
              border: "none",
              borderRadius: radii.pill,
              padding: `${spacing.sm} ${spacing.lg}`,
              fontFamily: typography.fontFamily,
              fontWeight: typography.weightBold,
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: active ? colors.primary : "transparent",
              color: active ? colors.textOnPrimary : colors.textMuted,
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
