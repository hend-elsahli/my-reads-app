import { css } from "@emotion/react";

/** BookSection */
export const section = css`
  padding: 0 10px 20px;
`;
/** BookSection */

/** BookList */
export const bookListContainer = css`
  text-align: center;
`;

export const bookList = css`
  text-align: center;
  ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li {
      padding: 10px 15px;
      text-align: left;
    }
  }
`;

/** BookList */
