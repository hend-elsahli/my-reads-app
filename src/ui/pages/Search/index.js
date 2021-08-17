/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState, useRef, useEffect } from "react";

import SearchField from "./SearchField";
import { BookList } from "../../components";
import * as styles from "./styles";
import { searchBooks } from "../../../api/books-api";

/*---------------------------------
            Component
---------------------------------*/
function Search({ booksOnShelf, onBookShelfChange }) {
  /** State */
  const [{ query, books, loading }, setState] = useState({
    query: "",
    books: [],
    loading: false,
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
      /** 1. Loading */
      // setState((prev) => ({ ...prev, loading: true }));

      /** 2. Exec api */
      const { ok, data } = await searchBooks({ query, signal: aborter.signal });
      console.log("searchBooks request", ok, data);
      /** 3. Fullfilled || Rejected */
      setState((prev) => ({
        ...prev,
        // loading: false,
        // books: fillShelfs(data),
        books: ok ? fillShelfs(data) : prev.books,
      }));
    };

    if (query) {
      console.log("should search");
      fetchBooks();
    }

    /** Cleanup */
    return () => {
      // if (loading && aborter) {
      console.log("should cleanup");
      aborter.abort();
      //   setState((prev) => ({ ...prev, loading: false }));
      // }
    };
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
