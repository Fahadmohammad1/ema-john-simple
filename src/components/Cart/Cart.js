import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Cart = ({ cart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + shipping + parseFloat(tax);
  return (
    <div className="summary">
      <h5 className="mt-4 text-center">Order Summary</h5>
      <div className="mt-5">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
      </div>
      <h6 className="mb-4">Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button className="clear-btn border-0 me-1">
        Clear Cart <FontAwesomeIcon icon={faTrash} />
      </button>
      <br />
      <NavLink to="/inventory">{children}</NavLink>
    </div>
  );
};

export default Cart;
