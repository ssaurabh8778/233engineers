import { Button, Card, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./UD3_projectInvites.css";
import { useTransition, animated } from "react-spring";

export default () => {
  const [switch1, setSwitch1] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("This is the project description");
  const transition = useTransition(isVisible, {
    from: { x: -100, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 0, opacity: 0 },
  });

  const toggle = () => {
    console.log("this is working", switch1);
    setSwitch1(!switch1);
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  return (
    <>
      <h2
        style={{ marginBottom: "15px", justifySelf: "flex-start" }}
        variant="h6"
        color="primary"
      >
        Project Requests
      </h2>
      <Card elevation={3} className="UD3-container">
        {transition((style, item) =>
          item ? (
            <animated.div style={style} className="projectInvite--container">
              <Typography variant="h5" component="h5">
                <strong>{text}</strong>
              </Typography>
              <div>
                <Typography variant="subtitle1" component="h5">
                  Added By: <strong>Admin</strong>
                  <br />
                  Sector: <strong>Energy & Resources</strong>
                </Typography>
              </div>
            </animated.div>
          ) : (
            ""
          )
        )}
      </Card>
      <div className="UD3--buttonContainer">
        <Button
          style={{ margin: "5px" }}
          onClick={() => toggle()}
          variant="contained"
          color="primary"
        >
          ACCEPT
        </Button>
        <Button
          style={{ margin: "5px" }}
          onClick={() => toggle()}
          variant="contained"
          color="secondary"
        >
          REJECT
        </Button>
      </div>
    </>
  );
};

/*


*/
