import type { HTMLAttributes, MouseEvent, ReactNode } from "react";
import { colors, radii, shadows, spacing, typography } from "./tokens.js";

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
}

export function Modal({ open, onClose, title, children, style, ...rest }: ModalProps) {
  if (!open) return null;

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) onClose?.();
  }

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(17, 24, 39, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: spacing.lg,
        zIndex: 1000,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        {...rest}
        style={{
          backgroundColor: colors.surface,
          borderRadius: radii.lg,
          boxShadow: shadows.md,
          padding: spacing.lg,
          maxWidth: "480px",
          width: "100%",
          fontFamily: typography.fontFamily,
          ...style,
        }}
      >
        {title && (
          <h3 style={{ margin: `0 0 ${spacing.md}`, color: colors.primary }}>{title}</h3>
        )}
        {children}
      </div>
    </div>
  );
}
