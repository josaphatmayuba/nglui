import type { ReactNode } from "react";
import { useState } from "react";
import { colors, spacing, typography } from "./tokens.js";

export interface AccordionItem {
  key: string;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenKey?: string;
}

export function Accordion({ items, defaultOpenKey }: AccordionProps) {
  const [openKey, setOpenKey] = useState<string | null>(defaultOpenKey ?? null);

  return (
    <div
      style={{
        fontFamily: typography.fontFamily,
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      {items.map((item) => {
        const open = item.key === openKey;
        return (
          <div
            key={item.key}
            style={{ borderBottom: `1px solid ${colors.border}` }}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenKey(open ? null : item.key)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: `${spacing.md} 0`,
                fontFamily: typography.fontFamily,
                fontWeight: typography.weightBold,
                fontSize: "15px",
                color: colors.text,
                textAlign: "left",
              }}
            >
              {item.title}
              <span
                style={{
                  color: colors.primary,
                  transform: open ? "rotate(180deg)" : "none",
                }}
              >
                ▾
              </span>
            </button>
            {open && (
              <div
                style={{
                  paddingBottom: spacing.md,
                  color: colors.textMuted,
                  fontSize: "14px",
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
