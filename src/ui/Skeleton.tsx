import type { HTMLAttributes } from "react";
import { useEffect } from "react";
import { colors, radii } from "./tokens.js";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

const KEYFRAMES_ID = "nglui-skeleton-keyframes";

function ensureKeyframes() {
  if (typeof document === "undefined" || document.getElementById(KEYFRAMES_ID))
    return;
  const styleEl = document.createElement("style");
  styleEl.id = KEYFRAMES_ID;
  styleEl.textContent =
    "@keyframes nglui-skeleton-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }";
  document.head.appendChild(styleEl);
}

export function Skeleton({
  width = "100%",
  height = "16px",
  style,
  ...rest
}: SkeletonProps) {
  useEffect(ensureKeyframes, []);

  return (
    <div
      {...rest}
      style={{
        width,
        height,
        backgroundColor: colors.surfaceMuted,
        borderRadius: radii.sm,
        animation: "nglui-skeleton-pulse 1.5s ease-in-out infinite",
        ...style,
      }}
    />
  );
}
