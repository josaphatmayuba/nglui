# nglui

A small, dependency-free TypeScript utility library. Ships ESM + CJS builds with full type declarations.

[![npm](https://img.shields.io/npm/v/nglui.svg)](https://www.npmjs.com/package/nglui)

## Install

```bash
npm install nglui
```

## Usage

```ts
import { classNames, debounce } from "nglui";

classNames("btn", { "btn--active": isActive }, ["extra", null]);
// => "btn btn--active extra"

const onSearch = debounce((query: string) => fetchResults(query), 300);
onSearch("he");
onSearch("hello"); // only this call runs, 300ms after the last keystroke

onSearch.cancel(); // drop a pending call
onSearch.flush(); // run a pending call now

clamp(15, 0, 10); // => 10
unique([1, 2, 2, 3]); // => [1, 2, 3]
pick({ a: 1, b: 2 }, ["a"]); // => { a: 1 }
```

## API

### `classNames(...values: ClassValue[]): string`

Joins class values into a space-separated string. Accepts strings, numbers, arrays (flattened recursively), and objects (keys kept when their value is truthy). Falsy values are skipped.

### `debounce<Args>(fn, wait = 0): Debounced<Args>`

Trailing-edge debounce. The wrapped call fires once `wait` milliseconds have elapsed since the most recent invocation, using the latest arguments.

- `cancel()` — discards a pending call.
- `flush()` — invokes a pending call immediately.

### `clamp(value, min, max): number`

Restricts `value` to the inclusive range `[min, max]`.

### `unique(values)` / `uniqueBy(values, keyFn)`

Removes duplicates from an array, preserving first-seen order. `uniqueBy` dedupes using a derived key.

### `pick(obj, keys)` / `omit(obj, keys)`

Returns a shallow copy of `obj` with only (or all but) the given keys.

## Development

```bash
npm install
npm test          # vitest
npm run lint       # eslint
npm run format      # prettier --write
npm run typecheck # tsc --noEmit
npm run build     # tsup -> dist/
```

## Releasing

Versioning and publishing are managed by [Changesets](https://github.com/changesets/changesets):

1. `npx changeset` — describe your change and pick a bump (patch/minor/major).
2. Commit the generated file under `.changeset/` and push/merge to `main`.
3. The `Release` GitHub Actions workflow opens a "Version Packages" PR; merging it publishes the new version to npm automatically.

The workflow requires an `NPM_TOKEN` repository secret (an npm automation token).

## License

MIT © josaphatmayuba
