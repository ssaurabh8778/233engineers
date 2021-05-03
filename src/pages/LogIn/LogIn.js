import React, { useState } from "react";
import "./LogIn.css";
import {
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import firebase from "../../firebase";
import { useAuth } from "../../AuthContext";

import { Link } from "react-router-dom";

export default () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { currentUser } = useAuth();

  const logInWithEmailPassword = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;

        window.history.back();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const continueWithGoogle = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        firebase
          .database()
          .ref("users/" + user.uid)
          .get()
          .then((snapshot) => {
            console.log(snapshot);
            if (!snapshot.val()) {
              firebase
                .database()
                .ref("users/" + user.uid)
                .set({
                  fullName: user.displayName,
                  email: user.email,
                  otherDetails: "other details",
                });
              window.location = "/user-dashboard";
            } else {
              window.location = "/user-dashboard";
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Grid className="login--container">
        <Paper elevation="5" className="login--insideContainer2">
          <Paper
            className="login--insideContainer1
        "
          >
            <img className="login--logo" src="/233_images/logo.png" />
            <h2 style={{ color: "#204d65", marginBottom: "25px" }}>
              233engineers
            </h2>
          </Paper>
          <Typography
            variant="h5"
            component="h5"
            className="login--insideContainer2--headerText"
            color="primary"
          >
            AKWAABA!
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            className="login--insideContainer2-textInput1"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            className="login--insideContainer2-textInput1"
          />
          <Link>
            <Typography
              variant="subtitle1"
              component="h6"
              color="primary"
              style={{ textDecoration: "underline" }}
            >
              Forgot your password?
            </Typography>
          </Link>

          <Button
            onClick={(e) => logInWithEmailPassword(e)}
            size="large"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <Typography variant="h6" component="h6">
            OR
          </Typography>
          <Button
            onClick={(e) => continueWithGoogle(e)}
            size="large"
            variant="contained"
            color="secondary"
          >
            Continue with Google1
          </Button>
          <Link to="/sign-up">
            <Typography
              variant="subtitle1"
              component="h6"
              color="primary"
              style={{ textDecoration: "underline" }}
            >
              Not a member yet? Sign Up
            </Typography>
          </Link>
        </Paper>
      </Grid>
    </>
  );
};
