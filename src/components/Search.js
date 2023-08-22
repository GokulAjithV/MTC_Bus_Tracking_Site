import React , { useState } from 'react';

function Search({ onNameSearch }) {
  const [name, setName] = useState('');

  return (
    <div className="search-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name to search"
      />
      <button onClick={onNameSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;