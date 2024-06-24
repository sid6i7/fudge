import React, { useContext, useState } from "react";
import { StarRating } from "./StarRating";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../themes/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../data/context/ContextProvider";

export const ShopProductCard = (props) => {
  const navigate = useNavigate();
  const product = props.product;
  const url = `/product/${product.name}`;
  const {cart, addToCart, removeFromCart} = useContext(Context);
  const [inCart, setInCart] = useState(() => {
    const match = cart.find(productInCart => product.id === productInCart.id);
    if(match) return true;
    else return false;
  });

  const handleClick = () => {
    navigate(url)
  }
  return (
    
      <div className="product-card" onClick={handleClick}>
        
        <img src={product.image} className="product-card-img" />
        <div className="product-card-details">
          <div className="product-card-title">{product.name}</div>
          <div className="product-card-quantity">{product.quantity} PIECES</div>
          <div className="product-card-reviews">
            <StarRating
              nOfRatings={product.numberOfReviews}
              rating={product.rating}
            />
          </div>
          <div className="product-card-price">₹ {product.price}
          
          </div>
          
          <div className="product-card--button-container">
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                className="product-card--add-btn"
                color="chocolate"
                onClick={() => {
                  if(inCart) {
                    removeFromCart(product);
                    setInCart(false);
                  }
                  else {
                    addToCart(product);
                    setInCart(true);
                  }
                }}
              >
                {inCart ? "REMOVE FROM BAG" : "ADD TO BAG"} 
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    
  );
};
