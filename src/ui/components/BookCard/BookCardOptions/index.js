/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { BOOK_SECTIONS } from "../../../../constants";
import * as styles from "../styles";

/*---------------------------------
            Component
---------------------------------*/
function BookCardOptions({ id, shelf, onBookShelfChange }) {
  const onChange = (e) => {
    onBookShelfChange({ id, shelf: e.target.value });
  };

  return (
    <div css={styles.bookCardOptions}>
      <select value={shelf} onChange={onChange}>
        <option value="move" disabled>
          Move to...
        </option>

        {Object.keys(BOOK_SECTIONS).map((key) => (
          <option key={key} value={key} onClick={onBookShelfChange}>
            {BOOK_SECTIONS[key].title}
          </option>
        ))}

        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookCardOptions;
