# Learning Path

A collection of TypeScript/JavaScript learning resources and examples.

## Topics

### Default vs Named Exports in TypeScript

Learn about the differences between default and named exports in TypeScript, including practical examples with React lazy loading.

📖 **[Read the complete guide](./typescript-exports-guide.md)**

#### Quick Examples

**Named Export:**
```typescript
// Component file
export const SearchPage = () => <div>Search</div>;

// Lazy loading
const SearchPage = lazy(() =>
  import("./SearchPage").then((module) => ({
    default: module.SearchPage,
  }))
);
```

**Default Export:**
```typescript
// Component file
const SearchPage = () => <div>Search</div>;
export default SearchPage;

// Lazy loading
const SearchPage = lazy(() => import('./SearchPage'));
```

#### Code Examples

The `examples/` directory contains practical code samples:

- **Basic Examples:**
  - [`named-exports.ts`](./examples/named-exports.ts) - Multiple exports from one module
  - [`default-export.ts`](./examples/default-export.ts) - Single default export
  - [`mixed-exports.ts`](./examples/mixed-exports.ts) - Combining both patterns
  - [`import-named.ts`](./examples/import-named.ts) - How to import named exports
  - [`import-default.ts`](./examples/import-default.ts) - How to import default exports
  - [`import-mixed.ts`](./examples/import-mixed.ts) - How to import mixed exports

- **React Examples:**
  - [`react/SearchPage-named.tsx`](./examples/react/SearchPage-named.tsx) - Component with named export
  - [`react/SearchPage-default.tsx`](./examples/react/SearchPage-default.tsx) - Component with default export
  - [`react/lazy-loading-named.tsx`](./examples/react/lazy-loading-named.tsx) - Lazy loading a named export
  - [`react/lazy-loading-default.tsx`](./examples/react/lazy-loading-default.tsx) - Lazy loading a default export

## Resources

- [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [React: Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components#default-vs-named-exports)