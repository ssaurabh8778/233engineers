import React from "react";
import "./Home2_aboutUs.css";
import { Card, Paper, Grid } from "@material-ui/core";

export default () => {
  return (
    <Grid item xs={12} container>
      <Grid
        item
        item
        xs={12}
        sm={6}
        style={{ display: "flex", alignItmes: "center", width: "100%" }}
      >
        <Paper elevation="3" className="home2--insideContainer1">
          <h1>Engineers & Scientists Interested in Solving Ghana Challenges</h1>
          <p>
            An estimated 2.5 million new engineers and technicians are required
            in sub-Saharan Africa to achieve the Millenium Development Goals of
            improved access to clean water and sanitation
          </p>
          <p style={{ textAlign: "center" }}>-UNESCO</p>
          <img src="233_images/waterEnv.png" />
        </Paper>
      </Grid>
      <Grid
        item
        item
        xs={12}
        sm={6}
        style={{ display: "flex", alignItmes: "center", width: "100%" }}
      >
        <Paper elevation="3" className="home2--insideContainer2">
          <div style={{ width: "60%", marginBottom: "30px" }}>
            <h1
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                fontStyle: "italic",
              }}
            >
              "Ti koro nko agyina"
            </h1>
            <h1
              style={{
                alignSelf: "flex-end",
                textAlign: "right",
                fontStyle: "italic",
              }}
            >
              -Akan Proverb
            </h1>
          </div>
          <p>
            This Akan proverb literally means one head does not hold council.
            This is similar to the English one that says "two heads are better
            than one"
          </p>
          <p>
            This is why we connect the knowledge, skills abd experience of all
            our members to deliver successful outcomes.
          </p>
          <button className="home2--button">Read more about us</button>
        </Paper>
      </Grid>
    </Grid>
  );
};
