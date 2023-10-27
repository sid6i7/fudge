import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  ThemeProvider,
} from "@mui/material";
import { Link } from "react-router-dom";
import {theme} from "../themes/Buttons";

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Clear the error message for the input field being changed
    setErrors({ ...errors, [name]: "" });
    setFormData({ ...formData, [name]: value });
  };

  const isEmailValid = (email) => {
    // Use a regular expression for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.fullName) {
      validationErrors.fullName = "Full Name is required";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!isEmailValid(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with registration logic
      // You can add your user registration code here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div id="login-container">
      <div id="login-form-container">
        <div id="login-form">
          <Typography variant="h3">Register</Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="name"
              autoFocus
              value={formData.fullName}
              onChange={handleInputChange}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleInputChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <ThemeProvider theme={theme}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="chocolate"
              onClick={handleSubmit}
              style={{color: "white", marginTop: "15px"}}
            >
              Register
            </Button>
            </ThemeProvider>
          </form>
        </div>
        <Box mt={2}>
          <Typography variant="body2" align="center">
            Already have an account? <Link to="/login">Log in here</Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
};