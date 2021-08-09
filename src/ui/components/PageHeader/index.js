/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import * as styles from "./styles";

/*---------------------------------
            Component
---------------------------------*/
function PageHeader({ title }) {
  return (
    <div css={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}

export default PageHeader;
