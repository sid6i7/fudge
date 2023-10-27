import React, { useState } from "react";
import { ProductScrollerIcon } from "../components/ProductScrollerIcon";
import productImg1 from "../images/products/vis_1.png";
import productImg2 from "../images/products/vis_2.png";
import productImg3 from "../images/products/vis_3.png";
import productImg4 from "../images/products/vis_4.png";
import { QuantityInput } from "../components/QuantityInput";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../themes/Buttons";
import { DropdownButton } from "../components/DragdownButton";

export const ProductPage = () => {
  const productImages = [productImg1, productImg2, productImg3, productImg4];
  const [displayImage, setDisplayImage] = useState(productImg1);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleImageClick = (image) => {
    setDisplayImage(image);
  };

  return (
    <div className="product-container">
      <div className="product">
        <div className="product--images">
          <div className="product--images--scroller">
            {productImages.map((image) => {
              return (
                <ProductScrollerIcon
                  image={image}
                  onClick={() => setDisplayImage(image)}
                />
              );
            })}
          </div>
          <div>
            <img src={displayImage} className="product--images--display" />
          </div>
        </div>
        <div className="product--details">
          <h1 className="product--details--title">
            The Visionary Truffle Collection
          </h1>
          <div className="product--details--stars">
            <span className="fa fa-star checked product--details--star"></span>
            <span className="fa fa-star checked product--details--star"></span>
            <span className="fa fa-star checked product--details--star"></span>
            <span className="fa fa-star product--details--star"></span>
            <span className="fa fa-star product--details--star"></span>
            <span>53 reviews</span>
          </div>
          <small className="product--details--sku">SKU: ICH0880</small>
          <div className="product--details--description">
            Our Holiday 2023 collection of twenty chocolates comes encased in a
            limited edition Visionary gift box, adorned with hand-drawn
            illustrations. Inside, discover a curated tasting guide scroll to
            inspire and manifest your vision. At the heart of it all are the
            chocolates, meticulously crafted using only superior source
            energetic ingredients.
          </div>
          <div className="product--details--price">
            Price
            <span className="product--details--price--amount">
              ₹ 2450
              <sup>00</sup>
            </span>
          </div>
          <div className="product--details--cart-btn">
            <QuantityInput
              value={quantity}
              min={1}
              max={10}
              onChange={handleQuantityChange}
            />
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="black"
                fullWidth
                style={{ color: "white" }}
              >
                {" "}
                Add to Cart
              </Button>
            </ThemeProvider>
          </div>
          <div className="product--details--other-info">
            <DropdownButton
              title="Ingredients"
              content="Milkfat, Lecithin (soya), Polyglycerol polyricinoleate, Artificial flavor), Sugar, Vegetable fat (palm), Condensed apple pulp, Dried yoghurt (from milk), Wild strawberry preparation (Glucose – fructose syrup (wheat), Sugar, Modified starch, Wild strawberry pulp, Concentrated strawberry juice, Pectins, Artificial flavor, Citric acid, Colors: carmine, turmeric), Blueberry preparation (Glucose – fructose syrup (wheat), Sugar, Concentrated blueberry juice,
        Milk chocolate: cocoa solids 29% minimum, milk solids 14% minimum. Contains 0,6% of blueberry juice and 0,3% of wild strawberry pulp. Alcohol content 0,4% VOL."
            />
            <DropdownButton
              title="Nutrional"
              content="Energy 482 kcal, Fat 26 g of which Saturates 13 g, Carbohydrate 58 g of which Sugars 56 g, Fibre 1.5 g, Protein 3.5 g, Salt 0.13 g"
            />
            <DropdownButton
              title="Item Details"
              content="Manufactured By - LOTTE Wedel sp.z.0.0.ul .Zamoyskiego 28/30 03-801 Warszawa Polska, Poland
                
              Packed By - LOTTE Wedel sp.z.0.0.ul .Zamoyskiego 28/30 03-801 Warszawa Polska, Poland
              
              Imported By - Cococart Ventures Private Limited
              
              Item Dimensions (L*W*H) - 18.5*8*1 cm
              
              Production Shelf Life - 365 Days"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
