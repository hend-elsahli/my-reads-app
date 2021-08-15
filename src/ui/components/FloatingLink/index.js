/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import * as styles from "./styles";

/*---------------------------------
            Component
---------------------------------*/
function FloatingLink({ title, to }) {
  return (
    <div css={styles.container}>
      <Link css={styles.link} to={to}>
        {title}
      </Link>
    </div>
  );
}

/* <div className="open-search">
  <button onClick={() => this.setState({ showSearchPage: true })}>
    Add a book
  </button>
</div> */

export default FloatingLink;
