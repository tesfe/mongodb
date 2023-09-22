import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchItem" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
