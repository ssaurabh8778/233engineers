import React, { Component, useEffect, useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./UD1_UserProfile.css";
import {
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Box,
  Button,
} from "@material-ui/core";
import firebase from "../../../firebase";
import { useAuth } from "../../../AuthContext";
import SnackBar from "../../../components/SnackBar";

export default (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [degree, setDegree] = useState("");
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log("this is working");
    if (currentUser) {
      firebase
        .database()
        .ref("users/" + currentUser.uid)
        .get()
        .then((snapshot) => {
          console.log(snapshot.val());
          setFullName(snapshot.val().fullName ? snapshot.val().fullName : "");
          setEmail(snapshot.val().email ? snapshot.val().email : "");
          setPhone(snapshot.val().phone ? snapshot.val().phone : "");
          setCountry(snapshot.val().country ? snapshot.val().country : "");
          setProfession(
            snapshot.val().profession ? snapshot.val().profession : ""
          );
          setCollegeName(
            snapshot.val().collegeName ? snapshot.val().collegeName : ""
          );
          setDegree(snapshot.val().degree ? snapshot.val().degree : "");
          setOtherDetails(
            snapshot.val().otherDetails ? snapshot.val().otherDetails : ""
          );
        });
    }
  }, [currentUser]);

  const updateUserDetails = () => {
    if (currentUser) {
      firebase
        .database()
        .ref("users/" + currentUser.uid)
        .set(
          {
            fullName,
            email,
            phone,
            degree,
            collegeName,
            country,
            profession,
            otherDetails,
          },
          (error) => {
            if (error) {
              setSnackBarMessage("Some Error Occured!");
              setSnackBarVisible(true);
            } else {
              setSnackBarMessage("User Details Updated Successfully");
              setSnackBarVisible(true);
            }
          }
        );
    }
  };

  return (
    <Paper className="ud1--paper">
      <h3>User Profile</h3>
      <TextField
        margin="dense"
        id="outlined-basic"
        disabled
        label="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        variant="outlined"
        className="ud1--textInput"
      />
      <TextField
        margin="dense"
        id="outlined-basic"
        disabled
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        className="ud1--textInput"
      />
      <TextField
        margin="dense"
        id="outlined-basic"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        label="Phone (Include country code)"
        variant="outlined"
        className="ud1--textInput"
      />
      <TextField
        margin="dense"
        id="outlined-basic"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        label="Country of Residence"
        variant="outlined"
        className="ud1--textInput"
      />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          margin="dense"
          style={{ display: "flex", flex: "1", margin: "0px" }}
          id="outlined-basic"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          label="Primary Profession"
          placeholder="What is your primary profession?"
          variant="outlined"
        />

        <FormControl
          variant="outlined"
          style={{
            width: "100px",
            margin: "0 10px",
            minWidth: "50px",
            display: "flex",
          }}
        >
          <Select
            margin="dense"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={"123"}
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText style={{ width: "100px" }}>
            Exp. In Years
          </FormHelperText>
        </FormControl>
      </Box>

      <TextField
        margin="dense"
        id="outlined-basic"
        value={collegeName}
        onChange={(e) => setCollegeName(e.target.value)}
        label="College Name"
        variant="outlined"
        className="ud1--textInput"
      />
      <TextField
        margin="dense"
        id="outlined-basic"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        label="Degree"
        variant="outlined"
        className="ud1--textInput"
      />

      <TextField
        margin="dense"
        id="filled-multiline-static"
        label="Other Details"
        value={otherDetails}
        onChange={(e) => setOtherDetails(e.target.value)}
        placeholder="Tell us briefly about your work history and years of experience. Include the type of prjects you would like to work on."
        multiline
        rows={4}
        variant="outlined"
        className="ud1--textInput"
      />
      <Box m={1}>
        <Button
          onClick={() => updateUserDetails()}
          className="ud1--button"
          variant="contained"
          color="primary"
        >
          Update Details
        </Button>
      </Box>
      <SnackBar
        visible={snackBarVisible}
        message={snackBarMessage}
        closeSnackBar={() => setSnackBarVisible(false)}
      />
    </Paper>
  );
};
