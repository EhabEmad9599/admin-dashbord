import React from "react";
import { prices, categories, brands } from "../filterData";

const Filter = ({filterStatus, filterToggle}) => {
  return (
    <>
      <article className={filterStatus ? "active-filter" : ""} id="filter">
        <h5>Filters</h5>
        <section className="filter-body">
          {/* Multi Range section */}
          <h5>Multi Range </h5>
          <div onClick={filterToggle} id="close">
          <span className="material-icons">close</span>
          </div>
          {prices.map((price, index) => (
            <div className="multi-range-price" key={index}>
              <input type="radio" name="rangePrice" value={price.price} />
              <label>{price.price}</label>
            </div>
          ))}

          {/* custome range input */}
          <div className="custom-range">
            <input type="range" min="0" max="100" id="slider" />
            <div id="selector">
              <div className="select-btn"></div>
            </div>
          </div>
          {/* Categories section */}
          <h5>Categories</h5>
          {categories.map((categorie, index) => (
            <div className="categorie" key={index}>
              <input type="radio" name="categorie" value={categorie} />
              <label>{categorie}</label>
            </div>
          ))}
          {/* brands section */}
          <h5>Brands</h5>
          {brands.map((brand, index) => (
            <div className="categorie" key={index}>
              <input type="radio" name="brand" value={brand} />
              <label>{brand}</label>
            </div>
          ))}

        </section>
      </article>
    </>
  );
};

export default Filter;
