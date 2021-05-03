import React, { useEffect, useState } from "react";
import { Button, Paper } from "@material-ui/core";
import Cards from "../../../components/Cards";
import "./About1_WhoWeAre.css";

function HeroSection({ data }) {
  const [about1_whoWeAre_card1, set_about1_whoWeAre_card1] = useState("");

  const [about1_whoWeAre_card2, set_about1_whoWeAre_card2] = useState("");

  const [about1_whoWeAre_card3, set_about1_whoWeAre_card3] = useState("");

  const aboutUs = [
    {
      label: "about1_whoWeAre_card1",
      value: about1_whoWeAre_card1,
      method: set_about1_whoWeAre_card1,
    },
    {
      label: "about1_whoWeAre_card2",
      value: about1_whoWeAre_card2,
      method: set_about1_whoWeAre_card2,
    },
    {
      label: "about1_whoWeAre_card3",
      value: about1_whoWeAre_card3,
      method: set_about1_whoWeAre_card3,
    },
  ];

  useEffect(() => {
    if (data) {
      aboutUs.map((item) => item.method(data[item.label]));
    }
  }, [data]);
  return (
    <Paper elevation="3" className="container">
      <Paper
        component="div"
        style={{ backgroundColor: "lightblue" }}
        elevation="3"
        className="top-text-section"
      >
        <h1>{about1_whoWeAre_card1}</h1>
      </Paper>

      <img className="ci-12" src="233_images/waterEnv.png" />
      <h2>{about1_whoWeAre_card2}</h2>
      <Paper elevation="5" className="about1-inner-container">
        <h1 style={{ color: "#595959" }}>Small teams. Big hearts</h1>
        <p style={{ color: "#595959" }}>
          Tollere odium autem in nostra potestate sint, ab omnibus et contra
          naturam transferre in nobis. Sed interim toto desiderio supprimunt: si
          vis aliqua quae in manu tua tibi necesse confundentur et quae quod
          laudabile esset, nihil tamen possides.
        </p>
        <Button size="large" variant="contained" color="secondary">
          Join The Team
        </Button>
      </Paper>
    </Paper>
  );
}

export default HeroSection;
