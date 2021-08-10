import React from "react";
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
    </div>
  );
  /** Render */
}

export default Home;
