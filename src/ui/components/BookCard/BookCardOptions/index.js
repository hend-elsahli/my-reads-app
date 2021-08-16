/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { useState } from "react";
import { BOOK_SECTIONS } from "../../../../constants";
import * as styles from "../styles";

/*---------------------------------
            Component
---------------------------------*/
function BookCardOptions({ shelf, onShelfChange }) {
  const [current, setCurrent] = useState(shelf);

  const onChange = (e) => {
    setCurrent(e.target.value);
    onShelfChange(e);
  };

  return (
    <div css={styles.bookCardOptions}>
      <select value={current} onChange={onChange}>
        <option value="move" disabled>
          Move to...
        </option>

        {Object.keys(BOOK_SECTIONS).map((key) => (
          <option key={key} value={key}>
            {BOOK_SECTIONS[key].title}
          </option>
        ))}

        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookCardOptions;
