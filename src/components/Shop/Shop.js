import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  const itemCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="row w-100">
      <div className="col-md-10 col-12">
        <div className="product row row-cols-md-3 row-cols-1  gy-4">
          {product.map((item) => (
            <Product item={item} key={item.id} itemCount={itemCount}></Product>
          ))}
        </div>
      </div>
      <div className="sumarry col-md-2 col-12">
        <h5 className="mt-4 text-center">Order Summary</h5>
        <div className="mt-5">
          <p>Selected Items: {count}</p>
          <p>Total Price: $00</p>
          <p>Total Shipping Charge: $00</p>
          <p>Tax: $00</p>
        </div>
        <h6 className="mb-4">Grand Total: $00</h6>
        <button className="clear-btn border-0 me-1">
          Clear Cart <FontAwesomeIcon icon={faTrash} />
        </button>
        <br />
        <button className="review-btn border-0 mt-2 me-1">
          Review Cart <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Shop;
