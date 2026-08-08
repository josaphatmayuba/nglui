/** Returns a shallow copy of `obj` containing only the given keys. */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Pick<T, K> {
  const out = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) out[key] = obj[key];
  }
  return out;
}

/** Returns a shallow copy of `obj` without the given keys. */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Omit<T, K> {
  const out = { ...obj };
  for (const key of keys) {
    delete out[key];
  }
  return out;
}
