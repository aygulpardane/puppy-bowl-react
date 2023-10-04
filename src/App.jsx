/* eslint-disable no-unused-vars */
import React from "react";
import './App.css';
import Players from "./components/Players";
import SearchForm from "./components/SearchForm";
import {Routes, Route} from "react-router-dom";
import SinglePlayer from "./components/SinglePlayer";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/:id" element={<SinglePlayer />} />
        <Route path="/" element={<Players />} />
      </Routes>
    </div>
  )
}

export default App;
