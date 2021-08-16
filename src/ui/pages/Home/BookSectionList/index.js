/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";

import BookSection from "./BookSection";
import { BOOK_SECTIONS } from "../../../../constants";

/*---------------------------------
            Component
---------------------------------*/
function BookSectionList({ books, onBookShelfChange }) {
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
  /** Helpers */

  /** Render */
  return <div>{renderContent()}</div>;
  /** Render */
}

export default BookSectionList;
