import React from "react";
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

export const PasswordInput = ({ onChange, placeholder }) => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <TextField
      type={showPassword ? "text" : "password"}
      variant="outlined"
      margin="normal"
      id="currentPassword"
      name="currentPassword"
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
