/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "@emotion/react";
import BookCardOptions from "./BookCardOptions";
import * as styles from "./styles";

/*---------------------------------
            Component
---------------------------------*/
function BookCard({ title, author }) {
  return (
    <div css={styles.bookCard}>
      <div className="top">
        <div
          className="cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
          }}
        />
        <BookCardOptions />
      </div>
      <div className="title">{title}</div>
      <div className="authors">{author}</div>
    </div>
  );
}

export default BookCard;
