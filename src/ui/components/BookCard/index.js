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
  /** Helpers */
  const onShelfChange = (e) => {
    console.log("onShelfChange", e);
    onBookShelfChange({
      book: { id, title, authors, thumbnailUrl, shelf: e.target.value },
    });
  };
  /** Helpers */

  /** Render */
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
        <BookCardOptions shelf={shelf} onShelfChange={onShelfChange} />
      </div>
      <div className="title">{title}</div>
      <div className="authors">{authors ? authors.toString(", ") : ""}</div>
    </div>
  );
  /** Render */
}

export default BookCard;
