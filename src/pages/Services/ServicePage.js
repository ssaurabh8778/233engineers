import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "./ServicePage.css";
import "fontsource-roboto";
import { Button } from "@material-ui/core";

function ServicePage() {
  return (
    <div>
      <Projects />
    </div>
  );
}

export default ServicePage;

const OverView = () => {
  return (
    <>
      <h1>This is OverView</h1>
    </>
  );
};

const KeyPeople = () => {
  return (
    <>
      <h1 className="keyPeople--h1">This is Key People</h1>
      <div className="keyPeople--card--container">
        {keyPeopleData.map(() => (
          <Card className="keyPeople--card">
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "20%",
                backgroundColor: "lightblue",
              }}
            >
              <h3>Person One</h3>
              <Avatar alt="Remy Sharp" src="https://picsum.photos/100" />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <h1>This is Projects</h1>
      <div className="keyPeople--card--container">
        {projectsData.map(() => (
          <Card className="projects--card">
            <img
              className="projects--card--img"
              alt="Remy Sharp"
              src="https://picsum.photos/1000"
            />
            <div
              style={{
                margin: "15px",
                height: "50%",
                backgroundColor: "lightgray",
              }}
            >
              <Typography variant="h6" component="h6">
                Person One
              </Typography>
              <Typography variant="body1" component="h6">
                Person One
              </Typography>
              <div
                style={{
                  justifySelf: "flex-end",
                  alignSelf: "flex-end",
                  backgroundColor: "lightblue",
                }}
              >
                <Button variant="contained" color="primary">
                  Read More
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

{
  /*<OverView />
      <KeyPeople />
      <Projects />*/
}

const keyPeopleData = [{}, {}, {}, {}, {}, {}, {}];

const projectsData = [{}, {}, {}, {}, {}, {}, {}];
