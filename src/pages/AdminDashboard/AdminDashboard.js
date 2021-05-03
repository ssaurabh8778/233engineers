import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AD1_DetailsOfUsers from "./partitials/AD1_DetailsOfUsers";
import AD2_Projects from "./partitials/AD2_Projects";
import AD3_NewsAndHighlights from "./partitials/AD3_NewsAndHighlights";
import firebase from "../../firebase";
import { Typography, Card } from "@material-ui/core";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import ForumIcon from "@material-ui/icons/Forum";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";
//
export default function FullWidthGrid() {
  const [userData, setUserData] = useState();
  const [totalUsers, setTotalUsers] = useState();
  useEffect(() => {
    firebase
      .database()
      .ref("users/")
      .get()
      .then((snapshot) => {
        console.log(snapshot.val());
        let data = [];
        for (let item in snapshot.val()) {
          data.push(snapshot.val()[item]);
        }
        setUserData(data);
        setTotalUsers(data.length);
      });
  }, []);
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
        <Grid item xs={12} container spacing={3}>
          <Grid item sm={4} xs={12}>
            <Paper className="ad--totatUsers--paper">
              <Typography variant="h6"> Total No of Users</Typography>
              <Card
                style={{ backgroundColor: "#f8f8f8" }}
                className="ad--totatUsers--card"
                elevation="3"
              >
                <Typography variant="h3">{totalUsers}</Typography>
              </Card>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className="ad--totatUsers--paper">
              <Typography variant="h6"> Edit Website Content</Typography>
              <Link to="/edit-website-content">
                <Card
                  style={{ backgroundColor: "#f8f8f8" }}
                  className="ad--totatUsers--card"
                  elevation="3"
                >
                  <LineStyleIcon
                    style={{ fontSize: "65px" }}
                    color="secondary"
                    className="ad--editWebsite--icon"
                  />
                </Card>
              </Link>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className="ad--totatUsers--paper">
              <Typography variant="h6"> Messages</Typography>
              <Link>
                <Card
                  style={{ backgroundColor: "#f8f8f8" }}
                  className="ad--totatUsers--card"
                  elevation="3"
                >
                  <ForumIcon
                    style={{ fontSize: "65px" }}
                    color="primary"
                    className="ad--editWebsite--icon"
                  />
                </Card>
              </Link>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AD1_DetailsOfUsers rowData={userData} />
        </Grid>
        <Grid item xs={12}>
          <AD2_Projects />
        </Grid>
        <Grid item xs={12}>
          <AD3_NewsAndHighlights />
        </Grid>
      </Grid>
    </div>
  );
}
