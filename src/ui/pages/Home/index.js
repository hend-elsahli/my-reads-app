import React from "react";

import { FloatingLink } from "../../components";
import PageHeader from "../../components/PageHeader";
import BookSectionList from "./BookSectionList";

/*---------------------------------
            Component
---------------------------------*/
function Home() {
  /** Render */
  return (
    <div>
      <PageHeader title="My Reads" />
      <BookSectionList />
      <FloatingLink title="Add a Book" to="/search" />
    </div>
  );
  /** Render */
}

export default Home;
