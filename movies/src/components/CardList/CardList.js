import React from "react";
import { Link } from "react-router-dom";

import "./CardList.css";
import { MovieListCard } from "../Card";

import useFetch from "../../hooks/useFetch";

const CardList = () => {
  const { data, error, isLoaded } = useFetch(
    "https://axxes-movies-api.herokuapp.com/api/movies"
  );
  const movies = data.docs;

  if (error) return <div>OOps something went wrong</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <ul className="CardList">
      {movies.map((movie, i) => {
        return (
          <li key={movie._id} className="CardListItem">
            <Link to={`/movies/${movie._id}`}>
              <MovieListCard movie={movie} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
