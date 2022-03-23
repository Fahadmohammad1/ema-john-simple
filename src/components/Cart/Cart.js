import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
  return (
    <div>
      <h5 className="mt-4 text-center">Order Summary</h5>
      <div className="mt-5">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: $00</p>
        <p>Total Shipping Charge: $00</p>
        <p>Tax: $00</p>
      </div>
      <h6 className="mb-4">Grand Total: $00</h6>
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
