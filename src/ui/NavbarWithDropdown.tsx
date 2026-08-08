import type { ReactNode } from "react";
import { useState } from "react";
import { colors, radii, shadows, spacing, typography } from "./tokens.js";

export interface NavDropdownItem {
  label: string;
  description?: string;
  href: string;
  icon?: ReactNode;
}

export interface NavLink {
  key: string;
  label: string;
  href?: string;
  items?: NavDropdownItem[];
}

export interface NavbarWithDropdownProps {
  logo?: ReactNode;
  links: NavLink[];
}

export function NavbarWithDropdown({ logo, links }: NavbarWithDropdownProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const openLink = links.find((link) => link.key === openKey);

  return (
    <div
      style={{ position: "relative" }}
      onMouseLeave={() => setOpenKey(null)}
    >
      <header
        style={{
          backgroundColor: colors.primary,
          color: colors.textOnPrimary,
          fontFamily: typography.fontFamily,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `${spacing.md} ${spacing.lg}`,
        }}
      >
        {logo && (
          <div
            style={{ display: "flex", alignItems: "center", gap: spacing.sm }}
          >
            {logo}
          </div>
        )}
        <nav style={{ display: "flex", alignItems: "center", gap: spacing.lg }}>
          {links.map((link) => {
            const active = link.key === openKey;
            return (
              <a
                key={link.key}
                href={link.href ?? "#"}
                onMouseEnter={() => setOpenKey(link.items ? link.key : null)}
                style={{
                  color: colors.textOnPrimary,
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: typography.weightRegular,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: spacing.xs,
                  padding: `${spacing.xs} ${spacing.sm}`,
                  borderRadius: radii.sm,
                  backgroundColor: active
                    ? "rgba(255, 255, 255, 0.12)"
                    : "transparent",
                }}
              >
                {link.label}
                {link.items && (
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      transform: active ? "rotate(180deg)" : "none",
                      transition: "transform 0.15s ease",
                    }}
                  >
                    ▾
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </header>

      {openLink?.items && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: colors.surface,
            boxShadow: shadows.md,
            padding: spacing.xl,
            zIndex: 10,
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: spacing.lg,
          }}
        >
          {openLink.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: spacing.md,
                textDecoration: "none",
                color: colors.text,
                padding: spacing.sm,
                borderRadius: radii.md,
              }}
            >
              {item.icon && (
                <span
                  style={{
                    color: colors.primary,
                    flexShrink: 0,
                    display: "flex",
                    marginTop: "2px",
                  }}
                >
                  {item.icon}
                </span>
              )}
              <span>
                <span
                  style={{
                    display: "block",
                    fontWeight: typography.weightBold,
                    fontSize: "15px",
                  }}
                >
                  {item.label}
                </span>
                {item.description && (
                  <span
                    style={{
                      display: "block",
                      fontSize: "13px",
                      color: colors.textMuted,
                      marginTop: "2px",
                    }}
                  >
                    {item.description}
                  </span>
                )}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
