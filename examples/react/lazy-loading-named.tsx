// Example: Lazy Loading with Named Export
// This shows how to lazy load a component that uses named export
import React, { lazy, Suspense } from 'react';

/**
 * When the component is exported as a named export,
 * you need to map it to default for React.lazy()
 */
const SearchPage = lazy(() =>
  import("@/heroes/pages/search/SearchPage").then((module) => ({
    default: module.SearchPage,
  }))
);

/**
 * App component demonstrating lazy loading with named export
 */
const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Heroes App</h1>
      <Suspense fallback={<div>Loading Search Page...</div>}>
        <SearchPage />
      </Suspense>
    </div>
  );
};

export default App;

/**
 * WHY THIS IS NEEDED:
 * 
 * React.lazy() expects the dynamic import to return a module
 * with a default export. When your component uses a named export,
 * the module doesn't have a default export.
 * 
 * The .then() callback allows us to transform the module:
 * - module.SearchPage gets the named export
 * - { default: module.SearchPage } creates a new object with
 *   a default property pointing to the named export
 * 
 * This effectively converts: export const SearchPage = ...
 * Into what React.lazy() expects: export default SearchPage
 */
