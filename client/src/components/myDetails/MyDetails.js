import React from "react";
import ProfilePageCSS from "../../css/ProfilePage.module.css";
import { PersonalInfo } from "./PersonalInfo";
import { EmailInfo } from "./EmailInfo";
import { PasswordInfo } from "./PasswordInfo";

export const MyDetails = () => {
  return (
    <div id={ProfilePageCSS.profileDetails}>
      <h1 id={ProfilePageCSS.profileDetailsTitle}>My details</h1>
      <PersonalInfo/>
      <EmailInfo/>
      <PasswordInfo/>
    </div>
  );
};
