import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../Redux/Reducer/productSlice";

const Checkout = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(cartAction.addItemToCart({ ...item }));
  };

  const decrementHandler = (item) => {
    dispatch(cartAction.decrementItemFromCart(item.id));
  };
  const removeItemHandler = (item) => {
    dispatch(cartAction.removeItemFromCart(item.id));
  };

  return (
    <>
      <h1>Checkout</h1>
      <article className="checkout">
        <section className="checkout-items">
          {items.map((item) => (
            <section key={item.id} className="card">
              <section className="image">
                <img src={item.image} alt="" />
              </section>
              <section className="card-body">
                <h4>{item.name} </h4>
                <p>
                  by <span>{item.brand}</span>
                </p>
                <span>In Stock</span>
                <div className="wrapper">
                  <button
                    onClick={() => decrementHandler(item)}
                    className="min"
                  >
                    -
                  </button>
                  <span className="num">{item.quantity}</span>
                  <button onClick={() => addItemHandler(item)} className="plus">
                    +
                  </button>
                </div>
              </section>
              <section className="item-options">
                <h3>$ {item.price}</h3>
                <span> Free Shipping </span>
                <button onClick={() => removeItemHandler(item)}>Remove</button>
                <button>wishlist</button>
              </section>
            </section>
          ))}
        </section>
        <section className="checkout-options">
          <div className="checkout-card">
            <h4> Price Details </h4>
            <hr />
            <ul>
              <li>
                Total MRP <span> $574 </span>
              </li>
              <li>
                Delivery Charges <span>Free</span>
              </li>
              <hr />
              <li>
                Total <span>$ {totalPrice} </span>
              </li>
            </ul>
            <button>Place order</button>
          </div>
        </section>
      </article>
    </>
  );
};

export default Checkout;
