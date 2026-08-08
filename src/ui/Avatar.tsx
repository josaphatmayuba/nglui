import type { HTMLAttributes } from "react";
import { colors, typography } from "./tokens.js";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  name?: string;
  size?: number;
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("");
}

export function Avatar({ src, name, size = 40, style, ...rest }: AvatarProps) {
  const base = {
    width: size,
    height: size,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flexShrink: 0,
    ...style,
  };

  if (src) {
    return (
      <div {...rest} style={base}>
        <img
          src={src}
          alt={name ?? ""}
          width={size}
          height={size}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <div
      {...rest}
      style={{
        ...base,
        backgroundColor: colors.primary,
        color: colors.textOnPrimary,
        fontFamily: typography.fontFamily,
        fontWeight: typography.weightBold,
        fontSize: size * 0.4,
      }}
    >
      {name ? initials(name) : ""}
    </div>
  );
}
