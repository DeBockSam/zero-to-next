import React from "react";
import "./ContentWrapper.css";

function ContentWrapper({ children, className }) {
  return (
    <div className={`content--wrapper scrollable ${className || ""}`}>
      {children}
    </div>
  );
}

export default ContentWrapper;
