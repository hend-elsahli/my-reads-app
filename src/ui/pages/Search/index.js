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
function Search({ booksOnShelf, onBookShelfChange }) {
  /** State */
  const [{ query, books }, setState] = useState({
    query: "",
    books: [],
  });
  /** State */

  /** Helpers */
  const fillShelfs = (list) => {
    const data = list.map(({ id, shelf, ...rest }) => {
      const index = booksOnShelf.findIndex((item) => item.id === id);
      return {
        id,
        shelf: index !== -1 ? booksOnShelf[index].shelf : "none",
        ...rest,
      };
    });

    return data;
  };

  const onSearchTextChange = async (e) => {
    const query = e.target.value.trim();

    if (query) {
      const { ok, data } = await searchBooks({ query });
      if (ok) {
        setState({ query, books: fillShelfs(data) });
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
        <BookList list={books} onBookShelfChange={onBookShelfChange} />
      </div>
    </div>
  );
  /** Render */
}

export default Search;
