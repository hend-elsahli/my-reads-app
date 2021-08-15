/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { useState } from "react";

import BookSection from "./BookSection";
import { useMountEffect } from "../../../../modules/custom-hooks";
import { getAllBooks, updateBook } from "../../../../api/books-api";
import { BOOK_SECTIONS } from "../../../../constants";

/*---------------------------------
            Component
---------------------------------*/
function BookSectionList() {
  /** States */
  const [books, setBooks] = useState([]);
  /** States */

  /** Helpers */
  const renderContent = () => {
    return Object.keys(BOOK_SECTIONS).map((key) => (
      <BookSection
        key={key}
        title={BOOK_SECTIONS[key].title}
        list={books.filter(({ shelf }) => shelf === key)}
        onBookShelfChange={onBookShelfChange}
      />
    ));
  };

  const onBookShelfChange = async ({ id, shelf }) => {
    /** 1. Update state */
    const updatedBooks = books.slice();
    updatedBooks[books.findIndex((book) => book.id === id)].shelf = shelf;
    setBooks(updatedBooks);

    /** 2. update DB */
    updateBook({ id, shelf });
  };

  /**
    const onBookShelfChange_NotOptimized = async ({ id, oldShelf, shelf }) => {
      const { ok } = await updateBook({ id, shelf });
      if (ok) {
        const { data } = await getAllBooks();
        setBooks(data);
      }
    };
   */
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
  return <div>{renderContent()}</div>;
  /** Render */
}

export default BookSectionList;
