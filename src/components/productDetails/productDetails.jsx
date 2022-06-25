import React from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const productDetails = useSelector(
    (state) => state.productDetails.productDetails
  );
  return (
    <>
      <article className="product">
        <section className="product-image">
          <img src={productDetails.img} alt={productDetails.name} />
        </section>
        <section className="product-details">
          <h3>{productDetails.name}</h3>
          <p>
            by<span> {productDetails.brand}</span>
          </p>
          <h4>$ {productDetails.price}</h4>
          <h5>
            Available | {productDetails.available ? "In stock" : "Out of stock"}
          </h5>
          <p>{productDetails.discription}</p>
          <button className="add-to-cart">Add to cart</button>
          <button className="wishlist">WishList</button>
        </section>
      </article>
      {/* <h1>Product Details</h1> */}
    </>
  );
};

export default ProductDetails;
