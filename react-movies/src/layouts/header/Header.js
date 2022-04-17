import React from "react";

import "./Header.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";

// TODO: add navigation etc. ?
function Header() {
  return (
    <header className="header">
      <ContentWrapper className="header-content">
        <h1 className="header-title">React from Hero to zero</h1>
      </ContentWrapper>
    </header>
  );
}

export default Header;
