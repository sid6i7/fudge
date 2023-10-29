import React from "react";
import ProfilePageCSS from "../../css/ProfilePage.module.css";
import { Button, TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../themes/Buttons";

export const AddressInfo = () => {
  return (
    <div id={ProfilePageCSS.infoContainer}>
      <hr />
      <div className={ProfilePageCSS.info}>
        <h3 className={ProfilePageCSS.formTitle}>
          Your information is always safe with us.
        </h3>
        <div className={ProfilePageCSS.form}>
          <div className={ProfilePageCSS.rowInputContainer}>
            <div className={ProfilePageCSS.rowInputFirst}>
              <small className={ProfilePageCSS.inputLabel}>
                SHIPPING ADDRESS
              </small>
              <TextField
                variant="outlined"
                margin="normal"
                id="streetAddress"
                name="streetAddress"
                placeholder="Enter your street address"
              />
            </div>
            <div className={ProfilePageCSS.rowInputSecond}>
              <small className={ProfilePageCSS.inputLabel}>APT NO.</small>
              <TextField
                variant="outlined"
                margin="normal"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className={ProfilePageCSS.rowInputContainer}>
            <div className={ProfilePageCSS.rowInputFirst}>
              <small className={ProfilePageCSS.inputLabel}>CITY</small>
              <TextField
                variant="outlined"
                margin="normal"
                id="city"
                name="city"
                placeholder="Enter your city"
              />
            </div>
            <div className={ProfilePageCSS.rowInputSecond}>
              <small className={ProfilePageCSS.inputLabel}>STATE</small>
              <TextField
                variant="outlined"
                margin="normal"
                id="state"
                name="state"
                placeholder="Enter your state"
              />
            </div>
          </div>
          <div className={ProfilePageCSS.rowInputContainer}>
            <div className={ProfilePageCSS.rowInputFirst}>
              <small className={ProfilePageCSS.inputLabel}>ZIP CODE</small>
              <TextField
                type="number"
                variant="outlined"
                margin="normal"
                id="zipcode"
                name="zipcode"
                placeholder="Enter your zip code"
              />
            </div>
            <div className={ProfilePageCSS.rowInputSecond}>
              <small className={ProfilePageCSS.inputLabel}>COUNTRY</small>
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                id="country"
                name="country"
                placeholder="Enter your country"
              />
            </div>
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
