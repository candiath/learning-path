// Example: Lazy Loading with Default Export
// This shows the simpler pattern when component uses default export
import React, { lazy, Suspense } from 'react';

/**
 * When the component is exported as default,
 * React.lazy() can use it directly
 */
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

/**
 * App component demonstrating lazy loading with default export
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
 * WHY THIS IS SIMPLER:
 * 
 * When the component is exported as default, the module already
 * has the structure React.lazy() expects. No transformation needed.
 * 
 * The import() returns a module like: { default: SearchPage }
 * React.lazy() can directly use this.
 * 
 * This is the recommended pattern for React components.
 */
