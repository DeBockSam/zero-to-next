import React from "react";
import { useNavigate } from "react-router-dom";

import "./MovieCard.css";
import Card from "../card/Card";
import Button from "../button/Button";

function MovieCard({ movie }) {
  const { title } = movie;
  const navigate = useNavigate();

  const onClickCardButton = () => {
    navigate(`/movies/${movie._id}`);
  };

  return (
    <Card>
      <Card.Image
        className="movieImage"
        src="https://leclaireur.fnac.com/wp-content/uploads/2021/10/totoro.jpeg"
        alt=""
      />

      <div className="cardContent">
        <Card.Title>{title}</Card.Title>
        <p>info</p>
        <Button onClick={onClickCardButton}>TestButton</Button>
      </div>
    </Card>
  );
}

export default MovieCard;
