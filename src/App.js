import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAllBooks, updateBook } from "./api/books-api";
import "./App.css";
import { useMountEffect } from "./modules/custom-hooks";

import Home from "./ui/pages/Home";
import Search from "./ui/pages/Search";

/** TODO: Make app responsive */
/** TODO: optimize components using memo, useCallback */
function App() {
  /** States */
  const [books, setBooks] = useState([]);
  /** States */

  /** Helpers */
  const onBookShelfChange = async ({ book }) => {
    const { id, shelf } = book;
    /** 1. Update state */
    const updatedBooks = books.slice();

    const bookIndex = books.findIndex((item) => item.id === id);
    bookIndex !== -1
      ? (updatedBooks[bookIndex].shelf = shelf)
      : updatedBooks.push(book);

    setBooks(updatedBooks);

    /** 2. update DB */
    updateBook({ id, shelf });
  };

  /** Helpers */

  /** Effects */
  useMountEffect(() => {
    const fetchAllBooks = async () => {
      const { data } = await getAllBooks();
      setBooks(data);
    };

    fetchAllBooks();
  });
  /** Effects */

  /** Render */
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home books={books} onBookShelfChange={onBookShelfChange} />
        </Route>

        <Route path="/search">
          <Search booksOnShelf={books} onBookShelfChange={onBookShelfChange} />
        </Route>
      </Switch>
    </Router>
  );
  /** Render */
}

export default App;
