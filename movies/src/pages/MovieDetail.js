import React from "react";
import { useParams } from "react-router-dom";

import Page from "../components/Page/Page";
import MovieDetailCard from "../components/Card/MovieDetailCard";

import useFetch from "../hooks/useFetch";

function MovieDetail() {
  const { movieId } = useParams();

  const {
    data: movie,
    error,
    isLoaded,
  } = useFetch(`https://axxes-movies-api.herokuapp.com/api/movies/${movieId}`, [
    movieId,
  ]);

  return (
    <Page pageTitle={`Movie Detail: ${movieId}`}>
      <MovieDetailCard movie={movie} error={error} isLoaded={isLoaded} />
    </Page>
  );
}

export default MovieDetail;
