import type { ReactNode } from "react";
import { colors, radii, spacing } from "./tokens.js";

export type ViewMode = "grid" | "list";

export interface ViewToggleProps {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  const options: { mode: ViewMode; icon: ReactNode; label: string }[] = [
    { mode: "grid", icon: <GridIcon />, label: "Vue grille" },
    { mode: "list", icon: <ListIcon />, label: "Vue liste" },
  ];

  return (
    <div style={{ display: "inline-flex", gap: spacing.xs, backgroundColor: colors.surfaceMuted, padding: spacing.xs, borderRadius: radii.sm }}>
      {options.map((option) => {
        const active = option.mode === value;
        return (
          <button
            key={option.mode}
            type="button"
            aria-label={option.label}
            aria-pressed={active}
            onClick={() => onChange(option.mode)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              border: "none",
              borderRadius: radii.sm,
              cursor: "pointer",
              backgroundColor: active ? colors.primary : "transparent",
              color: active ? colors.textOnPrimary : colors.textMuted,
            }}
          >
            {option.icon}
          </button>
        );
      })}
    </div>
  );
}
