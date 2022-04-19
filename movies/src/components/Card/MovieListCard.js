import React from "react";

import Card from "./Card";

function MovieListCard({ movie }) {
  return (
    <Card>
      <Card.Image src={movie.image} alt="" />
      <div>
        <Card.Title>{movie.title}</Card.Title>
        <div>{movie.genre}</div>
      </div>
    </Card>
  );
}

export default MovieListCard;
