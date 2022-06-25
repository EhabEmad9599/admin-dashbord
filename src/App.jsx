import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import "./style/style.scss";
import Home from "./components/home";
import Setting from "./components/setting/setting";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/productDetails/productDetails";
import Checkout from "./components/Checkout/checkout";

const App = () => {
  return (
    <article className="container">
      <section className="left-section">
        <Sidebar />
      </section>
      <section className="right-section">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </section>

      <Setting />
    </article>
  );
};

export default App;
