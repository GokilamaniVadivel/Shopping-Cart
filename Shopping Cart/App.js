import React, { useState } from "react";
import "./styles.css";

const ShoppingCart = () => {
  const initialStock = {
    Jacket: { count: 5, price: 20 },
    Pants: { count: 4, price: 30 },
    Scarf: { count: 2, price: 25 },
    Pajamas: { count: 5, price: 50 },
    Shirt: { count: 6, price: 45 },
  };

  const [stock, setStock] = useState(initialStock);
  const [cart, setCart] = useState({
    Jacket: 0,
    Pants: 0,
    Scarf: 0,
    Pajamas: 0,
    Shirt: 0,
  });
  const [bill, setBill] = useState(0);

  const addToCart = (product) => {
    if (stock[product].count > 0) {
      setStock((prevStock) => ({
        ...prevStock,
        [product]: {
          ...prevStock[product],
          count: prevStock[product].count - 1,
        },
      }));

      setCart((prevCart) => ({
        ...prevCart,
        [product]: prevCart[product] + 1,
      }));

      setBill((prevBill) => prevBill + stock[product].price);
    }
  };

  return (
    <div className="container">
      <i>
        <h1>Clothing List</h1>
      </i>
      <div>
        {Object.keys(stock).map((product) => (
          <button
            key={product}
            onClick={() => addToCart(product)}
            className="button"
          >
            {product}: {stock[product].count}
          </button>
        ))}
      </div>

      <i>
        <h1>Shopping Cart</h1>
      </i>
      <div>
        {Object.keys(cart).map((product) => (
          <button key={product} className="cart-button">
            {product}: {cart[product]}
          </button>
        ))}
      </div>

      <i>
        <h1>Bill Amount is ${bill}</h1>
      </i>
    </div>
  );
};

export default ShoppingCart;
