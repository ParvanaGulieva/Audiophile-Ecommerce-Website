import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data.json";
import "./App.css";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import DetailedPage from "./pages/DetailedPage";
import Checkout from "./pages/Checkout";

function App() {
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Audiophile";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home openCart={openCart} setOpenCart={setOpenCart} />}
        />
        <Route
          path="/headphones"
          element={
            <Headphones
              openCart={openCart}
              setOpenCart={setOpenCart}
              data={data}
            />
          }
        />
        <Route
          path="/speakers"
          element={
            <Speakers
              openCart={openCart}
              setOpenCart={setOpenCart}
              data={data}
            />
          }
        />
        <Route
          path="/earphones"
          element={
            <Earphones
              openCart={openCart}
              setOpenCart={setOpenCart}
              data={data}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <DetailedPage
              openCart={openCart}
              setOpenCart={setOpenCart}
              data={data}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout openCart={openCart} setOpenCart={setOpenCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
