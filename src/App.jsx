import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import "./style/style.scss";
import Home from "./components/home";
import Setting from "./components/setting/setting";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/productDetails/productDetails";

const App = () => {
  const [toggleSlide, setToggleSlide] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const slideStatusHandler = () => {
    setToggleSlide(!toggleSlide);
  };

  // get productDetails when user chose item
  const productDetailsHandler = (item) => {
    setProductDetails(item);
  };

  console.log(productDetails);
  return (
    <article className="container">
      <section className="left-section">
        <Sidebar
          slideStatusHandler={slideStatusHandler}
          toggleSlide={toggleSlide}
          setToggleSlide={setToggleSlide}
        />
      </section>
      <section className="right-section">
        <Navbar
          slideStatusHandler={slideStatusHandler}
          toggleSlide={toggleSlide}
          setToggleSlide={setToggleSlide}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                slideStatusHandler={slideStatusHandler}
                toggleSlide={toggleSlide}
                setToggleSlide={setToggleSlide}
                productDetailsHandler={productDetailsHandler}
              />
            }
          />
          <Route
            path="/productDetails/:id"
            element={<ProductDetails productDetails={productDetails} />}
          />
        </Routes>
      </section>

      <Setting />
    </article>
  );
};

export default App;
