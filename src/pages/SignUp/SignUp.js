import React, { useState } from "react";
import "./SignUp.css";
import {
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import firebase from "../../firebase";

export default () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUpWithEmailPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;

        user
          .updateProfile({
            displayName: "Saurabh Sharma",
          })
          .then(function () {
            alert("profile updated");

            firebase
              .database()
              .ref("users/" + userCredential.user.uid)
              .set(
                {
                  fullName,
                  email,
                  phone,
                  country,
                  profession,
                  otherDetails,
                },
                (error) => {
                  if (error) {
                    // The write failed...
                    alert("error");
                  } else {
                    window.location = "/user-dashboard";
                    // Data saved successfully!
                  }
                }
              );
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch(function (error) {
        // An error happened.
        alert("error", JSON.stringify(error));
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
      <Paper className="signup--container">
        <Paper
          elevation="3"
          className="signup--insideContainer1
        "
        >
          <Typography
            variant="h6"
            component="h6"
            color="textPrimary"
            className="signup--topText"
          >
            Are you an Engineer?
            <br />
            <br />a Scientist?
            <br />a Technician? or
            <br />
            an Engineering/Science Student?
            <br />
            <br />
            Would you like to use your skills to occasionally help solve
            challenging but rewarding problems in Ghana and get paid for it?
          </Typography>
        </Paper>
        <Paper elevation="5" className="signup--insideContainer2">
          <Typography
            variant="subtitle1"
            component="h6"
            className="signup--insideContainer2-headerText"
            color="primary"
          >
            If yes, then fill the forms below and let's do this?
          </Typography>
          <TextField
            id="outlined-basic"
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            variant="outlined"
            className="signup--insideContainer2-textInput1"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            className="signup--insideContainer2-textInput1"
          />
          <TextField
            id="outlined-basic"
            label="Phone (Include country code)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
            className="signup--insideContainer2-textInput1"
          />
          <TextField
            id="outlined-basic"
            label="Country of Residence"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            variant="outlined"
            className="signup--insideContainer2-textInput1"
          />
          <TextField
            id="outlined-basic"
            label="Primary Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            placeholder="What is your primary profession?"
            variant="outlined"
            className="signup--insideContainer2-textInput1"
          />
          <TextField
            id="filled-multiline-static"
            label="Other Details"
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
            placeholder="Tell us briefly about your work history and years of experience. Include the type of prjects you would like to work on."
            multiline
            rows={4}
            variant="outlined"
            className="signup--insideContainer2-textInput1"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            className="signup--insideContainer2-textInput1"
          />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            variant="outlined"
            className="signup--insideContainer2-textInput1"
          />
          <Button
            onClick={(e) => signUpWithEmailPassword(e)}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Typography variant="h6" component="h6">
            OR
          </Typography>
          <Button
            onClick={(e) => continueWithGoogle(e)}
            variant="contained"
            color="secondary"
          >
            Sign up with Google
          </Button>
        </Paper>
      </Paper>
    </>
  );
};
