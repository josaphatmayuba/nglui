import {
  CategoryCard,
  CategorySection,
  FeaturedHero,
  ContactSection,
} from "nglui/ui";
import { Demo } from "../Demo.js";

export function CategoryCardPage() {
  return (
    <Demo
      name="CategoryCard"
      description="Card with a category banner, title, meta, and stacked download/detail buttons."
    >
      <div style={{ maxWidth: "260px" }}>
        <CategoryCard
          category="Projets"
          title="Modernisation du système interne"
          meta="Échéance : 15 novembre 2026"
          downloadHref="#"
          detailHref="#"
        />
      </div>
    </Demo>
  );
}

export function CategorySectionPage() {
  return (
    <Demo
      name="CategorySection"
      description="Section title + a Grid of CategoryCards + an optional see-all button."
    >
      <CategorySection
        title="Projets en cours"
        columns={2}
        items={[
          {
            key: "1",
            category: "Projets",
            title: "Modernisation du système interne",
            meta: "Échéance : 15 nov. 2026",
            downloadHref: "#",
            detailHref: "#",
          },
          {
            key: "2",
            category: "Projets",
            title: "Refonte du portail public",
            meta: "Échéance : 31 déc. 2026",
            downloadHref: "#",
            detailHref: "#",
          },
        ]}
        seeAllLabel="Voir tous les projets"
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
            eyebrow: "Nouveau",
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
          {
            key: "addr",
            icon: "📍",
            title: "Adresse",
            text: "12 rue des Lilas",
          },
        ]}
        formTitle="Formulaire de contact"
      />
    </Demo>
  );
}
