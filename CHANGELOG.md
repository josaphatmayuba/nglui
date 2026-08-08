# nglui

## 0.4.0

### Minor Changes

- Add 12 more `nglui/ui` components: primitives `Pagination`, `Accordion`, `Table`, `Avatar`, `Toast`, `Checkbox`, `Radio`, `Switch`, and composite sections `FeaturedHero`, `ReformSection`, `ContactSection`, `NavbarWithDropdown` built from the existing primitives.

## 0.3.0

### Minor Changes

- Add 10 more `nglui/ui` components based on real UI patterns found across the source site's subpages: `PageHeader`, `SearchBar`, `Select`, `ViewToggle`, `SegmentedTabs`, `Skeleton`, `FormGrid`, `InfoBlock`, `ReformCard`, `ImageBadge`.

### Patch Changes

- Fix `PageHeader` and `InfoBlock` prop types (`title: ReactNode` conflicted with the native `HTMLAttributes.title: string`), and export `PageHeader` from `nglui/ui`.

## 0.2.0

### Minor Changes

- e7a27dd: Expand `nglui/ui` with layout, feedback, and navigation components: `Breadcrumb`, `Divider`, `Grid`, `Hero`, `Modal`, `Spinner`, `Tabs`, `Tag`.
- e7a27dd: Add `nglui/ui`: a React component set (`Navbar`, `Card`, `Badge`, `Button`, `Input`, `Alert`, `Footer`) with institutional design tokens. `react` is an optional peer dependency required only for this entry point.
- 4eda811: Add `clamp`, `unique`/`uniqueBy`, and `pick`/`omit` utilities. Add ESLint + Prettier tooling and switch release management to Changesets.

### Patch Changes

- `Divider`'s `tricolor` variant now accepts a custom `colors` array (any length) or a CSS `gradient` string, instead of a fixed three-band bar.
