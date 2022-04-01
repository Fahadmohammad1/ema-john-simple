import React from "react";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";

import useProducts from "../Hooks/useProduct";
import ReviewItem from "../ReviewItem/ReviewItem";

import useCart from "../useCart/useCart";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const deleteItem = (id) => {
    const remainignProduct = cart.filter((pd) => pd.id !== id);

    removeFromDb(id);
    setCart(remainignProduct);
  };
  return (
    <div className="row w-100">
      <div className="col-9">
        {cart.map((item) => (
          <ReviewItem
            item={item}
            key={item.id}
            deleteItem={deleteItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="col-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
