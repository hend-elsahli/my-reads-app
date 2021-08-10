/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";

import { SectionHeader } from "../../../../components";
import BookList from "./BookList";
import * as styles from "../styles";

/*---------------------------------
            Component
---------------------------------*/
function BookSection({ title, list }) {
  return (
    <div css={styles.section}>
      <SectionHeader title={title} />
      <BookList list={list} />
    </div>
  );
}

export default BookSection;
