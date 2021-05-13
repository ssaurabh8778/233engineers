import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Dialog,
  AppBar,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core/";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import firebase from "../../../firebase";
import dateFormat from "dateformat";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

//News & Heighlights section of admin dashboard
export default () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [reload, setReload] = useState(false);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [rowData, setRowData] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const saveDetails = (e) => {
    var dateNow = new Date();
    firebase
      .database()
      .ref("newsAndHighlights/" + Date.now())
      .set(
        {
          id: dateNow,
          publishedOn: dateFormat(dateNow),
          author,
          title,
          content,
          imgUrl,
        },
        (error) => {
          if (error) {
            alert("Error Occured");
            setOpen(false);
            setReload(!reload);
          } else {
            alert("Saved");
            setOpen(false);
          }
        }
      );
  };

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
        setRowData(data);
      });
  }, [reload]);
  const gridOptions = {
    // enable sorting on 'name' and 'age' columns only
    columnDefs: [
      { field: "publishedOn", sortable: true, filter: true },
      { field: "author", sortable: true, filter: true },
      { field: "title", sortable: true, filter: true },
      { field: "content", sortable: true, filter: true, flex: 1 },
    ],

    // other grid options ...
  };

  /*
  const rowData = [
    {
      publishedOn: "Toyota",
      author: "Celica",
      title: 35000,
    },
    {
      publishedOn: "Toyota",
      author: "Celica",
      title: 35000,
    },
  ];

  */
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>News & Highlights</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: "1",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "15px 30px",
                marginTop: "-10px",
              }}
            >
              <Button variant="contained" onClick={handleClickOpen}>
                + Add New & Highlight
              </Button>
            </div>
            <div
              className="ag-theme-alpine"
              style={{ height: "50vh", width: "100%", maxWidth: "1200px" }}
            >
              <AgGridReact
                gridOptions={gridOptions}
                rowData={rowData}
              ></AgGridReact>
            </div>
          </div>

          <Dialog fullScreen open={open}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={() => setOpen(false)}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Add News & Highlights
                </Typography>
                <Button
                  autoFocus
                  color="inherit"
                  onClick={(e) => saveDetails()}
                >
                  Save
                </Button>
              </Toolbar>
            </AppBar>
            <TextField
              margin="dense"
              id="outlined-basic"
              style={{ marginTop: "25px" }}
              label={"Author"}
              variant="outlined"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="ewc1--textInput"
            />
            <TextField
              margin="dense"
              id="outlined-basic"
              multiline
              rows={3}
              label={"Title"}
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="ewc1--textInput"
            />
            <TextField
              margin="dense"
              id="outlined-basic"
              multiline
              rows={10}
              label={"Content"}
              variant="outlined"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="ewc1--textInput"
            />
          </Dialog>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
