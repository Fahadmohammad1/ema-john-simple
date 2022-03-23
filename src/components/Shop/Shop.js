import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);

  const itemCart = (product) => {
    const newCart = [...cart, product];
    setcart(newCart);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="row w-100">
      <div className="col-md-10 col-8">
        <div className="product row row-cols-md-3 row-cols-1  gy-4">
          {products.map((item) => (
            <Product item={item} key={item.id} itemCart={itemCart}></Product>
          ))}
        </div>
      </div>
      <div className="sumarry col-md-2 col-4">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
