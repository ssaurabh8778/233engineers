import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./UserDashboard.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

// list of items
const list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
];

const MenuItem = ({ text }) => {
  return <div className="menu-item ">{text}</div>;
};

export const Menu = (list) =>
  list.map((listItem) => {
    return <MenuItem text={listItem.name} />;
  });

export default () => {
  const menu = Menu(list);
  return (
    <div className="App">
      <ScrollMenu
        data={menu}
        arrowLeft={<ArrowBackIos />}
        arrowRight={<ArrowForwardIos />}
      />
    </div>
  );
};
