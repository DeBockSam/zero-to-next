import React from "react";

import "./Page.css";
import Header from "../header/Header";
import ContentWrapper from "../contentWrapper/ContentWrapper";

// We could add Helmet stuff like metadata etc. here from props or info we have in context/router
function Page({ children }) {
  return (
    <div className="page">
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
}

export default Page;
