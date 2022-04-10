import React, { useState } from "react";
import Filter from "./filter";
import Products from "./products";
import Navbar from "./navbar";

const Home = ({ toggleSlide, setToggleSlide, slideStatus }) => {

  const [filterStatus, setFilterStatus] = useState(false);

  const filterToggle = () => {
    setFilterStatus(!filterStatus);
    console.log(filterStatus);
  }

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
          <Filter filterStatus={filterStatus} filterToggle={filterToggle}  />
          <Products filterToggle={filterToggle}  />
        </div>
      </article>
    </>
  );
};

export default Home;
