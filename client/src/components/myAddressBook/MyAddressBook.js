import React from "react";
import ProfilePageCSS from "../../css/ProfilePage.module.css";
import { AddressInfo } from "./AddressInfo";

export const MyAddressBook = () => {
  return (
    <div id={ProfilePageCSS.profileDetails}>
      <h1 id={ProfilePageCSS.profileDetailsTitle}>My Address Book</h1>
        <AddressInfo/>
    </div>
  );
};
