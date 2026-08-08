/** Returns the array with duplicate values removed, preserving first-seen order. */
export function unique<T>(values: readonly T[]): T[] {
  return Array.from(new Set(values));
}

/** Like {@link unique}, but dedupes by the value returned from `keyFn`. */
export function uniqueBy<T, K>(
  values: readonly T[],
  keyFn: (value: T) => K,
): T[] {
  const seen = new Set<K>();
  const out: T[] = [];
  for (const value of values) {
    const key = keyFn(value);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(value);
  }
  return out;
}
