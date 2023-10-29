import React from "react";
import ProfilePageCSS from "../css/ProfilePage.module.css";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";
import { Button } from "@mui/material";

export const ProfileNav = ({ handleChoice }) => {

  const btnStyle = {
    display: "flex",
    justifyContent: "flex-start",
    color: "black",
    textTransform: "capitalize"
  };
  
  const handleNavLinkClick = (choice) => {
    handleChoice(choice);
  };

  return (
    <div className={ProfilePageCSS.profileNav}>
      <Button
        style={btnStyle}
        onClick={() => handleNavLinkClick("My details")}
      >
        <div className={ProfilePageCSS.profileNavLink}>
          <CgProfile />
          <span className={ProfilePageCSS.profileNavLinkTitle}>My details</span>
        </div>
      </Button>
      <Button
        style={btnStyle}
        onClick={() => handleNavLinkClick("My address book")}
      >
        <div className={ProfilePageCSS.profileNavLink}>
          <IoLocationOutline />
          <span className={ProfilePageCSS.profileNavLinkTitle}>
            My address book
          </span>
        </div>
      </Button>
      <Button
        style={btnStyle}
        onClick={() => handleNavLinkClick("My orders")}
      >
        <div className={ProfilePageCSS.profileNavLink}>
          <IoBagHandleOutline />
          <span className={ProfilePageCSS.profileNavLinkTitle}>My orders</span>
        </div>
      </Button>
      <Button
        style={btnStyle}
        onClick={() => handleNavLinkClick("My profile settings")}
      >
        <div className={ProfilePageCSS.profileNavLink}>
          <AiOutlineSetting />
          <span className={ProfilePageCSS.profileNavLinkTitle}>
            Profile settings
          </span>
        </div>
      </Button>
    </div>
  );
};
