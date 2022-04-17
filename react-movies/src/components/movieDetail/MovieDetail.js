import React from "react";
import { useParams } from "react-router-dom";

import MovieDetailCard from "../movieDetailCard/MovieDetailCard";

import useFetch from "../../hooks/useFetch";

function MovieDetail() {
  let { movieID } = useParams();
  const {
    data: movie,
    error,
    isLoaded,
  } = useFetch(`https://axxes-movies-api.herokuapp.com/api/movies/${movieID}`, [
    movieID,
  ]);

  if (error) return <div>Issue...</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return <MovieDetailCard movie={movie} />;
}

export default MovieDetail;
