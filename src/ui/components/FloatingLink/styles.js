import { css } from "@emotion/react";

export const container = css`
  position: fixed;
  right: 25px;
  bottom: 25px;
`;

export const link = css`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2e7d32;
  background-image: url("/icons/add.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-size: 0;
  outline: 0;
  &:hover {
    background-color: rgb(0, 102, 0);
  }
`;
