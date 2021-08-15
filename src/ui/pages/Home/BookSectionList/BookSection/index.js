/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";

import { SectionHeader, BookList } from "../../../../components";
import * as styles from "../styles";

/*---------------------------------
            Component
---------------------------------*/
function BookSection({ title, list, onBookShelfChange }) {
  return (
    <div css={styles.section}>
      <SectionHeader title={title} />
      <div css={styles.bookListContainer}>
        <BookList list={list} onBookShelfChange={onBookShelfChange} />
      </div>
    </div>
  );
}

export default BookSection;
