import { colors, radii, typography, spacing } from "./tokens.js";

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Switch({ checked, onChange, label, disabled = false }: SwitchProps) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: spacing.sm,
        fontFamily: typography.fontFamily,
        fontSize: "14px",
        color: colors.text,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        style={{
          width: "36px",
          height: "20px",
          borderRadius: radii.pill,
          border: "none",
          padding: "2px",
          backgroundColor: checked ? colors.primary : colors.border,
          cursor: disabled ? "not-allowed" : "pointer",
          display: "flex",
          justifyContent: checked ? "flex-end" : "flex-start",
        }}
      >
        <span
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: colors.surface,
            display: "block",
          }}
        />
      </button>
      {label}
    </label>
  );
}
