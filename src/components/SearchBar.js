import React from 'react';

function SearchBar({ searchdata, setSearchData, searchNews }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Any Headlines"
        value={searchdata}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <button onClick={searchNews}>Search</button>
    </div>
  );
}

export default SearchBar;
