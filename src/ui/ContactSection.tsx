import type { FormEvent, ReactNode } from "react";
import { colors, radii, shadows, spacing, typography } from "./tokens.js";
import { InfoBlock, type InfoBlockProps } from "./InfoBlock.js";
import { FormGrid } from "./FormGrid.js";
import { Input } from "./Input.js";
import { Button } from "./Button.js";

export interface ContactSectionProps {
  title: ReactNode;
  description?: ReactNode;
  infoTitle: ReactNode;
  infoItems: (Omit<InfoBlockProps, "style"> & { key: string; text: ReactNode })[];
  formTitle: ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  submitLabel?: string;
}

export function ContactSection({
  title,
  description,
  infoTitle,
  infoItems,
  formTitle,
  onSubmit,
  submitLabel = "Envoyer",
}: ContactSectionProps) {
  return (
    <section style={{ fontFamily: typography.fontFamily }}>
      <div style={{ backgroundColor: colors.primary, color: colors.textOnPrimary, textAlign: "center", padding: `${spacing.xl} ${spacing.lg}` }}>
        <h1 style={{ margin: `0 0 ${spacing.sm}`, fontSize: "32px", fontWeight: typography.weightBold }}>{title}</h1>
        {description && <p style={{ margin: 0, fontSize: "15px", opacity: 0.9 }}>{description}</p>}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: spacing.lg,
          padding: spacing.lg,
        }}
      >
        <div style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}`, borderRadius: radii.lg, boxShadow: shadows.sm, padding: spacing.lg }}>
          <h3 style={{ margin: `0 0 ${spacing.md}`, color: colors.primary }}>{infoTitle}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: spacing.md }}>
            {infoItems.map(({ key, text, ...blockProps }) => (
              <InfoBlock key={key} {...blockProps}>
                {text}
              </InfoBlock>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}`, borderRadius: radii.lg, boxShadow: shadows.sm, padding: spacing.lg }}>
          <h3 style={{ margin: `0 0 ${spacing.md}`, color: colors.primary }}>{formTitle}</h3>
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: spacing.md }}>
            <FormGrid columns={2}>
              <Input name="firstName" label="Prénom" placeholder="Votre prénom…" />
              <Input name="lastName" label="Nom" placeholder="Votre nom…" />
            </FormGrid>
            <FormGrid columns={2}>
              <Input name="email" type="email" label="Email" placeholder="vous@exemple.com" />
              <Input name="phone" type="tel" label="Téléphone" placeholder="Votre numéro…" />
            </FormGrid>
            <Input name="subject" label="Sujet" placeholder="Sujet de votre message…" />
            <Button type="submit" variant="primary">
              {submitLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
