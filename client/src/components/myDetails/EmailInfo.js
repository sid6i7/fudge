import React from "react";
import ProfilePageCSS from "../../css/ProfilePage.module.css";
import { Button, TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../themes/Buttons";

export const EmailInfo = () => {
  return (
    <div className={ProfilePageCSS.infoContainer}>
      <h2>Email Address</h2>
      <hr />
      <div className={ProfilePageCSS.info}>
        <h3 className={ProfilePageCSS.formTitle}>
          We require your email so we can send you the required notifications.
        </h3>
        <div className={ProfilePageCSS.form}>
          <div className={ProfilePageCSS.inputContainer}>
            <small className={ProfilePageCSS.inputLabel}>EMAIL</small>
            <TextField
              type="email"
              variant="outlined"
              margin="normal"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={ProfilePageCSS.inputContainer}>
            <small className={ProfilePageCSS.inputLabel}>PASSWORD</small>
            <TextField
              type="password"
              variant="outlined"
              margin="normal"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <small>Enter your password to change your email.</small>
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
