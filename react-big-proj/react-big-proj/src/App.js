import React from "react";
import { Routes, Route } from "react-router-dom";
import RandomPhotos from "./components/RandomPhotos/RandomPhotos";
import RandomPhotosWithSlice from "./components/RandomPhotos/RandomPhotosWithSlice";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import SinglePhoto from "./components/SinglePhoto/SinglePhoto";
import SearchPhoto from "./components/SearchPhoto/SearchPhoto";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/unspashApi" element={<RandomPhotos />} />
          <Route
            path="/unspashApiWithSlice"
            element={<RandomPhotosWithSlice />}
          />
          <Route path="/unspashApi/:id" element={<SinglePhoto />} />
          <Route path="/unspashApiSearch" element={<SearchPhoto />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
