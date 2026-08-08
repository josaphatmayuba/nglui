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
```

## API

### `classNames(...values: ClassValue[]): string`

Joins class values into a space-separated string. Accepts strings, numbers, arrays (flattened recursively), and objects (keys kept when their value is truthy). Falsy values are skipped.

### `debounce<Args>(fn, wait = 0): Debounced<Args>`

Trailing-edge debounce. The wrapped call fires once `wait` milliseconds have elapsed since the most recent invocation, using the latest arguments.

- `cancel()` — discards a pending call.
- `flush()` — invokes a pending call immediately.

## Development

```bash
npm install
npm test          # vitest
npm run typecheck # tsc --noEmit
npm run build     # tsup -> dist/
```

## Releasing

Publishing is handled by GitHub Actions on tag push:

```bash
npm version patch   # or minor / major
git push --follow-tags
```

The workflow requires an `NPM_TOKEN` repository secret (an npm automation token).

## License

MIT © josaphatmayuba
