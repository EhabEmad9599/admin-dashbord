import React, { useState } from "react";
import store from "../store-demo-data.json";



const Products = ({filterToggle}) => {
  // create a state for switch filter button

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <article className="products">
      {/* start ecommerce-header */}
      <section className="ecommerce-header">
        <div className="result-toggler">
          {/*start .burger-menu */}
          <div onClick={filterToggle} id="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          {/* end .burger-menu */}
          <h5>{store.products.length} result found</h5>
        </div>

        <div className="custom-select">
          <select>
            <option id="bg-hover" value="Featured">
              Featured
            </option>
            <option id="bg-hover" value="Lowest">
              Lowest
            </option>
            <option id="bg-hover" value="Highest">
              Highest
            </option>
          </select>
          <div className="item-view">
            <button>
              <span className="material-icons">grid_view</span>
            </button>
            <button>
              <span className="material-icons">view_list</span>
            </button>
          </div>
        </div>
      </section>
      {/* End ecommerce-header */}

      {/* start search section */}
      <section className="search">
        <input
          type="search"
          placeholder="Search product"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
          <span className="material-icons">search</span>
        </button>
      </section>

      {/* End search section */}

      {/* start products section */}
      <section className="items">
        {store.products
          .filter((product) => product.name.toLowerCase().includes(searchTerm))
          .slice(0, 9)
          .map((product) => {
            return (
              <section key={product.id} className="item">
                <div className="image">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="item-details">
                  <div className="icon">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                  </div>
                  <h5>${product.price}</h5>
                </div>

                <div className="item-info">
                  <h5>{product.name}</h5>
                  <p>{product.discription}</p>
                </div>
                <div className="item-options">
                  <a className="wishlist" href="/">
                    <span className="material-icons bg-hover">favorite</span>
                    WishList
                  </a>
                  <a className="add-to-cart" href="/">
                    <span className="material-icons">shopping_cart</span>
                    Add to cart
                  </a>
                </div>
              </section>
            );
          })}
      </section>
      {/* start item section */}

      {/* start Pagination */}
      <section className="Pagination">
        <ul>
          <li>&lt;</li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>&gt;</li>
        </ul>
      </section>
      {/* End Pagination */}
    </article>
  );
};

export default Products;
