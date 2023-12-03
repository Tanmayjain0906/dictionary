import React from "react";
import Navbar from "./components/Navbar";
import "./style.css"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Word from "./components/Word";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/words" element={<Word />} />
      </Routes>
    </div>
  );
}

export default App;
