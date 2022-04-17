import React, { useEffect, useState } from "react";

import "./MoviesList.css";
import MovieCard from "../movieCard/MovieCard";

import useFetch from "../../hooks/useFetch";
import Button from "../button/Button";

function Paging({ onPrevClick, onNextClick }) {
  return (
    <div>
      <Button onClick={onPrevClick}>Prev</Button>
      <Button onClick={onNextClick}>Next</Button>
    </div>
  );
}

const LIMIT = 1;

function MoviesList() {
  // { movies }
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: movies,
    error,
    isLoaded,
  } = useFetch(
    `https://axxes-movies-api.herokuapp.com/api/movies?page=${currentPage}&limit=${LIMIT}`,
    [currentPage, LIMIT]
  );

  const onPrevClick = () => {
    if (currentPage > 1) setCurrentPage((current) => current - 1);
  };

  const onNextClick = () => {
    if (currentPage <= movies.pages - 1) {
      setCurrentPage((current) => current + 1);
    }
  };

  if (error) return <div>Issue...</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <ul className="moviesList">
        {movies?.docs.map((movie, i) => {
          return (
            <li key={`Card-${movie._id}`}>
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
      <Paging onPrevClick={onPrevClick} onNextClick={onNextClick} />
    </>
  );
}

export default MoviesList;
