import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
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
    <div>
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
      <button className="review-btn border-0 mt-2 me-1 mb-2">
        Review Cart <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Cart;
