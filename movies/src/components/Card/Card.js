import React from "react";

import "./Card.css";

const Card = ({ children }) => {
  return <div className="Card">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h3>{children}</h3>;
};

const CardImage = ({ src, alt }) => {
  return (
    <img
      alt={alt}
      src={
        src ||
        "https://netflixinbelgie.be/wp-content/uploads/2020/01/My-Neighbor-Totoro-Netflix.jpg"
      }
      width="100%"
    />
  );
};

Card.Title = CardTitle;
Card.Image = CardImage;

export default Card;
