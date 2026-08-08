import { describe, expect, it } from "vitest";
import { unique, uniqueBy } from "./unique.js";

describe("unique", () => {
  it("removes duplicates, preserving first-seen order", () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("returns an empty array for empty input", () => {
    expect(unique([])).toEqual([]);
  });
});

describe("uniqueBy", () => {
  it("dedupes using the key function", () => {
    const values = [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 1, name: "c" },
    ];
    expect(uniqueBy(values, (v) => v.id)).toEqual([
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ]);
  });
});
