import React, { useState } from "react";
import { prices, categories, brands } from "../../filterData";

const Filter = ({ filterStatus, filterToggle, onItemSelect }) => {
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <>
      <article className={filterStatus ? "active-filter" : ""} id="filter">

        <h4>Filters</h4>
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
          <h5> Price Range </h5>
          <div className="custom-range">
            <input onChange={(e) => setRangeValue(e.target.value)} value={rangeValue} type="range" min="0" max="100" id="slider" />
            <span id="rangeValue">{rangeValue}</span>
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
              <input
                onClick={() => onItemSelect(brand)}
                type="radio"
                name="brand"
                value={brand}
              />
              <label>{brand}</label>
            </div>
          ))}
          {/* start Rating */}
          <section className="rating">
            <div className="rating-star">
              <span className="material-icons checked">star</span>
              <span className="material-icons checked">star</span>
              <span className="material-icons checked">star</span>
              <span className="material-icons checked">star</span>
              <span className="material-icons">star</span>
            </div>
            <div className="stars-received">
              <span>160</span>
            </div>
          </section>
          <section className="rating">
            <div className="rating-star">
              <span className="material-icons checked">star</span>
              <span className="material-icons checked">star</span>
              <span className="material-icons checked">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
            </div>
            <div className="stars-received">
              <span>176</span>
            </div>
          </section>
          <section className="rating">
            <div className="rating-star">
              <span className="material-icons checked">star</span>
              <span className="material-icons checked">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
            </div>
            <div className="stars-received">
              <span>291</span>
            </div>
          </section>
          <section className="rating">
            <div className="rating-star">
              <span className="material-icons checked">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
            </div>
            <div className="stars-received">
              <span>190</span>
            </div>
          </section>
        </section>
      </article>
    </>
  );
};

export default Filter;
