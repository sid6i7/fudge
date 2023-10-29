import React from "react";
import ProfilePageCSS from "../../css/ProfilePage.module.css";
import { Button, TextField} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../themes/Buttons";
import { PasswordInput } from "../input/PasswordInput";

export const PasswordInfo = () => {
  
  return (
    <div className={ProfilePageCSS.infoContainer}>
      <h2>Password</h2>
      <hr />
      <div className={ProfilePageCSS.info}>
        <h3 className={ProfilePageCSS.formTitle}>
          Your password always stays safely encrypted with us.
        </h3>
        <div className={ProfilePageCSS.form}>
          <div className={ProfilePageCSS.inputContainer}>
            <small className={ProfilePageCSS.inputLabel}>
              CURRENT PASSWORD
            </small>
            <PasswordInput
                // TODO: ADD ON CHANGE
                placeholder={"Your current password"}
            />
          </div>
          <div className={ProfilePageCSS.inputContainer}>
            <small className={ProfilePageCSS.inputLabel}>
                NEW PASSWORD
                </small>
            <PasswordInput
                placeholder={"Your new password"}
            />
          </div>
          <div className={ProfilePageCSS.inputContainer}>
            <small className={ProfilePageCSS.inputLabel}>
                CONFIRM PASSWORD
                </small>
            <PasswordInput
                placeholder={"Your new password"}
            />
          </div>
          <div className={ProfilePageCSS.btn}>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="black" fullWidth>
                SAVE
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
