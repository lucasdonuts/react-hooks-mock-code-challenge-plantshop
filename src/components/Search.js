import React from "react";

function Search({ search, setSearch }) {

  const handleChange = (e) => {
    setSearch(prev => e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={ search }
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={ handleChange }
      />
    </div>
  );
}

export default Search;
