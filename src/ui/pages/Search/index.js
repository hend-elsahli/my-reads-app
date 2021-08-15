import React from "react";
import SearchField from "./SearchField";

/*---------------------------------
            Component
---------------------------------*/
function Search() {
  /** Render */
  return (
    <div>
      <SearchField />
      <div className="search-books-results">
        <ol className="books-grid" />
      </div>
    </div>
  );
  /** Render */
}

export default Search;
