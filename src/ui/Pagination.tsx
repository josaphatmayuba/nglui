import { colors, radii, spacing, typography } from "./tokens.js";

export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}

function pageNumbers(page: number, pageCount: number): number[] {
  const start = Math.max(1, page - 2);
  const end = Math.min(pageCount, start + 4);
  const adjustedStart = Math.max(1, end - 4);
  const result: number[] = [];
  for (let i = adjustedStart; i <= end; i++) result.push(i);
  return result;
}

export function Pagination({ page, pageCount, onChange }: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      style={{
        display: "flex",
        alignItems: "center",
        gap: spacing.xs,
        fontFamily: typography.fontFamily,
      }}
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        aria-label="Page précédente"
        style={navButtonStyle(false, page <= 1)}
      >
        ‹
      </button>
      {pageNumbers(page, pageCount).map((n) => (
        <button
          key={n}
          type="button"
          aria-current={n === page ? "page" : undefined}
          onClick={() => onChange(n)}
          style={navButtonStyle(n === page, false)}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        disabled={page >= pageCount}
        onClick={() => onChange(page + 1)}
        aria-label="Page suivante"
        style={navButtonStyle(false, page >= pageCount)}
      >
        ›
      </button>
    </nav>
  );
}

function navButtonStyle(active: boolean, disabled: boolean) {
  return {
    minWidth: "32px",
    height: "32px",
    padding: `0 ${spacing.sm}`,
    borderRadius: radii.sm,
    border: `1px solid ${active ? colors.primary : colors.border}`,
    backgroundColor: active ? colors.primary : colors.surface,
    color: active ? colors.textOnPrimary : colors.text,
    fontFamily: typography.fontFamily,
    fontWeight: active ? typography.weightBold : typography.weightRegular,
    fontSize: "14px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };
}
