import React, { useContext, useEffect, useState } from "react";
import { CartProduct } from "../components/CartProduct";
import { OrderNote } from "../components/OrderNote";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../themes/Buttons";
import { allProducts } from "../data/products";
import { Context } from "../data/context/ContextProvider";

export const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(Context);
  
  const getTotalPrice = () => {
    if (cart.length === 0) return 0;
    let total = 0;
    cart.map((product) => (total += product.price * product.quantity));
    return total;
  };
  const totalPrice = getTotalPrice();

  return (
    <div id="cart-page">
      <div id="cart-page-container">
        <div id="cart-page-container--title">
          Melt Free Shipping across India
        </div>
        <div id="cart-headers">
          <span id="cart-headers--description">Description</span>
          <span id="cart-headers--quantity">Quantity</span>
          <span id="cart-headers--price">Price</span>
        </div>
        <div id="cart-page-products">
          {cart.map((product, index) => {
            return <CartProduct key={index} product={product} />;
          })}
        </div>
        <OrderNote />
        <div id="cart-page-total">
          <h2>Subtotal</h2>
          <span id="cart-page-total-amount">₹ {totalPrice}</span>
        </div>
        <div id="checkout-container">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="black"
              id="checkout-container-btn"
            >
              Check out
            </Button>
          </ThemeProvider>
          <div id="checkout-container--gift-card">Have a gift card?</div>
          <div id="checkout-container--misc">
            Shipping, taxes, and discount codes calculated at checkout.
          </div>
        </div>
      </div>
    </div>
  );
};
