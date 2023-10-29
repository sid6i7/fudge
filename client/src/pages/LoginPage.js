import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  ThemeProvider,
} from "@mui/material";

import { Link } from "react-router-dom";
import {theme} from "../themes/Buttons";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: '' });
    setFormData({ ...formData, [name]: value });
  };
  

  const isEmailValid = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!isEmailValid(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div id="login-container">
      <div id="login-form-container">
        <div id="login-form">
          <Typography variant="h3">Login</Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              autoComplete="current-password"
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
              Sign In
            </Button>
            </ThemeProvider>
          </form>
          <Box mt={2}>
            <Link variant="body2">
              Forgot password?
            </Link>
          </Box>
        </div>
        <Box mt={2}>
          <Typography variant="body2" align="center">
            Don't have an account?{" "}
            <Link to="/register">Sign up here</Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
};
