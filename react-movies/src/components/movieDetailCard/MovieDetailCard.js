import React from "react";

import Card from "../card/Card";

function MovieCard({ movie }) {
  const { title } = movie;

  return (
    <Card>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Card.Image
            className="movieImage"
            src="https://leclaireur.fnac.com/wp-content/uploads/2021/10/totoro.jpeg"
            alt=""
          />
        </div>
        <div className="cardContent">
          <Card.Title>{title}</Card.Title>
          <p>info</p>
        </div>
      </div>
    </Card>
  );
}

export default MovieCard;
