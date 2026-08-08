import type { HTMLAttributes } from "react";
import { useEffect } from "react";
import { colors } from "./tokens.js";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: number;
}

const KEYFRAMES_ID = "nglui-spinner-keyframes";

function ensureKeyframes() {
  if (typeof document === "undefined" || document.getElementById(KEYFRAMES_ID))
    return;
  const styleEl = document.createElement("style");
  styleEl.id = KEYFRAMES_ID;
  styleEl.textContent =
    "@keyframes nglui-spin { to { transform: rotate(360deg); } }";
  document.head.appendChild(styleEl);
}

export function Spinner({ size = 20, style, ...rest }: SpinnerProps) {
  useEffect(ensureKeyframes, []);

  return (
    <span
      role="status"
      aria-label="Loading"
      {...rest}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        border: `2px solid ${colors.border}`,
        borderTopColor: colors.primary,
        borderRadius: "50%",
        animation: "nglui-spin 0.7s linear infinite",
        ...style,
      }}
    />
  );
}
