import React from "react";

import "./Card.css";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function CardImage({ src, alt, className }) {
  return <img className={className} src={src} alt={alt} width="100%" />;
}

function CardContent({}) {
  return <div></div>;
}

function CardTitle({ children }) {
  return <h3>{children}</h3>;
}

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;

export default Card;
