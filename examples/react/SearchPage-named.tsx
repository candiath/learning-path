// Example: React Component with Named Export
import React from 'react';

/**
 * SearchPage component exported as a named export
 * This demonstrates the pattern shown in the issue
 */
export const SearchPage: React.FC = () => {
  return (
    <div className="search-page">
      <h1>Search Page</h1>
      <input 
        type="text" 
        placeholder="Search for heroes..." 
        className="search-input"
      />
      <div className="results">
        {/* Search results would go here */}
      </div>
    </div>
  );
};

// You could also have additional named exports in the same file
export const SearchPageHeader: React.FC = () => {
  return <h1>Search</h1>;
};

export const SearchPageFooter: React.FC = () => {
  return <footer>Footer content</footer>;
};
