import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Redux/Reducer/productSlice";

const ProductDetails = () => {
  const productDetails = useSelector((state) => state.cart.productDetails);
  const dispatch = useDispatch();

  const addToCartHandler = (productDetails) => {
    dispatch(
      cartAction.addItemToCart({
        id: productDetails.id,
        name: productDetails.name,
        price: productDetails.price,
        brand: productDetails.brand,
        img: productDetails.img,
        quantity: productDetails.quantity,
      })
    );
  };
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
          <button
            onClick={() => addToCartHandler(productDetails)}
            className="add-to-cart"
          >
            Add to cart
          </button>
          <button className="wishlist">WishList</button>
        </section>
      </article>
      {/* <h1>Product Details</h1> */}
    </>
  );
};

export default ProductDetails;
