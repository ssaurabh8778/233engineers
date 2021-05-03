import React from "react";
import "../../App.css";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Home1_Carousal from "./partials/Home1_carousal";
import Home2 from "./partials/Home2";
import Home3 from "./partials/Home3";
import Home4 from "./partials/Home4";
import Grid from "@material-ui/core/Grid";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <Grid style={{ maxWidth: "1280px" }} container spacing={3}>
        <Home1_Carousal />
        <Home2 />
        <Home3 />
        <Home4 />
        <Footer />
      </Grid>
    </div>
  );
};
