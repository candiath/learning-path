// Example: React Component with Default Export
import React from 'react';

/**
 * SearchPage component exported as a default export
 * This demonstrates the simpler pattern for React.lazy()
 */
const SearchPage: React.FC = () => {
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

export default SearchPage;
