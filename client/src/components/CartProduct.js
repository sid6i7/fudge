import React, { useContext, useState } from "react";
import { QuantityInput } from "./QuantityInput";
import { Context } from "../data/context/ContextProvider";
import {RiDeleteBin6Line} from "react-icons/ri";

export const CartProduct = (props) => {
  const {cart, removeFromCart, modifyQuantity} = useContext(Context);
  const [quantity, setQuantity] = useState(() => {
    const targetId = props.product.id;
    const quantity = cart.find(product => product.id === targetId).quantity;
    return quantity;
  });
  const handleChange = (value) => {
    setQuantity(value);
    setPrice(props.product.price * value);
    modifyQuantity(props.product, value);
  };
  const [price, setPrice] = useState(
    props.product.price * quantity
  );

  return (
    <div className="cart-product">
      <img src={props.product.image} className="cart-product-img" />
      <div className="cart-product-info">
        <div className="cart-product-info-name">{props.product.name}</div>
        <div className="cart-product-weight">
          Weight: {props.product.weight} g
        </div>
      </div>
     
        <div className="cart-product-info-quantity-btn">
          <QuantityInput
            value={quantity}
            min={1}
            max={props.product.stock}
            onChange={handleChange}
          />
        </div>
        <div className="cart-product-info-quantity-price">₹ {price}</div>
        <div className="cart-product--delete-btn">
          <button onClick={() => removeFromCart(props.product)}>
          <RiDeleteBin6Line />
          </button>
        
        </div>
      </div>
  );
};
