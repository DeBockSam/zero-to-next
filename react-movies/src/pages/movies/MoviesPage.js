import React from "react";

import "./MoviesPage.css";
import Page from "../../layouts/page/Page";
import MoviesList from "../../components/moviesList/MoviesList";

function MoviesPage() {
  const movies = [...Array(50)].map((_, i) => {
    return { id: i, title: `Movie title ${i + 1}` };
  });
  return (
    <Page>
      <div className="movies-page-content scrollable">
        <main>
          <MoviesList movies={movies} />
        </main>
        <aside>This is a sidebar</aside>
      </div>
    </Page>
  );
}

export default MoviesPage;
