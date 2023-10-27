import React from "react";
import { StarRating } from "./StarRating";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../themes/Buttons";
import { Link } from "react-router-dom";

export const ShopProductCard = (props) => {
  const product = props.product;
  const url = `/product/${product.name}`;
  return (
    <Link to={url} style={{textDecoration: 'none'}}>
      <div className="product-card">
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
          <div className="product-card-price">₹ {product.price}</div>
          <div className="product-card--button-container">
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                className="product-card--add-btn"
                color="chocolate"
              >
                ADD TO BAG
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </Link>
  );
};
