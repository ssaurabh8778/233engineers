import React from "react";
import "./About4_Leadership.css";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Card, Typography, Paper } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

export default () => {
  return (
    <Paper className="about4--container">
      <h1>Leadership</h1>
      <HorizontalNewsScroll />
    </Paper>
  );
};

// list of items
const list = [
  {
    imgSrc: "233_images/phil.png",
    path: "/services",
    name: "Philip Fosu",
    position: "Founder & CEO",
    otherDetails: "Formar Process Engineer, GHD Inc",
    location: "Irvine, California",
    quote:
      "Look for what need doing and not the credit and praise to be gained from doing it...",
  },
  {
    imgSrc: "233_images/phil.png",
    path: "/services",
    name: "Philip Fosu",
    position: "Founder & CEO",
    otherDetails: "Formar Process Engineer, GHD Inc",
    location: "Irvine, California",
    quote:
      "Look for what need doing and not the credit and praise to be gained from doing it...",
  },
  {
    imgSrc: "233_images/phil.png",
    path: "/services",
    name: "Philip Fosu",
    position: "Founder & CEO",
    otherDetails: "Formar Process Engineer, GHD Inc",
    location: "Irvine, California",
    quote:
      "Look for what need doing and not the credit and praise to be gained from doing it...",
  },
];

const MenuItem = (props) => {
  const {
    quote,
    imgSrc,
    name,
    position,
    otherDetails,
    location,
  } = props.leader;
  return (
    <Card elevation="3" className="about4__cards__item__link" to={props.path}>
      <img
        src={imgSrc}
        alt="Travel Image"
        className="about4__cards__item__img"
      />
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "65%",
        }}
        elevation="3"
      >
        <Typography color="primary" variant="h6">
          {name}
        </Typography>
        <Typography variant="subtitle1">{position}</Typography>
        <Typography variant="subtitle1">{otherDetails}</Typography>
        <Typography variant="subtitle1">{location}</Typography>
      </Card>

      <Typography className="about4--leaderQuote" variant="h6">
        "{quote}"
      </Typography>
    </Card>
  );
};

export const Menu = (list) =>
  list.map((leader) => {
    return <MenuItem leader={leader} />;
  });

export const HorizontalNewsScroll = () => {
  const menu = Menu(list);
  return (
    <div className="App">
      <ScrollMenu
        scrollBy={1}
        dragging={false}
        wheel={false}
        data={menu}
        arrowLeft={<ArrowBackIos />}
        arrowRight={<ArrowForwardIos />}
      />
    </div>
  );
};
