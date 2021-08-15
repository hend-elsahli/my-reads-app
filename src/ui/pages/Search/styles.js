import { css } from "@emotion/react";

/** SearchField */

export const searchField = css`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);

  .closeLink {
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background-image: url("./icons/arrow-back.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
    border: none;
    outline: none;
  }

  .inputContainer {
    flex: 1;
    background: #e9e;

    input {
      width: 100%;
      padding: 15px 10px;
      font-size: 1.25em;
      border: none;
      outline: none;
    }
  }
`;

/** SearchList */
export const listContainer = css`
  padding: 80px 10px 20px;
`;
