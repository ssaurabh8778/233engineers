import React, { useEffect, useState } from "react";
import "../../App.css";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import About1_WhoWeAre from "./partials/About1_WhoWeAre";
import About2_GetInTouch from "./partials/About2_GetInTouch";
import About3_VisionAndMission from "./partials/About3_VisionAndMission";
import About4_Leadership from "./partials/About4_Leadership";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import firebase from "../../firebase";

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    firebase
      .database()
      .ref("websiteContent/" + "aboutUs")
      .get()
      .then((snapshot) => {
        setData(snapshot.val());
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid style={{ maxWidth: "1280px" }} container spacing={3}>
        <Grid item xs={12}>
          <About1_WhoWeAre data={data} />
        </Grid>
        <About2_GetInTouch data={data} />
        <About3_VisionAndMission data={data} />
        <About4_Leadership />
      </Grid>
    </div>
  );
};
