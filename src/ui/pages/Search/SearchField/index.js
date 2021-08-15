/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import * as styles from "../styles";

/*---------------------------------
            Component
---------------------------------*/
function SearchField({ value, onChange }) {
  return (
    <div>
      <div css={styles.searchField}>
        <Link className="closeLink" to="/">
          Close
        </Link>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Search by title or author"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchField;
