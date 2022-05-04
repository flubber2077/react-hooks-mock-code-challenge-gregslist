import React from "react";

function Search({searchValue, onSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchValue);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={onSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
