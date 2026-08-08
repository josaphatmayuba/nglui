import { useState } from "react";
import {
  Table,
  Avatar,
  ImageBadge,
  InfoBlock,
  Modal,
  Button,
  colors,
  spacing,
} from "nglui/ui";
import { Demo } from "../Demo.js";

interface Row {
  id: string;
  name: string;
  status: string;
}

const rows: Row[] = [
  { id: "1", name: "Compte Unique du Trésor", status: "En cours" },
  { id: "2", name: "Facture normalisée", status: "Planifiée" },
  { id: "3", name: "Masse salariale", status: "Terminée" },
];

export function TablePage() {
  return (
    <Demo name="Table" description="Data table with a typed columns/rows API.">
      <Table
        columns={[
          { key: "name", header: "Réforme", render: (r: Row) => r.name },
          { key: "status", header: "Statut", render: (r: Row) => r.status },
        ]}
        rows={rows}
        rowKey={(r) => r.id}
      />
    </Demo>
  );
}

export function AvatarPage() {
  return (
    <Demo
      name="Avatar"
      description="Image avatar or initials fallback (src, name, size)."
    >
      <div style={{ display: "flex", gap: spacing.md, alignItems: "center" }}>
        <Avatar name="Josaphat Mayuba" />
        <Avatar name="Jean Dupont" size={56} />
      </div>
    </Demo>
  );
}

export function ImageBadgePage() {
  return (
    <Demo
      name="ImageBadge"
      description="Absolutely positioned badge for overlaying an image corner."
    >
      <div
        style={{
          position: "relative",
          width: "220px",
          height: "140px",
          backgroundColor: colors.primary,
          borderRadius: "12px",
        }}
      >
        <ImageBadge tone="accent" corner="top-left">
          Urgent
        </ImageBadge>
      </div>
    </Demo>
  );
}

export function InfoBlockPage() {
  return (
    <Demo
      name="InfoBlock"
      description="Icon + title + description row, e.g. contact details."
    >
      <InfoBlock icon="📍" title="Adresse">
        Centre financier de Kinshasa, Kinshasa - Gombe, RDC
      </InfoBlock>
    </Demo>
  );
}

export function ModalPage() {
  const [open, setOpen] = useState(false);
  return (
    <Demo name="Modal" description="Overlay dialog (open, onClose, title).">
      <Button variant="primary" onClick={() => setOpen(true)}>
        Ouvrir la modale
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Titre de la modale"
      >
        <p>Contenu de la modale.</p>
        <Button variant="outline" onClick={() => setOpen(false)}>
          Fermer
        </Button>
      </Modal>
    </Demo>
  );
}
