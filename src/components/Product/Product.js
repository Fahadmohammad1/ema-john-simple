import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ item, itemCart }) => {
  return (
    <div>
      <Card className="card">
        <Card.Img className="img-fluid p-2" variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <h6>Price: ${item.price}</h6>
          <p className="mt-5">
            <small>
              Manufacturer: {item.seller} <br />
              Rating: {item.ratings} stars
            </small>
          </p>
        </Card.Body>
        <Card.Footer
          onClick={() => {
            itemCart();
          }}
          className="text-center card-footer"
        >
          <a href="#link" className="text-decoration-none  text-dark fw-bold">
            Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Product;
