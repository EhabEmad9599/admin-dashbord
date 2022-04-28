import React, { useState, useEffect } from "react";
import store from "../store-demo-data.json";
import Filter from "./filter/filter";
import Products from "./products/products";
import Navbar from "./navbar/navbar";

const Home = ({ toggleSlide, setToggleSlide, slideStatus }) => {
  const [filterStatus, setFilterStatus] = useState(false);
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState();

  // Start burger menu toggle
  const filterToggle = () => {
    setFilterStatus(!filterStatus);
  };
  // End burger menu toggle

  // call the data from json file and save it in State
  useEffect(() => {
    setProducts(store.products);
  }, []);

  //get the value of radio button when user click on it ...
  const handleSelect = (item) => {
    setBrand(item);
  };

  // start filter function
  const fillterd = brand  ? products.filter((item) => item.brand === brand) : products;
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
    } else  {
      const sorted = [...fillterd].sort((a, b) => a.id > b.id);
      setProducts(sorted);

    }
  }


  // End sort function

  return (
    <>
      <article className="home">
        <Navbar
          slideStatus={slideStatus}
          toggleSlide={toggleSlide}
          setToggleSlide={setToggleSlide}
        />
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
          <Filter
            onItemSelect={handleSelect}
            filterStatus={filterStatus}
            filterToggle={filterToggle}
          />
          <Products
            handleSort={handleSort}
            allProducts={fillterd}
            filterToggle={filterToggle}
            onSort={handleSort}
          />
        </div>
      </article>
    </>
  );
};

export default Home;
