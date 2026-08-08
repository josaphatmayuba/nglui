export interface Debounced<Args extends unknown[]> {
  (...args: Args): void;
  /** Cancels a pending call, if any. */
  cancel(): void;
  /** Invokes a pending call immediately, if any. */
  flush(): void;
}

/**
 * Returns a trailing-edge debounced wrapper around `fn`: the call fires once
 * `wait` milliseconds have elapsed since the last invocation.
 */
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  wait = 0,
): Debounced<Args> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let pending: Args | undefined;

  const debounced = (...args: Args): void => {
    pending = args;
    if (timer !== undefined) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      const args2 = pending;
      pending = undefined;
      if (args2) fn(...args2);
    }, wait);
  };

  debounced.cancel = (): void => {
    if (timer !== undefined) clearTimeout(timer);
    timer = undefined;
    pending = undefined;
  };

  debounced.flush = (): void => {
    if (timer === undefined) return;
    clearTimeout(timer);
    timer = undefined;
    const args = pending;
    pending = undefined;
    if (args) fn(...args);
  };

  return debounced;
}
