import React from "react";
import { BackgroundChocolateShower } from "../../components/BackgroundChocolateShower";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export const StartSurvey = () => {
  const toSurvey = () => {};
  const toBrowse = () => {};
  return (
    <div>
      <BackgroundChocolateShower />
      <div id="survey-info">
        <span id="survey-info--greet"> Hey There,</span>
        <span id="survey-info--details">
          We at fudge, understand that buying chocolate can be a tedious
          process. But we're here to help! You can either to go the home page
          and browse for youself or you can let us ask a few questions and we
          will do the heavy lifting for you!
        </span>
        <div id="survey-info--buttons">
          <Button variant="contained" color='info' onClick={toBrowse}>
            <Link
              to="reason"
              style={{ textDecoration: "none", color: "white" }}
            >
              Browse
            </Link>
          </Button>
          <Button variant="contained" color="success" onClick={toSurvey}>
          <Link
              to="reason"
              style={{ textDecoration: "none", color: "white" }}
            >
              Survey
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
