import { useState } from "react";
import {
  Tabs,
  SegmentedTabs,
  Breadcrumb,
  Pagination,
  ViewToggle,
  Accordion,
} from "nglui/ui";
import { Demo } from "../Demo.js";

const tabItems = [
  { key: "overview", label: "Aperçu" },
  { key: "docs", label: "Documentation" },
  { key: "examples", label: "Exemples" },
];

export function TabsPage() {
  const [active, setActive] = useState("overview");
  return (
    <Demo
      name="Tabs"
      description="Tab list driven by items + activeKey/onChange, underline style."
    >
      <Tabs items={tabItems} activeKey={active} onChange={setActive} />
    </Demo>
  );
}

export function SegmentedTabsPage() {
  const [active, setActive] = useState("overview");
  return (
    <Demo
      name="SegmentedTabs"
      description="Pill-style tab group (alternative to Tabs' underline style)."
    >
      <SegmentedTabs items={tabItems} activeKey={active} onChange={setActive} />
    </Demo>
  );
}

export function BreadcrumbPage() {
  return (
    <Demo
      name="Breadcrumb"
      description="Linked trail built from an items array."
    >
      <Breadcrumb
        items={[
          { label: "Accueil", href: "#" },
          { label: "Composants", href: "#" },
          { label: "Breadcrumb" },
        ]}
      />
    </Demo>
  );
}

export function PaginationPage() {
  const [page, setPage] = useState(3);
  return (
    <Demo
      name="Pagination"
      description="Page number navigation with prev/next controls."
    >
      <Pagination page={page} pageCount={10} onChange={setPage} />
    </Demo>
  );
}

export function ViewTogglePage() {
  const [mode, setMode] = useState<"grid" | "list">("grid");
  return (
    <Demo
      name="ViewToggle"
      description="Grid/list view switcher (value, onChange)."
    >
      <ViewToggle value={mode} onChange={setMode} />
    </Demo>
  );
}

export function AccordionPage() {
  return (
    <Demo
      name="Accordion"
      description="Collapsible sections driven by an items array."
    >
      <Accordion
        defaultOpenKey="q1"
        items={[
          {
            key: "q1",
            title: "Qu'est-ce que nglui/ui ?",
            content:
              "Un ensemble de composants React inspirés du style institutionnel.",
          },
          {
            key: "q2",
            title: "Faut-il installer du CSS ?",
            content: "Non, tous les styles sont inline.",
          },
        ]}
      />
    </Demo>
  );
}
