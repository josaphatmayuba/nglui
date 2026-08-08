import type { ReactNode } from "react";
import { useState } from "react";
import { colors, radii, shadows, spacing, typography } from "./tokens.js";

export interface NavDropdownItem {
  label: string;
  href: string;
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

  return (
    <header
      style={{
        backgroundColor: colors.primary,
        color: colors.textOnPrimary,
        fontFamily: typography.fontFamily,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `${spacing.md} ${spacing.lg}`,
        position: "relative",
      }}
    >
      {logo && (
        <div style={{ display: "flex", alignItems: "center", gap: spacing.sm }}>
          {logo}
        </div>
      )}
      <nav style={{ display: "flex", alignItems: "center", gap: spacing.lg }}>
        {links.map((link) => (
          <div
            key={link.key}
            style={{ position: "relative" }}
            onMouseEnter={() => link.items && setOpenKey(link.key)}
            onMouseLeave={() => link.items && setOpenKey(null)}
          >
            <a
              href={link.href ?? "#"}
              style={{
                color: colors.textOnPrimary,
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: typography.weightRegular,
                display: "inline-flex",
                alignItems: "center",
                gap: spacing.xs,
              }}
            >
              {link.label}
              {link.items && <span aria-hidden="true">▾</span>}
            </a>
            {link.items && openKey === link.key && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  marginTop: spacing.sm,
                  backgroundColor: colors.surface,
                  borderRadius: radii.md,
                  boxShadow: shadows.md,
                  minWidth: "200px",
                  overflow: "hidden",
                  zIndex: 10,
                }}
              >
                {link.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "block",
                      padding: `${spacing.sm} ${spacing.md}`,
                      color: colors.text,
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
