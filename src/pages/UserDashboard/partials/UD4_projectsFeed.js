import React from "react";
import "./UD4_projectsFeed.css";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Card, Typography, Paper, Button } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Home4() {
  return (
    <div>
      <Paper className="ud4">
        <UserProjects />
      </Paper>
      <Paper className="ud4">
        <HorizontalNewsScroll />
      </Paper>
    </div>
  );
}

export default Home4;

// list of items
const list = [
  { src: "images/img-3.jpg", path: "/services", text: "1" },
  { src: "images/img-4.jpg", path: "/services", text: "2" },
  { src: "images/img-5.jpg", path: "/services", text: "3" },
  { src: "images/img-6.jpg", path: "/services", text: "4" },
  { src: "images/img-7.jpg", path: "/services", text: "5" },
  { src: "images/img-8.jpg", path: "/services", text: "6" },
  { src: "images/img-9.jpg", path: "/services", text: "7" },
];

const MenuItem = (props) => {
  return (
    <div className="project--container">
      <Typography variant="h5" component="h5">
        <strong>Project Description</strong>
      </Typography>
      <Card
        color="primary"
        style={{ backgroundColor: "#f8f8f8" }}
        elevation="3"
      >
        <Typography variant="subtitle1" component="h5">
          Added By: <strong>Admin</strong>
          <br />
          Sector: <strong>Energy & Resources</strong>
        </Typography>
      </Card>
    </div>
  );
};

export const Menu = (list) =>
  list.map((listItem) => {
    return <MenuItem src={listItem.src} text={listItem.text} />;
  });

export const HorizontalNewsScroll = () => {
  const menu = Menu(list);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Other Relevent Projects</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="ud4--container">
          <ScrollMenu
            scrollBy={1}
            dragging={false}
            wheel={false}
            data={menu}
            arrowLeft={<ArrowBackIos />}
            arrowRight={<ArrowForwardIos />}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const UserProjects = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Your Projects</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color="textPrimary">
            You don't have any projects yet
          </Typography>
          <Button variant="contained" color="primary">
            + Add a project
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
