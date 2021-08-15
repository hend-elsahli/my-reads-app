/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { BookCard } from "../../../../../components";
import * as styles from "../../styles";

/*---------------------------------
            Component
---------------------------------*/

function BookList({ list, onBookShelfChange }) {
  return (
    <div css={styles.bookList}>
      <ol>
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
    </div>
  );
}

export default BookList;
