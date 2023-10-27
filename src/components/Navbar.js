import React from "react";
import logo from "../images/fudge_logo.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../themes/Buttons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav id="nav">
      <div id="nav--logo">
        <Link to="/">
          <img src={logo} id="nav--logo--img" alt="Logo" />
        </Link>
      </div>
      <div id="nav--links-container">
        <ul id="nav--links-container--list">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "initial" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              style={{ textDecoration: "none", color: "initial" }}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link to="/featured" style={{ textDecoration: "none", color: "initial" }}>
              Featured
            </Link>
          </li>
          <li className="nav-dropdown">
            Chocolates
            <div className="nav-dropdown-content">
              <Link 
              to="/shop/milk-chocolate"
              state={{filter: ["Milk Chocolate"]}}
              >
                Milk Chocolate
                </Link>
              <Link to="/shop/dark-chocolate">Dark Chocolate</Link>
              <Link to="/shop/white-chocolate">White Chocolate</Link>
              <Link to="/shop/white-chocolate">Jain Chocolate</Link>
            </div>
          </li>
          <li className="nav-dropdown">
            Sides
            <div className="nav-dropdown-content">
              <Link to="/shop/cookies">Cookies</Link>
              <Link to="/shop/muffins">Muffins</Link>
              <Link to="/shop/cupcakes">Cupcakes</Link>
            </div>
          </li>
          <li className="nav-dropdown">
            Occasions
            <div className="nav-dropdown-content">
              <Link to="/shop/birthdays">Birthdays</Link>
              <Link to="/shop/anniversaries">Anniversaries</Link>
              <Link to="/shop/festivals">Festivals</Link>
              <Link to="/shop/weddings">Weddings</Link>
              <Link to="/shop/party">Party</Link>
            </div>
          </li>
          <li className="nav-dropdown">
            Gifting
            <div className="nav-dropdown-content">
              <Link to="/shop/bouquet">Bouquet</Link>
              <Link to="/shop/wrapping">Wrapping</Link>
              <Link to="/shop/cards">Cards</Link>
              <Link to="/shop/combos">Combos</Link>
            </div>
          </li>
        </ul>
      </div>

      <div id="nav--profile-links">
        <AiOutlineHeart size={"20px"} />
        <LiaShoppingBagSolid size={"20px"} />
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="black" id="nav--login-btn">
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
          </Button>
        </ThemeProvider>
      </div>
    </nav>
  );
};
