import React, { useState, useEffect, useContext } from "react";
import { ShopFilter } from "../components/ShopFilter";
import { fetchProducts } from "../data/products";
import { ShopProductCard } from "../components/ShopProductCard";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../themes/Buttons";

export const ShopPage = () => {
  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
    .then((data) => {
      setAllProducts(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching products: ", error);
      setLoading(false);
    });
  }, []);

  useEffect(() => {

    const newFilteredProducts = allProducts.filter((product) => {
      if(filters.length === 0) return true;
      else if(filters.includes(product.type)) return true;
      else return false;
    })
    setFilteredProducts(newFilteredProducts);
  }, [filters, allProducts]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters([]);
  };

  return (
    <div id="shop-container">
      <div id="shop-filter-container">
        <ShopFilter
        onChange={handleFilterChange}
        allFilters = {filters}
        />
        <ThemeProvider theme={theme}>
          <Button
            onClick={handleResetFilters}
            variant="contained"
            color="black"
            style={{ color: "white" }}
          >
            Reset
          </Button>
        </ThemeProvider>
      </div>
      <div id="shop-products-container">
        {loading ? (
          <div className="loading-bar">
            <div className="loader"></div>
          </div>
        ) :
          filteredProducts.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          )
        )}
      </div>
    </div>
  );
};
