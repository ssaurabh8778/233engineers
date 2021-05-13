import React from "react";
import Home1_carousal from "./partials/Home1_carousal";
import Home2_aboutUs from "./partials/Home2_aboutUs";
import Home3_whyChooseUs from "./partials/Home3_whyChooseUs";
import Home4 from "./partials/Home4";
import Grid from "@material-ui/core/Grid";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Grid style={{ maxWidth: "1280px" }} container spacing={3}>
        <Grid item xs={12}>
          <Home1_carousal />
        </Grid>

        <Grid item xs={12}>
          <Home2_aboutUs />
        </Grid>
        <Grid item xs={12}>
          <Home3_whyChooseUs />
        </Grid>
        <Grid item xs={12}>
          <Home4 />
        </Grid>
      </Grid>
    </div>
  );
};
