import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import { colors, typography, spacing } from "nglui/ui";
import { registry, allComponents } from "./registry.js";
import { pages } from "./pages/index.js";
import { Home } from "./Home.js";

export function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: typography.fontFamily,
      }}
    >
      <aside
        style={{
          width: "240px",
          flexShrink: 0,
          borderRight: `1px solid ${colors.border}`,
          padding: spacing.lg,
          overflowY: "auto",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: colors.primary,
            fontWeight: typography.weightBold,
            fontSize: "18px",
          }}
        >
          nglui/ui
        </NavLink>
        <p
          style={{
            color: colors.textMuted,
            fontSize: "12px",
            marginTop: spacing.xs,
          }}
        >
          {allComponents.length} composants
        </p>

        {registry.map((group) => (
          <div key={group.title} style={{ marginTop: spacing.lg }}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: typography.weightBold,
                color: colors.textMuted,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginBottom: spacing.sm,
              }}
            >
              {group.title}
            </div>
            <nav
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              {group.items.map((name) => (
                <NavLink
                  key={name}
                  to={`/component/${name}`}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    fontSize: "14px",
                    padding: `${spacing.xs} ${spacing.sm}`,
                    borderRadius: "6px",
                    color: isActive ? colors.textOnPrimary : colors.text,
                    backgroundColor: isActive ? colors.primary : "transparent",
                  })}
                >
                  {name}
                </NavLink>
              ))}
            </nav>
          </div>
        ))}
      </aside>

      <main style={{ flex: 1, padding: spacing.xl, maxWidth: "1000px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {allComponents.map((name) => {
            const Page = pages[name];
            return (
              <Route
                key={name}
                path={`/component/${name}`}
                element={Page ? <Page /> : <Navigate to="/" replace />}
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
