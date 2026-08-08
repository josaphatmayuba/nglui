import { describe, expect, it, vi } from "vitest";
import { classNames, debounce } from "./index.js";

describe("classNames", () => {
  it("joins strings and skips falsy values", () => {
    expect(classNames("a", null, undefined, false, "", "b")).toBe("a b");
  });

  it("keeps object keys whose value is truthy", () => {
    expect(classNames("base", { on: true, off: false })).toBe("base on");
  });

  it("flattens nested arrays", () => {
    expect(classNames(["a", ["b", { c: true }]], "d")).toBe("a b c d");
  });

  it("returns an empty string with no usable input", () => {
    expect(classNames()).toBe("");
    expect(classNames(false, null)).toBe("");
  });
});

describe("debounce", () => {
  it("invokes once with the latest arguments", () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const d = debounce(fn, 100);

    d(1);
    d(2);
    d(3);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(3);
    vi.useRealTimers();
  });

  it("cancel drops the pending call", () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const d = debounce(fn, 100);

    d("x");
    d.cancel();
    vi.advanceTimersByTime(500);
    expect(fn).not.toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("flush runs the pending call immediately and only once", () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const d = debounce(fn, 100);

    d("x");
    d.flush();
    expect(fn).toHaveBeenCalledWith("x");

    vi.advanceTimersByTime(500);
    expect(fn).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it("flush is a no-op when nothing is pending", () => {
    const fn = vi.fn();
    const d = debounce(fn, 100);
    d.flush();
    expect(fn).not.toHaveBeenCalled();
  });
});
