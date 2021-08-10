/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import * as styles from "./styles";

/*---------------------------------
            Component
---------------------------------*/
function SectionHeader({ title }) {
  return <h2 css={styles.header}>{title}</h2>;
}

export default SectionHeader;
