import React from "react";
import { Helmet } from "react-helmet";

function Page({ pageTitle, children }) {
  return (
    <div className="Page">
      <Helmet>
        <title>{pageTitle || "whatever"}</title>
      </Helmet>
      <header>From Zero To Next</header>
      {children}
    </div>
  );
}

export default Page;
