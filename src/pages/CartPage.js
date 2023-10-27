import React, { useState } from "react";
import { CartProduct } from "../components/CartProduct";
import { OrderNote } from "../components/OrderNote";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../themes/Buttons";

export const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(4000);
  const product = {
    name: "Wedel Dark Chocolate With Espresso Filling Bar",
    image: "https://cococart.in/cdn/shop/files/1CH1778_720x.jpg?v=1693485259",
    price: 2000,
    quantity: 2,
    weight: 200,
    stock: 10,
  };
  return (
    <div id="cart-page">
      <div id="cart-page-container">
        <div id="cart-page-container--title">
            Melt Free Shipping across India
        </div>
        <div id="cart-page-products">
          <CartProduct product={product} />
          <CartProduct product={product} />
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
          <div id="checkout-container--misc">Shipping, taxes, and discount codes calculated at checkout.</div>
        </div>
      </div>
    </div>
  );
};
