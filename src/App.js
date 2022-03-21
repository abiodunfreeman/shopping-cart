import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Shop from "./components/Shop";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
