import { css } from "@emotion/react";

/** BookCard */
export const bookCard = css`
  width: 140px;
  .top {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
  }
  .title {
    margin-top: 10px;
  }
  .authors {
    color: #999;
  }
`;

export const bookCardCover = (thumbnailUrl) => css`
  width: 128px;
  height: 193px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: ${thumbnailUrl ? `url(${thumbnailUrl})` : "#eee"};
`;
/** BookCard */

/** BookCardOptions */
export const bookCardOptions = css`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #60ac5d;
  background-image: url("/icons/arrow-drop-down.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
/** BookCardOptions */
