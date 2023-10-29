import React from "react";
import ProfilePageCSS from "../../css/ProfilePage.module.css";
import { Button, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../themes/Buttons";

export const PersonalInfo = () => {
  return (
    <div id={ProfilePageCSS.infoContainer}>
      <h2>Personal Information</h2>
      <hr />
      <div className={ProfilePageCSS.info}>
        <h3 className={ProfilePageCSS.formTitle}>
          Your information is always safe with us.
        </h3>
        <div className={ProfilePageCSS.form}>
          <div className={ProfilePageCSS.rowInputContainer}>
            <div className={ProfilePageCSS.rowInputFirst}>
              <small className={ProfilePageCSS.inputLabel}>FIRST NAME</small>
              <TextField
                variant="outlined"
                margin="normal"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className={ProfilePageCSS.rowInputSecond}>
              <small className={ProfilePageCSS.inputLabel}>LAST NAME</small>
              <TextField
                variant="outlined"
                margin="normal"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div id={ProfilePageCSS.birthDate}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <small className={ProfilePageCSS.inputLabel}>BIRTH DATE</small>
              <DatePicker />
            </LocalizationProvider>
          </div>
          <div id={ProfilePageCSS.phoneNumber}>
            <small className={ProfilePageCSS.inputLabel}>PHONE NUMBER</small>
            <TextField
              variant="outlined"
              margin="normal"
              id="firstName"
              name="firstName"
              placeholder="Enter your phone number"
            />
            <small>Keep 9-digit format with no spaces and dashes.</small>
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
