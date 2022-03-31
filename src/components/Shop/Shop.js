import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);

  const itemCart = (product) => {
    let newCart = [];
    const exist = cart.find((p) => p.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((p) => p.id !== product.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setcart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((prod) => prod.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setcart(savedCart);
  }, [products]);
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
