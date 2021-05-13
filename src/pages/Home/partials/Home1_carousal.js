import React from "react";
import "./Home1_carousal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@material-ui/core";

export default () => {
  const Background = "/233_images/signup.jpg";
  return (
    <>
      <Carousel className="home1" showThumbs={false}>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${Background})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
          }}
          className="home1--container"
        >
          <div className="home1--insideContainer">
            <h1 className="c1-h1">
              Join Over 300 Ghanaian Engineers & Scientists
            </h1>
            <div className="home1--button1--div">
              <Button
                size="large"
                variant="contained"
                color="secondary"
                className="home1--button1"
              >
                <h2>Join Us Now</h2>
              </Button>
            </div>
          </div>
        </div>
        <div className="home1--container">
          <img src="https://picsum.photos/1000" alt="" />
          <div className="home1--insideContainer">
            <h1 className="c1-h1">
              Join Over 300 Ghanaian Engineers & Scientists
            </h1>
            <button className="home1--btn"> Join Us Now !</button>
          </div>
        </div>
        <div className="home1--container">
          <img src="https://picsum.photos/1005" alt="" />
          <div className="home1--insideContainer">
            <h1 className="c1-h1">
              Join Over 300 Ghanaian Engineers & Scientists
            </h1>
            <Button variant="contained" color="secondary">
              Join Us Now
            </Button>
          </div>
        </div>
      </Carousel>
    </>
  );
};
