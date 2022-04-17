import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home/HomePage";
import MoviesPage from "./pages/movies/MoviesPage";
import DetailPagina from "./pages/detail/DetailPage";

import Page from "./layouts/page/Page";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieID" element={<DetailPagina />} />
        <Route
          path="*"
          element={
            <Page>
              <p>Route nie gevonden</p>
            </Page>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
