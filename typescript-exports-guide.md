# Default vs Named Exports in TypeScript

This guide explains the differences between default and named exports in TypeScript/JavaScript, with practical examples.

## Table of Contents
- [Overview](#overview)
- [Named Exports](#named-exports)
- [Default Exports](#default-exports)
- [Lazy Loading with React](#lazy-loading-with-react)
- [Best Practices](#best-practices)
- [When to Use Which](#when-to-use-which)

## Overview

TypeScript/JavaScript modules support two types of exports:
- **Named Exports**: Export multiple values from a module with specific names
- **Default Exports**: Export a single main value from a module

## Named Exports

### Exporting
Named exports allow you to export multiple values from a module. Each export has a specific name.

```typescript
// utils.ts
export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const multiply = (a: number, b: number) => a * b;
```

Or you can export at the end:

```typescript
// utils.ts
const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;

export { add, subtract, multiply };
```

### Importing
When importing named exports, you must use the exact name and wrap it in curly braces:

```typescript
// Using named exports
import { add, subtract } from './utils';

// You can also rename imports
import { add as addNumbers } from './utils';

// Import all named exports
import * as utils from './utils';
utils.add(1, 2);
```

## Default Exports

### Exporting
Default exports allow you to export a single main value from a module.

```typescript
// Calculator.ts
class Calculator {
  add(a: number, b: number) {
    return a + b;
  }
}

export default Calculator;
```

Or inline:

```typescript
// Calculator.ts
export default class Calculator {
  add(a: number, b: number) {
    return a + b;
  }
}
```

### Importing
When importing default exports, you can use any name you want (no curly braces):

```typescript
// You can name it anything
import Calculator from './Calculator';
import Calc from './Calculator';  // Also valid
import MyCalculator from './Calculator';  // Also valid
```

## Lazy Loading with React

This is where understanding the difference becomes crucial, especially with React.lazy().

### Named Export Example

When your component is exported as a named export:

```typescript
// SearchPage.tsx
export const SearchPage = () => {
  return <div>Search Page</div>;
};
```

To lazy load it, you need to map the named export to default:

```typescript
// App.tsx
const SearchPage = lazy(() =>
  import("@/heroes/pages/search/SearchPage").then((module) => ({
    default: module.SearchPage,
  }))
);
```

**Why?** React.lazy() expects the dynamic import to resolve to a module with a default export. When you have a named export, you need to manually map it to `default`.

### Default Export Example

When your component is exported as a default export:

```typescript
// SearchPage.tsx
const SearchPage = () => {
  return <div>Search Page</div>;
};

export default SearchPage;
```

To lazy load it, you can import it directly:

```typescript
// App.tsx
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));
```

**Why?** The module already has a default export, so React.lazy() can use it directly.

## Mixing Default and Named Exports

You can use both in the same file:

```typescript
// utils.ts
export const helper1 = () => { /* ... */ };
export const helper2 = () => { /* ... */ };

const mainFunction = () => { /* ... */ };
export default mainFunction;
```

```typescript
// Importing both
import mainFunction, { helper1, helper2 } from './utils';
```

## Best Practices

### Use Named Exports When:
- Exporting multiple values from a module
- You want explicit import names (better for refactoring and IDE support)
- Building utility libraries
- Working with tree-shaking (named exports work better with tree-shaking)

### Use Default Exports When:
- Exporting a single main value (like a React component)
- The module has one primary purpose
- Following React component conventions
- You want flexibility in naming imports

### Common Pitfalls

1. **Mixing patterns inconsistently**: Choose a pattern and stick with it in your project
2. **Named export with React.lazy()**: Remember to map to default
3. **Renaming confusion**: Default exports can be renamed anywhere, making it harder to search for usage

## When to Use Which

| Scenario | Recommendation | Reason |
|----------|---------------|---------|
| React Components | Default Export | Convention, works seamlessly with React.lazy() |
| Utility Functions | Named Exports | Export multiple functions, better tree-shaking |
| Class/Type Definitions | Default Export | Usually one per file |
| Constants | Named Exports | Often multiple per file |
| Hooks | Named Exports | Explicit naming, multiple hooks per file |

## Examples in Practice

### Example 1: React Component with Utilities

```typescript
// Button.tsx
import React from 'react';

// Named exports for utilities
export const buttonSizes = {
  small: 'px-2 py-1',
  medium: 'px-4 py-2',
  large: 'px-6 py-3',
};

export type ButtonSize = keyof typeof buttonSizes;

// Default export for main component
interface ButtonProps {
  size?: ButtonSize;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ size = 'medium', children }) => {
  return <button className={buttonSizes[size]}>{children}</button>;
};

export default Button;
```

```typescript
// Using it
import Button, { buttonSizes, ButtonSize } from './Button';
```

### Example 2: Pure Utility Module

```typescript
// stringUtils.ts
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str: string, length: number) => {
  return str.length > length ? str.slice(0, length) + '...' : str;
};

export const slugify = (str: string) => {
  return str.toLowerCase().replace(/\s+/g, '-');
};
```

```typescript
// Using it
import { capitalize, truncate } from './stringUtils';
// or
import * as stringUtils from './stringUtils';
```

## Summary

- **Named Exports**: Use curly braces `{}`, must match exact name, can export multiple values
- **Default Exports**: No curly braces, can rename freely, one per module
- **React.lazy()**: Requires default export (map named exports to default if needed)
- **Best Practice**: Be consistent within your project

## References

- [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [React: Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components#default-vs-named-exports)
