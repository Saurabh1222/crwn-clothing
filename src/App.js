import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/shopPage" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
