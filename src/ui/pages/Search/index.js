/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState, useEffect } from "react";

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
  const onSearchTextChange = async (e) => {
    const query = e.target.value.trim();

    !query
      ? setState({ query, books: [] })
      : setState((prev) => ({ ...prev, query }));
  };
  /** Helpers */

  /** Effects */
  useEffect(() => {
    const aborter = new AbortController();

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

    const fetchBooks = async () => {
      /** 2. Exec api */
      const { ok, data } = await searchBooks({ query, signal: aborter.signal });
      /** 3. Fullfilled || Rejected */
      setState((prev) => ({
        ...prev,
        books: ok ? fillShelfs(data) : prev.books,
      }));
    };

    if (query) {
      fetchBooks();
    }

    /** Cleanup */
    return () => {
      aborter.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  /** Effects */

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
