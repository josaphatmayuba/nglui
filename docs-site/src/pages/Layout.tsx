import {
  Navbar,
  NavbarWithDropdown,
  Footer,
  Hero,
  PageHeader,
  Card,
  Grid,
  FormGrid,
  Divider,
  Input,
  colors,
  spacing,
} from "nglui/ui";
import { Demo } from "../Demo.js";

export function NavbarPage() {
  return (
    <Demo
      name="Navbar"
      description="Header bar with an optional logo slot and nav children."
    >
      <Navbar logo={<strong>Mon site</strong>}>
        <a href="#" style={{ color: "#fff" }}>
          Accueil
        </a>
        <a href="#" style={{ color: "#fff" }}>
          Contact
        </a>
      </Navbar>
    </Demo>
  );
}

export function NavbarWithDropdownPage() {
  return (
    <Demo
      name="NavbarWithDropdown"
      description="Navbar variant where a link can expose a full-width dropdown panel with a 2-column grid of icon + title + description items."
    >
      <NavbarWithDropdown
        logo={<strong>Mon site</strong>}
        links={[
          { key: "home", label: "Accueil", href: "#" },
          {
            key: "pubs",
            label: "Publications",
            items: [
              {
                label: "Actualités",
                description: "Les dernières nouvelles et informations",
                href: "#",
                icon: "📰",
              },
              {
                label: "Statistiques",
                description: "Données et analyses",
                href: "#",
                icon: "📊",
              },
              {
                label: "Rapports annuels",
                description: "Rapports financiers et économiques",
                href: "#",
                icon: "📘",
              },
              {
                label: "Documents",
                description: "Documents et publications diverses",
                href: "#",
                icon: "📄",
              },
            ],
          },
          { key: "contact", label: "Contact", href: "#" },
        ]}
      />
    </Demo>
  );
}

export function FooterPage() {
  return (
    <Demo name="Footer" description="Dark footer container.">
      <Footer>© 2026 Mon site</Footer>
    </Demo>
  );
}

export function HeroPage() {
  return (
    <Demo name="Hero" description="Full-width intro/banner section.">
      <Hero>
        <h2 style={{ margin: 0 }}>Bienvenue</h2>
        <p style={{ margin: 0 }}>Section d'introduction pleine largeur.</p>
      </Hero>
    </Demo>
  );
}

export function PageHeaderPage() {
  return (
    <Demo
      name="PageHeader"
      description="Centered title + subtitle banner on a primary background."
    >
      <PageHeader
        title="Titre de page"
        subtitle="Sous-titre descriptif centré sur fond bleu marine."
      />
    </Demo>
  );
}

export function CardPage() {
  return (
    <Demo name="Card" description="Bordered surface with soft shadow.">
      <Card style={{ maxWidth: "280px" }}>
        <h3 style={{ marginTop: 0 }}>Titre de la card</h3>
        <p>Contenu de la card avec bordure douce et ombre légère.</p>
      </Card>
    </Demo>
  );
}

export function GridPage() {
  return (
    <Demo name="Grid" description="CSS grid layout helper (columns, gap).">
      <Grid columns={3} gap="md">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
      </Grid>
    </Demo>
  );
}

export function FormGridPage() {
  return (
    <Demo name="FormGrid" description="Responsive form field grid (columns).">
      <FormGrid columns={2}>
        <Input label="Prénom" placeholder="Votre prénom…" />
        <Input label="Nom" placeholder="Votre nom…" />
      </FormGrid>
    </Demo>
  );
}

export function DividerPage() {
  return (
    <Demo
      name="Divider"
      description="line, or tricolor accepting a custom colors array or a CSS gradient."
    >
      <div
        style={{ display: "flex", flexDirection: "column", gap: spacing.lg }}
      >
        <Divider variant="line" />
        <Divider variant="tricolor" />
        <Divider
          variant="tricolor"
          gradient={`linear-gradient(90deg, ${colors.info}, ${colors.accent}, ${colors.warning})`}
        />
      </div>
    </Demo>
  );
}
