import React from "react";
import Card from "./Card";

function MovieDetailCard({ movie, error, isLoaded }) {
  if (error) return <div>OOps something went wrong</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Card>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Card.Image src={movie.image} alt="" />
        </div>
        <Card.Title>{movie.title}</Card.Title>
        <div>{movie.genre}</div>
      </div>
    </Card>
  );
}

export default MovieDetailCard;
