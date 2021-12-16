import React from "react";

function Search({ search, onChangeSearch }) {
  function handleChange(e) {
    onChangeSearch(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          value={search}
          onChange={onChangeSearch}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
