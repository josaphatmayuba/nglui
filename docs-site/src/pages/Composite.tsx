import {
  ReformCard,
  ReformSection,
  FeaturedHero,
  ContactSection,
} from "nglui/ui";
import { Demo } from "../Demo.js";

export function ReformCardPage() {
  return (
    <Demo
      name="ReformCard"
      description="Card with a category banner, title, meta, and stacked download/detail buttons."
    >
      <div style={{ maxWidth: "260px" }}>
        <ReformCard
          category="Réformes"
          title="Compte Unique du Trésor (CUT)"
          meta="Échéance : 15 novembre 2026"
          downloadHref="#"
          detailHref="#"
        />
      </div>
    </Demo>
  );
}

export function ReformSectionPage() {
  return (
    <Demo
      name="ReformSection"
      description="Section title + a Grid of ReformCards + an optional see-all button."
    >
      <ReformSection
        title="Réformes initiées"
        columns={2}
        items={[
          {
            key: "1",
            category: "Réformes",
            title: "Compte Unique du Trésor",
            meta: "Échéance : 15 nov. 2026",
            downloadHref: "#",
            detailHref: "#",
          },
          {
            key: "2",
            category: "Réformes",
            title: "Facture normalisée",
            meta: "Échéance : 31 déc. 2026",
            downloadHref: "#",
            detailHref: "#",
          },
        ]}
        seeAllLabel="Voir toutes les réformes"
        seeAllHref="#"
      />
    </Demo>
  );
}

export function FeaturedHeroPage() {
  return (
    <Demo
      name="FeaturedHero"
      description="Hero banner with eyebrow badge, title, CTA, optional image, and slide dots."
    >
      <FeaturedHero
        slides={[
          {
            key: "1",
            eyebrow: "À la une",
            title: "Titre de l'annonce principale",
            description: "Texte descriptif court.",
            ctaLabel: "Lire l'article",
            ctaHref: "#",
          },
          {
            key: "2",
            eyebrow: "Urgent",
            title: "Deuxième diapositive",
            description: "Autre annonce.",
            ctaLabel: "En savoir plus",
            ctaHref: "#",
          },
        ]}
      />
    </Demo>
  );
}

export function ContactSectionPage() {
  return (
    <Demo
      name="ContactSection"
      description="Page header + side-by-side info block and contact form."
    >
      <ContactSection
        title="Contactez-nous"
        description="Pour toute question, notre équipe est à votre disposition."
        infoTitle="Informations de contact"
        infoItems={[
          { key: "addr", icon: "📍", title: "Adresse", text: "Kinshasa, RDC" },
        ]}
        formTitle="Formulaire de contact"
      />
    </Demo>
  );
}
