import React from "react";

import "../movies/MoviesPage.css";
import Page from "../../layouts/page/Page";

import MovieDetail from "../../components/movieDetail/MovieDetail";

function DetailPagina() {
  return (
    <Page>
      <MovieDetail />
    </Page>
  );
}

export default DetailPagina;
