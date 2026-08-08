import { useState } from "react";
import {
  Button,
  Input,
  Select,
  SearchBar,
  Checkbox,
  Radio,
  Switch,
  spacing,
} from "nglui/ui";
import { Demo } from "../Demo.js";

export function ButtonPage() {
  return (
    <Demo name="Button" description="Variants: primary, accent, outline.">
      <div style={{ display: "flex", gap: spacing.md, flexWrap: "wrap" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </Demo>
  );
}

export function InputPage() {
  return (
    <Demo name="Input" description="Labeled text input with focus styling.">
      <Input
        label="Adresse email"
        type="email"
        placeholder="vous@example.com"
        style={{ maxWidth: "280px" }}
      />
    </Demo>
  );
}

export function SelectPage() {
  return (
    <Demo name="Select" description="Styled native <select>.">
      <Select style={{ maxWidth: "220px" }}>
        <option>Toutes les catégories</option>
        <option>Réformes</option>
        <option>Communiqués</option>
      </Select>
    </Demo>
  );
}

export function SearchBarPage() {
  return (
    <Demo
      name="SearchBar"
      description="Pill-shaped search input with a leading icon."
    >
      <SearchBar placeholder="Rechercher…" style={{ maxWidth: "280px" }} />
    </Demo>
  );
}

export function CheckboxPage() {
  return (
    <Demo name="Checkbox" description="Labeled checkbox form control.">
      <Checkbox label="J'accepte les conditions" defaultChecked />
    </Demo>
  );
}

export function RadioPage() {
  return (
    <Demo name="Radio" description="Labeled radio form control.">
      <div style={{ display: "flex", gap: spacing.lg }}>
        <Radio name="demo-radio" label="Option A" defaultChecked />
        <Radio name="demo-radio" label="Option B" />
      </div>
    </Demo>
  );
}

export function SwitchPage() {
  const [checked, setChecked] = useState(true);
  return (
    <Demo name="Switch" description="Labeled toggle switch.">
      <Switch
        checked={checked}
        onChange={setChecked}
        label="Notifications activées"
      />
    </Demo>
  );
}
