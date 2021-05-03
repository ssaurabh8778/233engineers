import React from "react";
import { Link } from "react-router-dom";
import "./ServicesCard.css";
import { Card, Paper } from "@material-ui/core";

function ServicesCard(props) {
  return (
    <Paper elevation={5} className="servicesCard--cardContainer">
      <img
        src={props.src}
        alt="Travel Image"
        className="servicesCard--cardImage"
      />
      <h1> {props.sectorName}</h1>
    </Paper>
  );
}

export default ServicesCard;
