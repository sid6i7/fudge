import React, { useState } from "react";
import { QuantityInput } from "./QuantityInput";

export const CartProduct = (props) => {
  const [price, setPrice] = useState(
    props.product.price * props.product.quantity
  );

  return (
    <div className="cart-product">
      <img src={props.product.image} className="cart-product-img" />
      <div className="cart-product-info">
        <div className="cart-product-info-name">{props.product.name}</div>
        <div className="cart-product-weight">
          Weight: {props.product.weight} g
        </div>
        <div className="cart-product-info-quantity">
          <div className="cart-product-info-quantity-btn">
            <QuantityInput
              value={props.product.quantity}
              min={0}
              max={props.product.stock}
            />
          </div>
          <div className="cart-product-info-quantity-price">₹ {price}</div>
        </div>
      </div>
 
    </div>
  );
};
