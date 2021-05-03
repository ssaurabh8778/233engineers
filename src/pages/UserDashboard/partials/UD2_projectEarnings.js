import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./UD2_projectEarnings.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Paper, Typography } from "@material-ui/core";

export default () => {
  return (
    <>
      <h2
        style={{ marginBottom: "15px", justifySelf: "flex-start" }}
        variant="h6"
        color="primary"
      >
        Total Earnings
      </h2>
      <Paper
        elevation={3}
        style={{ backgroundColor: "#f8f8f8" }}
        className="ud2--paper"
      >
        <Paper
          style={{ backgroundColor: "lightgoldenrodyellow" }}
          className="ud2--earningsCard"
        >
          <h1>$250</h1>
        </Paper>
      </Paper>
    </>
  );
};
