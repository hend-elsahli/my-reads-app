/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";

import SearchField from "./SearchField";
import { BookList } from "../../components";
import * as styles from "./styles";
import { searchBooks } from "../../../api/books-api";

/*---------------------------------
            Component
---------------------------------*/
function Search() {
  /** State */
  const [{ query, books }, setState] = useState({
    query: "",
    books: [],
  });
  /** State */

  /** Helpers */
  const onSearchTextChange = async (e) => {
    const query = e.target.value.trim();

    if (query) {
      const { ok, data } = await searchBooks({ query });
      if (ok) {
        setState({ query, books: data });
      }
    } else {
      setState({ query, books: [] });
    }
  };
  /** Helpers */

  /** Render */
  return (
    <div>
      <SearchField value={query} onChange={onSearchTextChange} />
      <div css={styles.listContainer}>
        <BookList list={books} />
      </div>
    </div>
  );
  /** Render */
}

export default Search;
