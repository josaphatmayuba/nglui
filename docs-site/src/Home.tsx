import { colors, typography, spacing } from "nglui/ui";
import { registry } from "./registry.js";

export function Home() {
  return (
    <div>
      <h1 style={{ color: colors.primary, fontFamily: typography.fontFamily }}>
        nglui/ui
      </h1>
      <p
        style={{
          color: colors.textMuted,
          fontFamily: typography.fontFamily,
          maxWidth: "560px",
        }}
      >
        Galerie de tous les composants React de <code>nglui/ui</code>, rendus en
        direct depuis le build compilé de la librairie. Choisissez un composant
        dans le menu à gauche.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: spacing.sm,
          marginTop: spacing.lg,
        }}
      >
        {registry.map((group) => (
          <div
            key={group.title}
            style={{
              fontFamily: typography.fontFamily,
              fontSize: "14px",
              color: colors.text,
            }}
          >
            <strong>{group.title}</strong> — {group.items.join(", ")}
          </div>
        ))}
      </div>
    </div>
  );
}
