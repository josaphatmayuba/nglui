export interface ComponentGroup {
  title: string;
  items: string[];
}

export const registry: ComponentGroup[] = [
  {
    title: "Layout",
    items: [
      "Navbar",
      "NavbarWithDropdown",
      "Footer",
      "Hero",
      "PageHeader",
      "Card",
      "Grid",
      "FormGrid",
      "Divider",
    ],
  },
  {
    title: "Actions & inputs",
    items: [
      "Button",
      "Input",
      "Select",
      "SearchBar",
      "Checkbox",
      "Radio",
      "Switch",
    ],
  },
  {
    title: "Feedback",
    items: ["Badge", "Tag", "Alert", "Toast", "Skeleton", "Spinner"],
  },
  {
    title: "Navigation",
    items: [
      "Tabs",
      "SegmentedTabs",
      "Breadcrumb",
      "Pagination",
      "ViewToggle",
      "Accordion",
    ],
  },
  {
    title: "Data display",
    items: ["Table", "Avatar", "ImageBadge", "InfoBlock", "Modal"],
  },
  {
    title: "Composite sections",
    items: [
      "CategoryCard",
      "CategorySection",
      "FeaturedHero",
      "ContactSection",
    ],
  },
];

export const allComponents: string[] = registry.flatMap((group) => group.items);
