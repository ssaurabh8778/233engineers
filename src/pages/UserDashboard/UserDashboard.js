import React from "react";
import { Paper, Grid } from "@material-ui/core";
import UD1_UserProfile from "./partials/UD1_UserProfile";
import UD2_projectEarnings from "./partials/UD2_projectEarnings";
import UD3_projectInvites from "./partials/UD3_projectInvites";
import UD4_projectsFeed from "./partials/UD4_projectsFeed";
import UD5_newsFeed from "./partials/UD5_newsFeed";

export default function FullWidthGrid() {
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
        <Grid item xs={12} sm={6}>
          <Paper>
            <UD1_UserProfile />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} container spacing={3}>
          <Grid item xs={12}>
            <Paper
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "35px",
              }}
            >
              <UD2_projectEarnings />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "35px",
              }}
            >
              <UD3_projectInvites />
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <UD4_projectsFeed />
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <UD5_newsFeed />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
