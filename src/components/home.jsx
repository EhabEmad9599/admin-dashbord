import React, { useState, useEffect } from "react";
import store from "../store-demo-data.json";
import Filter from "./filter/filter";
import Products from "./products/products";

const Home = ({ productDetailsHandler }) => {
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState();

  // call the data from json file and save it in State
  useEffect(() => {
    setProducts(store.products);
  }, []);

  //get the value of radio button when user click on it ...
  const handleSelect = (item) => {
    setBrand(item);
  };

  // start filter function
  const fillterd = brand
    ? products.filter((item) => item.brand === brand)
    : products;
  // End filter function

  // Start sort function
  // copy of the fillterd array, sort it and then call setProducts with this array

  const handleSort = (sortArray) => {
    if (sortArray === "lowest") {
      const sorted = [...fillterd].sort((a, b) => a.price > b.price);
      setProducts(sorted);
    } else if (sortArray === "highest") {
      const sorted = [...fillterd].sort((a, b) => b.price > a.price);
      setProducts(sorted);
    } else {
      const sorted = [...fillterd].sort((a, b) => a.id > b.id);
      setProducts(sorted);
    }
  };

  // End sort function

  return (
    <>
      <article className="home">
        <section className="content-header">
          <div className="content-header-left">
            <h3>Shop |</h3>
            <span className="material-icons">home</span>
            <ul>
              <li>
                <a href="/">eCommerce &gt;</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
            </ul>
          </div>
          <div className="div content-header-right">
            <button>
              <span className="material-icons">settings</span>
            </button>
          </div>
        </section>
        <div className="content-body">
          <Filter onItemSelect={handleSelect} />
          <Products
            handleSort={handleSort}
            allProducts={fillterd}
            onSort={handleSort}
            productDetailsHandler={productDetailsHandler}
          />
        </div>
      </article>
    </>
  );
};

export default Home;
