import { Badge, Tag, Alert, Toast, Skeleton, Spinner, spacing } from "nglui/ui";
import { Demo } from "../Demo.js";

export function BadgePage() {
  return (
    <Demo
      name="Badge"
      description="Tones: primary, accent, info, warning, neutral."
    >
      <div style={{ display: "flex", gap: spacing.sm, flexWrap: "wrap" }}>
        <Badge tone="primary">Primary</Badge>
        <Badge tone="accent">Accent</Badge>
        <Badge tone="info">Info</Badge>
        <Badge tone="warning">Warning</Badge>
        <Badge tone="neutral">Neutral</Badge>
      </div>
    </Demo>
  );
}

export function TagPage() {
  return (
    <Demo name="Tag" description="Selectable pill button (selected state).">
      <div style={{ display: "flex", gap: spacing.sm }}>
        <Tag>Tag</Tag>
        <Tag selected>Tag actif</Tag>
      </div>
    </Demo>
  );
}

export function AlertPage() {
  return (
    <Demo name="Alert" description="Tones: info, success, warning, error.">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: spacing.sm,
          maxWidth: "420px",
        }}
      >
        <Alert tone="info">Information générale.</Alert>
        <Alert tone="success">Opération réussie.</Alert>
        <Alert tone="warning">Vérifiez vos informations.</Alert>
        <Alert tone="error">Une erreur est survenue.</Alert>
      </div>
    </Demo>
  );
}

export function ToastPage() {
  return (
    <Demo name="Toast" description="Dismissible inline notification.">
      <Toast tone="success" onDismiss={() => {}}>
        Modifications enregistrées avec succès.
      </Toast>
    </Demo>
  );
}

export function SkeletonPage() {
  return (
    <Demo
      name="Skeleton"
      description="Pulsing placeholder block for loading states."
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: spacing.sm,
          maxWidth: "280px",
        }}
      >
        <Skeleton height={16} width="80%" />
        <Skeleton height={16} width="60%" />
        <Skeleton height={80} />
      </div>
    </Demo>
  );
}

export function SpinnerPage() {
  return (
    <Demo name="Spinner" description="Small loading indicator.">
      <Spinner size={28} />
    </Demo>
  );
}
