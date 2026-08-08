export const colors = {
  primary: "rgb(39, 66, 133)",
  primaryDark: "rgb(15, 53, 104)",
  accent: "rgb(226, 62, 78)",
  accentDark: "rgb(199, 53, 68)",
  info: "rgb(15, 137, 203)",
  warning: "rgb(237, 183, 23)",
  surface: "rgb(255, 255, 255)",
  surfaceMuted: "rgb(243, 244, 246)",
  surfaceSubtle: "rgb(249, 250, 251)",
  border: "rgb(229, 231, 235)",
  text: "rgb(17, 24, 39)",
  textMuted: "rgb(107, 114, 128)",
  textOnPrimary: "rgb(255, 255, 255)",
} as const;

export const radii = {
  sm: "6px",
  md: "10px",
  lg: "16px",
  pill: "999px",
} as const;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
} as const;

export const typography = {
  fontFamily:
    '"Cooper Hewitt", ui-sans-serif, system-ui, sans-serif, system-ui, sans-serif',
  weightRegular: 500,
  weightBold: 700,
} as const;

export const shadows = {
  sm: "0 1px 2px rgba(17, 24, 39, 0.08)",
  md: "0 4px 12px rgba(17, 24, 39, 0.1)",
} as const;
