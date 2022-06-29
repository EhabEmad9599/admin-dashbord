import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../Redux/Reducer/productSlice";
import { uiAction } from "../../Redux/Reducer/uiSlice";
// import Pagination from "../common/pagination";

const Products = ({ allProducts, handleSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterToggleHandler = () => {
    dispatch(uiAction.filterMenu());
  };
  // const [pageSize, setPageSize] = useState(4);

  // const handlePageChange = (page) => {
  //   console.log(page);
  // };
  const productDetailsHandler = (item) => {
    dispatch(cartAction.productDetailsHandler({ ...item }));
  };

  return (
    <article className="products">
      {/* start ecommerce-header */}
      <section className="ecommerce-header">
        <div className="result-toggler">
          {/*start .burger-menu */}
          <div onClick={filterToggleHandler} id="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          {/* end .burger-menu */}
          <h5>{allProducts.length} result found</h5>
        </div>

        <div className="custom-select">
          <select onChange={(e) => handleSort(e.target.value)}>
            <option id="bg-hover" value="featured">
              Featured
            </option>
            <option id="bg-hover" value="lowest">
              Lowest
            </option>
            <option id="bg-hover" value="highest">
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
        {allProducts
          .filter((product) => product.name.toLowerCase().includes(searchTerm))
          .slice(0, 12)
          .map((product) => {
            return (
              <Link
                to={`/productDetails/${product.id}`}
                onClick={() => productDetailsHandler(product)}
                key={product.id}
                className="item"
              >
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
              </Link>
            );
          })}
      </section>
      {/* start item section */}

      {/* start Pagination */}
      {/* <Pagination
        itemsCount={allProducts.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      /> */}

      {/* End Pagination */}
    </article>
  );
};

export default Products;
