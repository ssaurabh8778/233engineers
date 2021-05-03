import React, { useEffect, useState } from "react";
import "./UD5_newsFeed.css";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Card, Typography, Paper } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import firebase from "../../../firebase";

function Home4() {
  return (
    <Paper className="ud5--container">
      <h3>News & Highlights</h3>
      <HorizontalNewsScroll />
    </Paper>
  );
}

export default Home4;

// list of items

const Menu = (list) =>
  list.map((listItem) => {
    return (
      <Card elevation="3" className="ud5__cards__item__link">
        <img
          src={listItem.imgUrl}
          alt="Travel Image"
          className="ud5__cards__item__img"
        />
        <Typography
          style={{
            fontSize: "13px",
            alignSelf: "flex-start",
            margin: "0 10px",
          }}
          color="textSecondary"
          variant="subtitle2"
        >
          {listItem.publishedOn}
        </Typography>

        <Typography
          style={{ alignSelf: "flex-start", margin: "0 10px" }}
          variant="subtitle1"
        >
          {listItem.title}
        </Typography>
      </Card>
    );
  });

const HorizontalNewsScroll = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("newsAndHighlights/")
      .get()
      .then((snapshot) => {
        console.log(snapshot.val());
        let data = [];
        for (let item in snapshot.val()) {
          data.push(snapshot.val()[item]);
        }
        setList(data);
      });
  }, []);
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
