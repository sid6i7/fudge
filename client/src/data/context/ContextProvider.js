import React, { createContext, useState } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const getTotalPrice = () => {
    if (cart.length === 0) {
      return 0;
    }
    let total = 0;
    cart.map((product) => (total += product.price*product.quantity));
    return total;
  };

  const profile = {
    name: "Siddhant",
    email: "siddhantjain209@gmail.com",
  };

  const addToCart = (product) => {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const modifyQuantity = (product, value) => {
    setCart((prevCart) => {
      const newProduct = {
        ...product,
        quantity: value,
      };

      const newCart = prevCart.map((prod) => {
        if (product === prod) {
          return newProduct;
        } else {
          return prod;
        }
      });

      return newCart;
    });
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => {
      if (product.id !== item.id) return true;
      else return false;
    });
    setCart(newCart);
  };

  const toShare = {
    profile,
    cart,
    modifyQuantity,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  return <Context.Provider value={toShare}>{children}</Context.Provider>;
};
