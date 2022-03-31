import React from "react";
import Cart from "../Cart/Cart";

import useProducts from "../Hooks/useProduct";
import ReviewItem from "../ReviewItem/ReviewItem";

import useCart from "../useCart/useCart";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div className="row">
      <div className="col-9">
        {cart.map((item) => (
          <ReviewItem item={item} key={item.id}></ReviewItem>
        ))}
      </div>
      <div className="col-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
