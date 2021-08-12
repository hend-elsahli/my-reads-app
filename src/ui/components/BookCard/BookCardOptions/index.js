/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import * as styles from "../styles";

/*---------------------------------
            Component
---------------------------------*/
function BookCardOptions() {
  return (
    <div css={styles.bookCardOptions}>
      <select>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookCardOptions;
