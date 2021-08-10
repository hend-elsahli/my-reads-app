/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import BookSection from "./BookSection";

/*---------------------------------
            Mock-Up
---------------------------------*/
const sectionsList = [
  {
    title: "Section One",
    books: [
      {
        title: "Book One",
        author: "Author One",
      },
      {
        title: "Book Two",
        author: "Author Two",
      },
    ],
  },
  {
    title: "Section Two",
    books: [
      {
        title: "Book Three",
        author: "Author One",
      },
      {
        title: "Book Four",
        author: "Author Two",
      },
      {
        title: "Book Five",
        author: "Author Three",
      },
    ],
  },
];

/*---------------------------------
            Component
---------------------------------*/
function BookSectionList() {
  /** Helpers */
  const renderContent = () => {
    return sectionsList.map(({ title, books }) => (
      <BookSection key={title} title={title} list={books} />
    ));
  };
  /** Helpers */

  /** Render */
  return <div>{renderContent()}</div>;
  /** Render */
}

export default BookSectionList;
