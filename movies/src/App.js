import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Movies, MovieDetail } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
        <Route path="*" element={<div>404 page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
