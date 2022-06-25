import React from "react";
import { useState } from "react";

const Checkout = () => {
  const [counter, setCounter] = useState(1);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };
  const decrementHandler = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Checkout</h1>
      <article className="checkout">
        <section className="card">
          <section className="image">
            <img
              src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png"
              alt=""
            />
          </section>
          <section className="card-body">
            <h4>Apple Watch Series 5 </h4>
            <p>
              by <span>brand</span>
            </p>
            <span>In Stock</span>
            <div className="wrapper">
              <span onClick={decrementHandler} className="min">
                -
              </span>
              <span className="num">{counter}</span>
              <span onClick={incrementHandler} className="plus">
                +
              </span>
            </div>
          </section>
          <section className="item-options">
            <h3> $339.99 </h3>
            <span> Free Shipping </span>
            <button>Remove</button>
            <button>wishlist</button>
          </section>
        </section>
        <section className="checkout-options">
          <h4> Price Details </h4>
          <hr />
          <ul>
            <li>
              Total MRP <span> $574 </span>
            </li>
            <li>
              Estimated Tax <span>$1.3</span>
            </li>
            <li>
              Delivery Charges <span>Free</span>
            </li>
            <hr />
            <li>
              Total <span> $574 </span>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Checkout;
