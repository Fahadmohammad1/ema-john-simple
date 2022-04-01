import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { deleteItem } = props;
  const { name, img, shipping, id, quantity } = props.item;
  return (
    <div className="card mb-3">
      <div className="d-flex align-items-center">
        <div className="w-25 me-4">
          <img className="img-fluid" src={img} alt="product" />
        </div>
        <div className="d-flex justify-content-between w-100 ">
          <div>
            <h3>{name}</h3>
            <p>Shipping: {shipping}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div>
            <button
              onClick={() => {
                deleteItem(id);
              }}
              className="dlt-btn rounded-circle me-5"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
