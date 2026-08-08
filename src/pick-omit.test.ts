import { describe, expect, it } from "vitest";
import { omit, pick } from "./pick-omit.js";

const subject = { a: 1, b: 2, c: 3 };

describe("pick", () => {
  it("keeps only the requested keys", () => {
    expect(pick(subject, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  it("ignores keys absent from the object", () => {
    expect(pick(subject, ["a"] as const)).toEqual({ a: 1 });
  });

  it("does not mutate the source object", () => {
    pick(subject, ["a"]);
    expect(subject).toEqual({ a: 1, b: 2, c: 3 });
  });
});

describe("omit", () => {
  it("drops the requested keys", () => {
    expect(omit(subject, ["b"])).toEqual({ a: 1, c: 3 });
  });

  it("does not mutate the source object", () => {
    omit(subject, ["b"]);
    expect(subject).toEqual({ a: 1, b: 2, c: 3 });
  });
});
