# Default vs Named Exports - Quick Reference

## Syntax Comparison

| Feature | Named Export | Default Export |
|---------|-------------|----------------|
| **Export** | `export const func = () => {}` | `export default func` |
| **Import** | `import { func } from './module'` | `import func from './module'` |
| **Multiple** | ✅ Yes | ❌ One per module |
| **Rename on Import** | `import { func as f }` | Any name works |
| **Tree Shaking** | ✅ Better | ⚠️ Harder |

## Export Syntax

### Named Exports

```typescript
// Inline export
export const foo = 'bar';
export function myFunc() {}
export class MyClass {}

// Export list
const foo = 'bar';
const bar = 'baz';
export { foo, bar };

// Export with rename
export { foo as publicFoo };
```

### Default Exports

```typescript
// Export class
export default class MyClass {}

// Export function
export default function myFunc() {}

// Export value
const value = 'something';
export default value;

// Anonymous function
export default () => {};
```

### Mixed Exports

```typescript
// Named exports
export const helper = () => {};
export const utils = {};

// Default export
export default class Main {}
```

## Import Syntax

### Named Imports

```typescript
// Import specific exports
import { foo, bar } from './module';

// Import with rename
import { foo as f } from './module';

// Import all as namespace
import * as myModule from './module';
myModule.foo;

// Import multiple
import { foo, bar, baz } from './module';
```

### Default Imports

```typescript
// Import default (any name)
import MyClass from './module';
import AnyName from './module';
import Whatever from './module';
```

### Mixed Imports

```typescript
// Import both default and named
import MyClass, { helper, utils } from './module';

// Default first, then named in braces
```

## React Patterns

### Component Export Patterns

```typescript
// ✅ Recommended: Default export
const Button = () => <button>Click</button>;
export default Button;

// ⚠️ Alternative: Named export
export const Button = () => <button>Click</button>;
```

### React.lazy() Patterns

```typescript
// With default export (simple)
const Page = lazy(() => import('./Page'));

// With named export (needs mapping)
const Page = lazy(() =>
  import('./Page').then(m => ({ default: m.Page }))
);
```

## Common Patterns

### Utility Functions (Named)

```typescript
// utils.ts
export const format = (str) => str.trim();
export const validate = (str) => str.length > 0;
export const transform = (str) => str.toLowerCase();

// usage
import { format, validate } from './utils';
```

### Classes/Services (Default)

```typescript
// UserService.ts
class UserService {
  getUser() {}
  saveUser() {}
}
export default UserService;

// usage
import UserService from './UserService';
```

### React Components (Default)

```typescript
// Button.tsx
const Button = ({ label }) => <button>{label}</button>;
export default Button;

// usage
import Button from './Button';
```

### Library/Module (Named)

```typescript
// math.ts
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const PI = 3.14159;

// usage
import * as math from './math';
// or
import { add, PI } from './math';
```

## Decision Guide

### Use Named Exports When:
- ✅ Exporting multiple functions/values
- ✅ Building utility libraries
- ✅ Want explicit import names
- ✅ Need better tree-shaking
- ✅ Exporting constants and types

### Use Default Exports When:
- ✅ One main export per file
- ✅ Exporting React components
- ✅ Exporting classes/services
- ✅ Following framework conventions
- ✅ Want flexible import naming

## Common Mistakes

### ❌ Wrong: Mixed up syntax
```typescript
// Don't do this
import { default as MyClass } from './module';

// Do this instead
import MyClass from './module';
```

### ❌ Wrong: Expecting named import
```typescript
// If module has default export
export default function foo() {}

// Don't do this
import { foo } from './module'; // ❌ Undefined

// Do this
import foo from './module'; // ✅
```

### ❌ Wrong: Lazy loading named export
```typescript
// Component with named export
export const Page = () => <div>Page</div>;

// Don't do this
const Page = lazy(() => import('./Page')); // ❌ Won't work

// Do this
const Page = lazy(() =>
  import('./Page').then(m => ({ default: m.Page }))
); // ✅
```

## Quick Tips

1. **Be consistent**: Pick a pattern and stick with it in your project
2. **React components**: Use default exports (convention)
3. **Utilities**: Use named exports (tree-shaking)
4. **One main thing**: Use default export
5. **Multiple things**: Use named exports
6. **TypeScript types**: Always use named exports

## ESLint Rules

```json
{
  "rules": {
    // Enforce default exports for single export
    "import/prefer-default-export": "off",
    
    // Enforce named exports (opposite)
    "import/no-default-export": "off"
  }
}
```

Choose one pattern and enforce it with ESLint!
