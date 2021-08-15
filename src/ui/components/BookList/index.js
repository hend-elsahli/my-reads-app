/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import BookCard from "../BookCard";
import * as styles from "./styles";

/*---------------------------------
            Component
---------------------------------*/
function BookList({ list, onBookShelfChange }) {
  return (
    <ol css={styles.list}>
      {list.map(({ id, title, authors, shelf, thumbnailUrl }) => (
        <li key={id}>
          <BookCard
            id={id}
            title={title}
            authors={authors}
            shelf={shelf}
            thumbnailUrl={thumbnailUrl}
            onBookShelfChange={onBookShelfChange}
          />
        </li>
      ))}
    </ol>
  );
}

export default BookList;
