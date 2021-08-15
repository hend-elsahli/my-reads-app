/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import BookCardOptions from "./BookCardOptions";
import * as styles from "./styles";

/*---------------------------------
            Component
---------------------------------*/
function BookCard({
  id,
  title,
  authors,
  shelf,
  thumbnailUrl,
  onBookShelfChange,
}) {
  return (
    <div css={styles.bookCard}>
      <div className="top">
        <div
          className="cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnailUrl})`,
          }}
        />
        <BookCardOptions
          id={id}
          shelf={shelf}
          onBookShelfChange={onBookShelfChange}
        />
      </div>
      <div className="title">{title}</div>
      <div className="authors">{authors.toString(", ")}</div>
    </div>
  );
}

export default BookCard;
