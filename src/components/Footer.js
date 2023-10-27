import { Button, OutlinedInput, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../themes/Buttons";
import { socials } from "../data/socials";
import { Social } from "./Social";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { DropdownButton } from "./DragdownButton";
import { Link } from "react-router-dom";
import logo from "../images/footer_logo.png";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-content">
      <img src={logo} id="footer-logo"/>
      <div id="footer--socials">
        <h2>Connect with us</h2>
        <span id="footer--subscribe--content">
          Reach us at <a>pudding@fudge.com</a> or <a>through our online contact form.</a>
        </span>
        <div id="footer--socials--logos">
        <CiFacebook size={"60px"} />
        <CiInstagram size={"60px"} />
        <CiTwitter size={"60px"} />
        </div>
        <span id="footer--subscribe--content">
          Have questions? Check out the {" "}
          <Link to="/faq" style={{textDecoration: 'none', color: 'blue'}}>
            frequently asked questions
          </Link>
        </span>
      </div>
      <div id="footer--subscribe">
        <h2>Satisfy Your Cravings Weekly</h2>
        <span id="footer--subscribe--content">
          Subscribe to receive daily offers and new product additions!
        </span>
        <div id="footer--subscribe--email">
          <OutlinedInput fullWidth type="email" placeholder="Your email" />
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="black">
              Subscribe
            </Button>
          </ThemeProvider>
        </div>
      </div>
      </div>
    </div>
  );
};
