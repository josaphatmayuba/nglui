import type { ReactNode } from "react";
import { useState } from "react";
import { colors, spacing, typography } from "./tokens.js";
import { Badge } from "./Badge.js";
import { Button } from "./Button.js";

export interface FeaturedHeroSlide {
  key: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  image?: ReactNode;
}

export interface FeaturedHeroProps {
  slides: FeaturedHeroSlide[];
}

export function FeaturedHero({ slides }: FeaturedHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];
  if (!slide) return null;

  return (
    <section
      style={{
        backgroundColor: colors.primary,
        color: colors.textOnPrimary,
        fontFamily: typography.fontFamily,
        padding: `${spacing.xl} ${spacing.lg}`,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: spacing.xl,
      }}
    >
      <div
        style={{
          flex: "1 1 320px",
          display: "flex",
          flexDirection: "column",
          gap: spacing.md,
        }}
      >
        {slide.eyebrow && <Badge tone="accent">{slide.eyebrow}</Badge>}
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: typography.weightBold,
            lineHeight: 1.2,
          }}
        >
          {slide.title}
        </h1>
        {slide.description && (
          <p style={{ margin: 0, fontSize: "15px", opacity: 0.9 }}>
            {slide.description}
          </p>
        )}
        {slide.ctaLabel && slide.ctaHref && (
          <a
            href={slide.ctaHref}
            style={{ textDecoration: "none", alignSelf: "flex-start" }}
          >
            <Button variant="accent">{slide.ctaLabel} →</Button>
          </a>
        )}
      </div>

      {slide.image && <div style={{ flex: "1 1 320px" }}>{slide.image}</div>}

      {slides.length > 1 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: spacing.xs,
          }}
        >
          {slides.map((s, index) => (
            <button
              key={s.key}
              type="button"
              aria-label={`Aller à la diapositive ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  index === activeIndex
                    ? colors.accent
                    : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
