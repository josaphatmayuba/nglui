import type { ReactNode } from "react";
import { colors, spacing, typography } from "./tokens.js";

export interface TableColumn<T> {
  key: string;
  header: ReactNode;
  render: (row: T) => ReactNode;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
}

export function Table<T>({ columns, rows, rowKey }: TableProps<T>) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontFamily: typography.fontFamily,
        fontSize: "14px",
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{
                textAlign: "left",
                padding: `${spacing.sm} ${spacing.md}`,
                borderBottom: `2px solid ${colors.border}`,
                color: colors.textMuted,
                fontWeight: typography.weightBold,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            key={rowKey(row)}
            style={{
              backgroundColor:
                index % 2 === 1 ? colors.surfaceSubtle : "transparent",
            }}
          >
            {columns.map((col) => (
              <td
                key={col.key}
                style={{
                  padding: `${spacing.sm} ${spacing.md}`,
                  borderBottom: `1px solid ${colors.border}`,
                  color: colors.text,
                }}
              >
                {col.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
