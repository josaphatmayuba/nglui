import type { ReactNode } from "react";
import { colors, spacing, typography } from "./tokens.js";
import { Grid } from "./Grid.js";
import { CategoryCard, type CategoryCardProps } from "./CategoryCard.js";
import { Button } from "./Button.js";

export interface CategorySectionProps {
  title: ReactNode;
  items: (Omit<CategoryCardProps, "style"> & { key: string })[];
  seeAllLabel?: string;
  seeAllHref?: string;
  columns?: number;
}

export function CategorySection({
  title,
  items,
  seeAllLabel,
  seeAllHref,
  columns = 4,
}: CategorySectionProps) {
  return (
    <section
      style={{
        fontFamily: typography.fontFamily,
        padding: `${spacing.xl} ${spacing.lg}`,
        display: "flex",
        flexDirection: "column",
        gap: spacing.lg,
      }}
    >
      <h2
        style={{
          margin: 0,
          color: colors.primary,
          fontSize: "24px",
          fontWeight: typography.weightBold,
        }}
      >
        {title}
      </h2>
      <Grid columns={columns} gap="md">
        {items.map(({ key, ...cardProps }) => (
          <CategoryCard key={key} {...cardProps} />
        ))}
      </Grid>
      {seeAllLabel && seeAllHref && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href={seeAllHref} style={{ textDecoration: "none" }}>
            <Button variant="primary">{seeAllLabel} →</Button>
          </a>
        </div>
      )}
    </section>
  );
}
